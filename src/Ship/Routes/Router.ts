import { Express, Router } from 'express';
import { readdirSync } from 'fs';

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);

  readdirSync(`${__dirname}/../../Containers`).map(async (container) => {
    console.log(container);
    (await import(`@/Containers/${container}/UI/API/Routes/Routes`)).default(router);
  });
};
