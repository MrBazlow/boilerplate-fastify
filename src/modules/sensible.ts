import { fastifyPlugin } from "fastify-plugin";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const sensible: FastifyPluginAsyncTypebox = async (fastify, opts) => {
	const { fastifySensible } = await import("@fastify/sensible");
	await fastify.register(fastifySensible);
	fastify.log.info("@fastify/sensible has been registered");
};

export default fastifyPlugin(sensible, {
	name: "sensible",
});
