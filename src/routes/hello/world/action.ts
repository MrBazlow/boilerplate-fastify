import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const action: FastifyPluginAsyncTypebox = async (fastify, opts) => {
  fastify.get("", { exposeHeadRoute: false }, async (request, reply) => {
    await reply.code(200).send("Hello world!");
  });
};

export default action;
