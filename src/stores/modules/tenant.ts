import { useAppStore } from "@/stores/modules/app";

export const useTenantStore = defineStore("tenant", () => {
  const appStore = useAppStore();

  const globalTenant = ref<string>(appStore.getTenant);
  const getGlobalTenant = computed(() => globalTenant.value);

  /**
   * 修改全局tenant
   */
  const changeGlobalTenant = (tenant?: string) => {
    if (!tenant) {
      tenant = appStore.getTenant;
    }
    globalTenant.value = tenant;
  };

  /**
   * 重置为默认值
   */
  const resetGlobalTenant = () => {
    globalTenant.value = appStore.getTenant;
  };

  return {
    getGlobalTenant,
    changeGlobalTenant,
    resetGlobalTenant,
  };
});
