import mongoose from 'mongoose';

const connection = async () => {
  const username = 'col-global';
  const password = 'rhrGZYMtK3kaYZFZ';
  const database = 'col-global';
  const uri = `mongodb+srv://${username}:${password}@develop.gmt0nwp.mongodb.net/${database}?retryWrites=true&w=majority`;
  const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };
  try {
    await mongoose.connect(uri, connectionParams);
  } catch (error) {
    throw error;
  }
};

export { connection };
