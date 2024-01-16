import { resolve } from "node:path";

import { fastifyPlugin } from "fastify-plugin";
import { fastifyStatic } from "@fastify/static";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { fileURLToPath } from "node:url";

const cookie: FastifyPluginAsyncTypebox = async (fastify, opts) => {
  await fastify.register(fastifyStatic, {
    root: resolve(fileURLToPath(import.meta.url), "..", "..", "public"),
    serve: true,
    prefix: "/public/",
  });
  fastify.log.info("@fastify/cookie has been registered");
};

export default fastifyPlugin(cookie, {
  name: "cookie",
  dependencies: ["env"],
});
