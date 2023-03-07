<template>
  <div class="layout">
    <div class="main">
      <router-view v-slot="{ Component }">
        <keep-alive :include="cacheNames">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>

    <in-tabbar :tabs="tabs" v-model="current" />
  </div>
</template>
<script lang="ts" setup>
import { useRouterStore } from "@/stores/modules/router";
import { useTabbarStore } from "@/stores/modules/tabbar";
const { cacheNames } = storeToRefs(useRouterStore());
const { tabs, current } = storeToRefs(useTabbarStore());
</script>
<style lang="postcss" scoped>
.layout {
  --van-tabbar-height: var(--in-tabbar-height);
  height: calc(100vh - var(--van-tabbar-height));

  & .main {
    height: 100%;
  }
}
</style>
