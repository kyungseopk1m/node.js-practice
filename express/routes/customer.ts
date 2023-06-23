import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

export const customerRouter = router
  .get('/', (req: Request, res: Response) => {
    res.send('고객 정보 조회');
  })
  .post('/insert', (req: Request, res: Response) => {
    res.send('신규 고객 추가');
  })
  .put('/update', (req: Request, res: Response) => {
    res.send('고객 정보 수정');
  })
  .delete('/delete', (req: Request, res: Response) => {
    res.send('고객 정보 삭제');
  });