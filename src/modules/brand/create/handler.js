import * as store from './store';

const handle = async cmd => {
  await store.createBrand(cmd);
};

export { handle };
