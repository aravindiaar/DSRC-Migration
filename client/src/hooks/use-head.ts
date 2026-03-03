import { useEffect } from "react";

interface HeadProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export function useHead({ title, description, ogTitle, ogDescription, ogType = "website" }: HeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) setMeta("description", description);
    if (ogTitle || title) setMeta("og:title", ogTitle || title, "property");
    if (ogDescription || description) setMeta("og:description", (ogDescription || description)!, "property");
    setMeta("og:type", ogType, "property");
  }, [title, description, ogTitle, ogDescription, ogType]);
}
