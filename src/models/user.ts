import type { CommonStatus } from "./enums";

export interface UserProfileVO {
  deptId: string;
  roleIds?: Array<string>;
  username: string;
  nickname?: string;
  phone?: string;
  email?: string;
  status?: CommonStatus;
  createdAt: string;
}
