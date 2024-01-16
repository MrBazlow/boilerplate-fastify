import { Type } from "@sinclair/typebox";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const action: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.route({
    url: "/",
    method: "GET",
    exposeHeadRoute: false,
    handler: async (request, reply) => {
      await reply.view("./index.hbs");
    },
  });
};

export default action;
