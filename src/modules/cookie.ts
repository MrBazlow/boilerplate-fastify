import { fastifyPlugin } from "fastify-plugin";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const cookie: FastifyPluginAsyncTypebox = async (fastify, opts) => {
	const { fastifyCookie } = await import("@fastify/cookie");
	await fastify.register(fastifyCookie, {
		secret: fastify.config.COOKIE_SECRET
	});
	fastify.log.info("@fastify/cookie has been registered");
};

export default fastifyPlugin(cookie, {
	name: "cookie",
	dependencies: ["env"]
});
