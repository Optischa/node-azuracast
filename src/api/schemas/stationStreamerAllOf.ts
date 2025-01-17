/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * AzuraCast
 * AzuraCast is a standalone, turnkey web radio management tool. Radio stations hosted by AzuraCast expose a public API for viewing now playing data, making requests and more.
 * OpenAPI spec version: 0.20.1
 */

export type StationStreamerAllOf = {
  /** @nullable */
  comments?: string | null;
  /** @nullable */
  display_name?: string | null;
  enforce_schedule?: boolean;
  is_active?: boolean;
  /** @nullable */
  reactivate_at?: number | null;
  /** StationSchedule> */
  schedule_items?: unknown[];
  streamer_password?: string;
  streamer_username?: string;
};
