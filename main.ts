import '@bogeychan/elysia-polyfills/node/index.js';

import { Elysia } from 'elysia';
import { logger } from "@bogeychan/elysia-logger";

const app = new Elysia().use(logger({ level: "warn" })).get('/', () => ({ hello: 'Node.js👋' })).listen(8080);

console.log(`Listening on http://localhost:${app.server!.port}`);

