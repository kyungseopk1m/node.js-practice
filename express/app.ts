import { Request, Response } from 'express';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('hola ks!');
});

app.listen(port, () => {
  console.log(`서버 실행. http://localhost:${port}`);
});