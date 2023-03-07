<template>
  <van-tabbar>
    <van-tabbar-item
      replace
      v-for="item in tabs"
      :key="item.title"
      :to="item.to"
    >
      <span>{{ item.title }}</span>
      <template #icon="props">
        <img :src="props.active ? item.activeIcon : item.inactiveIcon" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { tabbarProps } from "./props";

defineProps(tabbarProps);
</script>
