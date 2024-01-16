import { resolve } from "node:path";
import { pino } from "pino";

const logger = pino({
  transport: {
    targets: [
      process.env.NODE_ENV === "production"
        ? {
            target: "pino/file",
            level: "info",
            options: {
              destination: 1,
            },
          }
        : {
            target: "pino-pretty",
            level: "info",
            options: {
              colorize: true,
            },
          },
      {
        target: "pino/file",
        level: "info",
        options: {
          destination: resolve("logs", "info.log"),
          mkdir: true,
          append: true,
        },
      },
    ],
  },
});

export default logger;
