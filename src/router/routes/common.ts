import type { RouteRecordRaw } from "vue-router";
import { PagePath, LAYOUT_MAIN } from "@/router/constants";

/**
 * 公共路由
 */
export const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: PagePath.HOME,
    component: LAYOUT_MAIN,
    children: [
      {
        path: PagePath.HOME,
        meta: {
          title: "首页",
          isAffix: true,
          permitAuth: true,
        },
        component: () => import("@/pages/tabs/home/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/500",
    meta: { permitAuth: true },
    component: () => import("@/pages/common/errors/500Page.vue"),
  },
  {
    path: "/403",
    meta: { permitAuth: true },
    component: () => import("@/pages/common/errors/403Page.vue"),
  },
  {
    path: "/404",
    meta: { permitAuth: true },
    component: () => import("@/pages/common/errors/404Page.vue"),
  },
];
