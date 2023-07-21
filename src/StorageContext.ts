import { createStorageContext } from "@startpage/local-storage";

export const { StorageConsumer, StorageProvider, useStorage } =
  createStorageContext(
    "image-url",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzA0YWc5czVob3d4cjFvcnc0MXV1aG01d3Bqbm94ZWZuNjNwdjM5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/84SFZf1BKgzeny1WxQ/giphy.gif"
  );
