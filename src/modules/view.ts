import { resolve } from "node:path";

import { fastifyPlugin } from "fastify-plugin";
import { fastifyView } from "@fastify/view";
import handlebars from "handlebars";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { fileURLToPath } from "node:url";

const view: FastifyPluginAsyncTypebox = async (fastify, opts) => {
  await fastify.register(fastifyView, {
    engine: {
      handlebars,
    },
    root: resolve(fileURLToPath(import.meta.url), "..", "..", "views"),
  });
  fastify.log.info("@fastify/view has been registered");
};

export default fastifyPlugin(view, {
  name: "view",
  dependencies: ["env"],
});
