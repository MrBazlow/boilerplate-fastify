import { fastify } from "fastify";

import logger from "./core/logger.js";
import autoload from "./core/autoload.js";
import typeProvider from "./core/typeProvider.js";

const app = fastify({ logger });
await app.register(typeProvider);
await app.register(autoload);

console.log(app.printRoutes());

await app.listen({ port: app.config.PORT });
