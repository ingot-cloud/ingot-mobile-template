export const useRouterStore = defineStore("router", () => {
  const cacheNames = ref<Array<string>>([]);

  return { cacheNames };
});
