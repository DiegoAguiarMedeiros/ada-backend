import mongoose from 'mongoose';
import logger from './logger';

const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_URL } = process.env;

const MONGO_DB_URL = MONGO_URL
  ? MONGO_URL
  : `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}`;

  console.log('MONGO_DB_URL',MONGO_DB_URL)

const initDB = async () => {
  mongoose.connect(MONGO_DB_URL);

  const { connection } = mongoose;

  connection.on('connected', () => {
    logger.info('Mongoose conectado.');
  });

  connection.on('error', (err) => {
    logger.error(`Mongoose com error ${err}`);
  });

  connection.on('disconnected', () => {
    logger.info('Mongoose desconectado');
  });
};

export default initDB;