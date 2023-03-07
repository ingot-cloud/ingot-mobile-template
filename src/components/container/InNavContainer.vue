<template>
  <in-container>
    <van-nav-bar
      :title="title"
      :left-arrow="leftArrow"
      @click-left="privateOnClickLeft"
    />

    <div class="content">
      <slot />
    </div>
  </in-container>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
  },
  leftArrow: {
    type: Boolean,
    default: false,
  },
  customBackEvent: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["onBackClick"]);
const Back = useRouterBack();
const privateOnClickLeft = () => {
  if (props.customBackEvent) {
    emits("onBackClick");
    return;
  }
  Back.back();
};
</script>
<style lang="postcss" scoped>
.content {
  --van-nav-bar-height: var(--in-nav-bar-height);
  height: calc(100% - var(--van-nav-bar-height));
}
</style>
