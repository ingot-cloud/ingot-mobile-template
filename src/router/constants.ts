export const NotFound = {
  path: "/:pathMatch(.*)",
  meta: { hideMenu: true, breadcrumbHidden: true },
  redirect: "/404",
};
export enum PageLayoutViewPath {
  MAIN = "@/layouts/InAppLayout.vue",
  SIMPLE = "@/layouts/InSimpleLayout.vue",
}
export enum PageName {
  REDIRECT = "Redirect",
}
export enum PagePath {
  HOME = "/home",
}

/**
 * 布局视图
 */
export const LAYOUT_MAIN = () => import(PageLayoutViewPath.MAIN);
export const LAYOUT_SIMPLE = () => import(PageLayoutViewPath.SIMPLE);
const dynamicViewsModules = import.meta.glob("@/pages/**/*.vue");
Object.keys(dynamicViewsModules).forEach((key) => {
  dynamicViewsModules[`@${key.substring("/src".length)}`] =
    dynamicViewsModules[key];
  delete dynamicViewsModules[key];
});
dynamicViewsModules[PageLayoutViewPath.MAIN] = LAYOUT_MAIN;
dynamicViewsModules[PageLayoutViewPath.SIMPLE] = LAYOUT_SIMPLE;
export const importComponent = (viewPath: string) => {
  return dynamicViewsModules[viewPath];
};
