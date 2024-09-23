/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * AzuraCast
 * AzuraCast is a standalone, turnkey web radio management tool. Radio stations hosted by AzuraCast expose a public API for viewing now playing data, making requests and more.
 * OpenAPI spec version: 0.20.1
 */

export type CustomFieldAllOf = {
  /**
   * An ID3v2 field to automatically assign to this value, if it exists in the media file.
   * @nullable
   */
  auto_assign?: string | null;
  name?: string;
  /** The programmatic name for the field. Can be auto-generated from the full name. */
  short_name?: string;
};
