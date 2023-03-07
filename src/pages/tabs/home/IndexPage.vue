<template>
  <in-nav-container>
    首页
    <div>{{ getUsername }}</div>
    <div>{{ getRoles }}</div>
    <div>{{ getUserInfoWhetherExist }}</div>
  </in-nav-container>
</template>

<script lang="ts" setup>
import { useUserInfoStore } from "@/stores/modules/auth";

const { getUsername, getRoles, getUserInfoWhetherExist } = storeToRefs(
  useUserInfoStore()
);
</script>
