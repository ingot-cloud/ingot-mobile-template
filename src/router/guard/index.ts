import type { BaseNavigationGuard } from "@/router/types";
import type { Router } from "vue-router";
import { AuthGuard } from "./authRouter";
import { UserInfoGuard } from "./userRouter";
import { GlobalGuard } from "./globalRouter";

const guardList: Array<BaseNavigationGuard> = [
  new GlobalGuard(),
  new UserInfoGuard(),
  new AuthGuard(),
];

guardList.sort((l, r) => {
  return l.order() - r.order();
});

export const setupGuard = (router: Router) => {
  // 注册 guard
  guardList.forEach(async (guard) => {
    router.beforeEach(guard.proxy(router));
  });
};
