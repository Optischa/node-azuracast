/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * AzuraCast
 * AzuraCast is a standalone, turnkey web radio management tool. Radio stations hosted by AzuraCast expose a public API for viewing now playing data, making requests and more.
 * OpenAPI spec version: 0.20.1
 */

export type ApiStationQueueDetailedAllOf = {
  /**
   * Custom AutoDJ playback URI, if it exists.
   * @nullable
   */
  autodj_custom_uri?: string | null;
  /** Indicates whether the song has already been marked as played. */
  is_played?: boolean;
  /**
   * Log entries on how the specific queue item was picked by the AutoDJ.
   * @nullable
   */
  log?: unknown[] | null;
  /** Indicates whether the song has been sent to the AutoDJ. */
  sent_to_autodj?: boolean;
};
