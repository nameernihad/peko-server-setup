import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/userRoutes.js';
import { connection, User } from './sequelize.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoute);

// Start the server after establishing database connection
connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
