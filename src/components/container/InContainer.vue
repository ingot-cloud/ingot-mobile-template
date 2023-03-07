<template>
  <div class="in-container">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  showBacktop: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="postcss" scoped>
.in-container {
  @apply w-full h-full box-border overflow-x-hidden p-[var(--in-common-padding)] shadow-sm bg-[var(--in-bg-color)];
}
</style>
