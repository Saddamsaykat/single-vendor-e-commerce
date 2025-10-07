import express, { Request, Response } from 'express';
import { corsMiddleware } from '../src/middleware/cors/cors';
import routes from './routes';
import { setupSwagger } from './docs/swagger';


const app = express();
app.use(corsMiddleware);
app.use(express.json());

setupSwagger(app);

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));
app.use('/api', routes);

export default app;
