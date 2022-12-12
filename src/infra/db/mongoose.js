import mongoose from 'mongoose';

/**
 * Make connection with mongodb
 */
const connection = async () => {
  const username = 'mcs';
  const password = 'MSLKRA2Rf0fRDgvi';
  const database = 'develop';
  const uri = `mongodb+srv://${username}:${password}@develop.yyja1u8.mongodb.net/${database}?retryWrites=true&w=majority`;
  const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };
  try {
    await mongoose.connect(uri, connectionParams);
  } catch (error) {
    throw error;
  }
};

export { connection };
