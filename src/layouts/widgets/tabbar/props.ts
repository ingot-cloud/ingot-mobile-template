import type { PropType } from "vue";
import type { TabItem } from "./types";

export const tabbarProps = {
  tabs: {
    type: Array as PropType<Array<TabItem>>,
    default: [],
  },
};
