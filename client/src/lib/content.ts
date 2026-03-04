import { useQuery } from "@tanstack/react-query";

export function useGlobalContent() {
  return useQuery<any>({
    queryKey: ["/api/content/global"],
  });
}

export function usePageContent(page: string) {
  return useQuery<any>({
    queryKey: ["/api/content/pages", page],
  });
}

export function useServiceContent(slug: string) {
  return useQuery<any>({
    queryKey: ["/api/content/services", slug],
  });
}
