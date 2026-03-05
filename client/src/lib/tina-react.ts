import { useMemo, useEffect, useState } from "react";

function hashFromQuery(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char & 4294967295;
  }
  return Math.abs(hash).toString(36);
}

function addMetadata(id: string, obj: any, currentPath: string[]): any {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean") return obj;
  if (obj instanceof String || obj instanceof Number || obj instanceof Boolean) return obj.valueOf();
  if (Array.isArray(obj)) {
    return obj.map((item: any, idx: number) => addMetadata(id, item, [...currentPath, String(idx)]));
  }
  if (typeof obj === "object") {
    if ("type" in obj && obj.type === "root") return obj;
    const transformedObj: any = {};
    for (const key of Object.keys(obj)) {
      transformedObj[key] = addMetadata(id, obj[key], [...currentPath, key]);
    }
    return { ...transformedObj, _content_source: { queryId: id, path: currentPath } };
  }
  return obj;
}

export function tinaField(obj: any, field?: string, index?: number): string {
  if (!obj || !obj._content_source) return "";
  const { queryId, path } = obj._content_source;
  if (typeof index === "number" && typeof field !== "undefined") {
    return `${queryId}---${[...path, field, index].join(".")}`;
  }
  if (typeof field !== "undefined") {
    return `${queryId}---${[...path, field].join(".")}`;
  }
  return `${queryId}---${path.join(".")}`;
}

export function useTina<T extends object>(props: {
  query: string;
  variables: object;
  data: T;
}): { data: T; isClient: boolean } {
  const id = useMemo(
    () => hashFromQuery(JSON.stringify({ query: props.query, variables: props.variables })),
    [props.query, JSON.stringify(props.variables)]
  );

  const processedData = useMemo((): T => {
    if (!props.data) return props.data;
    try {
      const clone = JSON.parse(JSON.stringify(props.data));
      return addMetadata(id, clone, []) as T;
    } catch {
      return props.data;
    }
  }, [props.data, id]);

  const [data, setData] = useState<T>(processedData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setData(processedData);
    try { parent.postMessage({ type: "url-changed" }); } catch (_) {}
  }, [id, processedData]);

  useEffect(() => {
    try {
      const { ...rest } = props as any;
      parent.postMessage({ type: "open", ...rest, id }, window.location.origin);
    } catch (_) {}

    const handleMessage = (event: MessageEvent) => {
      if (!event.data) return;
      if (event.data.type === "updateData" && event.data.id === id) {
        try {
          const updated = addMetadata(id, JSON.parse(JSON.stringify(event.data.data)), []);
          setData(updated as T);
        } catch (_) {}
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      try { parent.postMessage({ type: "close", id }, window.location.origin); } catch (_) {}
    };
  }, [id]);

  return { data, isClient };
}

export function useEditState(): { edit: boolean } {
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    try {
      parent.postMessage({ type: "isEditMode" }, window.location.origin);
      window.addEventListener("message", (event: MessageEvent) => {
        if (event.data?.type === "isEditMode") setEdit(!!event.data.value);
      });
    } catch (_) {}
  }, []);
  return { edit };
}
