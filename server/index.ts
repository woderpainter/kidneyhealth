import express, { Router } from 'express';
import paymentsRouter from './routes/payments';
import downloadsRouter from './routes/downloads';

const apiRouter = Router();

apiRouter.use(express.json());
apiRouter.use('/payments', paymentsRouter);
apiRouter.use('/downloads', downloadsRouter);

apiRouter.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'International Kidney Health Digital eBook Server',
  });
});

export default apiRouter;
