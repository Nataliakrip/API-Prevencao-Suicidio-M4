import express from 'express';
import swaggerSetup from './swagger.js';

const app = express();

swaggerSetup(app);

export default app;
