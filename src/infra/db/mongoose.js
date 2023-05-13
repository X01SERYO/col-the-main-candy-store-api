import mongoose from 'mongoose';
import { config, logger } from './../../infra';

/**
 * Make connection with mongodb
 */
const connection = async () => {
  const username = config.db.mongo.user;
  const password = config.db.mongo.password;
  const database = config.db.mongo.database;
  const uri = `mongodb+srv://${username}:${password}@develop.yyja1u8.mongodb.net/${database}?retryWrites=true&w=majority`;
  const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };
  try {
    await mongoose.connect(uri, connectionParams);
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export { connection };
