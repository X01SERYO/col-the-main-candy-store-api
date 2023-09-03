import mongoose from 'mongoose';
import { config, logger } from './../../infra';

/**
 * Make connection with mongodb
 */
const connection = async () => {
  const username = encodeURIComponent(config.db.mongo.user);
  const password = encodeURIComponent(config.db.mongo.password);
  const database = config.db.mongo.database;
  const uri = `mongodb+srv://${username}:${password}@${database}.yyja1u8.mongodb.net/retryWrites=true&w=majority`;
  const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };
  try {
    await mongoose.connect(uri, connectionParams);
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export { connection };
