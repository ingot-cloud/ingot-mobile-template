import type { Router, RouteLocationRaw } from "vue-router";

export function useGo(router?: Router) {
  const { push, replace } = router || useRouter();
  return (opt: RouteLocationRaw, isReplace = false) => {
    if (!opt) {
      return;
    }
    isReplace ? replace(opt) : push(opt);
  };
}

export function useRouterBack(router?: Router) {
  const { back } = router || useRouter();
  return { back };
}
