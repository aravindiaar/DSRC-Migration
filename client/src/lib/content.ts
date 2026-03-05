import { useQuery } from "@tanstack/react-query";

const IS_STATIC = import.meta.env.VITE_STATIC_BUILD === "true";

async function loadStaticContent() {
  const { staticContent } = await import("@/lib/staticContent");
  return staticContent;
}

export function useGlobalContent() {
  return useQuery<any>({
    queryKey: ["/api/content/global"],
    ...(IS_STATIC && {
      queryFn: async () => (await loadStaticContent()).global,
    }),
  });
}

export function usePageContent(page: string) {
  return useQuery<any>({
    queryKey: ["/api/content/pages", page],
    ...(IS_STATIC && {
      queryFn: async () => (await loadStaticContent()).pages[page],
    }),
  });
}

export function useServiceContent(slug: string) {
  return useQuery<any>({
    queryKey: ["/api/content/services", slug],
    ...(IS_STATIC && {
      queryFn: async () => (await loadStaticContent()).services[slug],
    }),
  });
}
