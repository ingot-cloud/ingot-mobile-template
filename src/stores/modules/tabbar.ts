import type { TabItem } from "@/layouts/widgets/tabbar/types";

const Tabs: Array<TabItem> = [
  {
    title: "首页",
    activeIcon: "",
    inactiveIcon: "",
  },
  {
    title: "个人中心",
    activeIcon: "",
    inactiveIcon: "",
  },
];

export const useTabbarStore = defineStore("tabbar", () => {
  const tabs = ref<Array<TabItem>>(Tabs);
  const current = ref(0);

  return { tabs, current };
});
