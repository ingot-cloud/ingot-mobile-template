<template>
  <van-button @click="privateOnClick">
    <slot></slot>
  </van-button>
</template>
<script lang="ts" setup>
const emits = defineEmits(["in-click"]);
const triggerClick = useThrottleFn((e: MouseEvent) => {
  emits("in-click", e);
}, 1200);
const privateOnClick = (e: MouseEvent) => {
  triggerClick(e);
};
</script>
