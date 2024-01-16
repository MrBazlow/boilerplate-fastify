import { fastifyPlugin } from "fastify-plugin";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const swagger: FastifyPluginAsyncTypebox = async (fastify, opts) => {
	if (fastify.config.NODE_ENV !== "development") {
		return;
	}

	const { fastifySwagger } = await import("@fastify/swagger");
	const { fastifySwaggerUi } = await import("@fastify/swagger-ui");

	await fastify.register(fastifySwagger, {
		openapi: {
			servers: [
				{
					url: "http://localhost:3000",
					description: "Development server",
				},
			]
		}
	});
	await fastify.register(fastifySwaggerUi);
	fastify.log.info("@fastify/swagger and @fastify/swagger-ui have been registered");
	
	fastify.addHook("onReady", () => {
		fastify.swagger();
		fastify.log.info(`Swagger UI is available on http://localhost:${fastify.config.PORT}/documentation`);
	});
};

export default fastifyPlugin(swagger, {
	name: "swagger",
});
