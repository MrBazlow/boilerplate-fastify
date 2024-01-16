import { fastifyPlugin } from "fastify-plugin";
import { fastifyMultipart } from "@fastify/multipart";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const multipart: FastifyPluginAsyncTypebox = async (fastify, opts) => {
  await fastify.register(fastifyMultipart, {
    attachFieldsToBody: "keyValues",
  });
  fastify.log.info("@fastify/multipart has been registered");
};

export default fastifyPlugin(multipart, {
  name: "multipart",
  dependencies: ["env"],
});
