import NodeCache from "node-cache";

// Cache will refresh once per day.
export const cache = new NodeCache({ stdTTL: 60 * 60 * 24 });
