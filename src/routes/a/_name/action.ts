import { Type } from "@sinclair/typebox";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const action: FastifyPluginAsyncTypebox = async (fastify) => {
	fastify.route({
		url: "",
		method: "GET",
		exposeHeadRoute: false,
		schema: {
			params: Type.Object({
				name: Type.String()
			}),
			response: {
				200: Type.String()
			}
		},
		handler: async (request, reply) => {

			const { name } = request.params;
			await reply.code(200).send(`Hello ${name}!`);
		}
	});
};

export default action;
