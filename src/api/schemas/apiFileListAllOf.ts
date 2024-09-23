/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * AzuraCast
 * AzuraCast is a standalone, turnkey web radio management tool. Radio stations hosted by AzuraCast expose a public API for viewing now playing data, making requests and more.
 * OpenAPI spec version: 0.20.1
 */
import type { ApiFileListAllOfDir } from './apiFileListAllOfDir';
import type { ApiFileListAllOfMedia } from './apiFileListAllOfMedia';
import type { FileTypes } from './fileTypes';

export type ApiFileListAllOf = {
  /** @nullable */
  dir?: ApiFileListAllOfDir;
  /** @nullable */
  media?: ApiFileListAllOfMedia;
  path?: string;
  path_short?: string;
  /** @nullable */
  size?: number | null;
  text?: string;
  timestamp?: number;
  type?: FileTypes;
};
