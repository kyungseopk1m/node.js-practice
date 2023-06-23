import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

export const productRouter = router
  .get('/', (req: Request, res: Response) => {
    res.send('상품 정보 조회');
  })
  .post('/insert', (req: Request, res: Response) => {
    res.send('신규 상품 추가');
  })
  .put('/update', (req: Request, res: Response) => {
    res.send('상품 정보 수정');
  })
  .delete('/delete', (req: Request, res: Response) => {
    res.send('상품 정보 삭제');
  });