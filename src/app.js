import express, {json} from 'express';
import morgan from 'morgan';

import order_routes from './routes/order';
import driver_routes from './routes/driver';

const app = express();


app.use(morgan('dev'));
app.use(json());

app.use('/api/order', order_routes);
app.use('/api/driver', driver_routes);



export default app;