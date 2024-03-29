import * as store from './store';

/**
 * Handles an update brand command
 * @param {Command} cmd The command
 */
const handle = async cmd => {
  await store.updateBrand(cmd);
};

export { handle };
