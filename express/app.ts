import express from 'express';
// const customerRoute = require('./routes/customer');
// const productRoute = require('./routes/product');
import { customerRouter } from './routes/customer';
import { productRouter } from './routes/product';

const app = express();
const port = 3000;

app.use(express.json({
  limit: '50mb',
}));

app.use('/customer', customerRouter);
app.use('/product', productRouter);

app.listen(port, () => {
  console.log(`Server started. port:${port}`);
});