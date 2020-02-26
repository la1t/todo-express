import express from 'express';
import logger from 'morgan';

const app = express();

import taskRouter from './routers/tasks';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/tasks', taskRouter);

export default app;
