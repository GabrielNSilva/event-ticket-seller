import express from 'express';
// import setupMiddleware from '@/main/config/middleware';
import setupRoutes from '@/Ship/Routes/Router';

const app = express();
// setupMiddleware(app);
setupRoutes(app);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
