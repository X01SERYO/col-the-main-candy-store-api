import pkg from 'pino';
const { pino } = pkg;

const level = 'info';
const logger = pino({ level: level });

/**
 * Changes the logging level
 * @param {Object} logger The logger
 * @param {String} level The new level of logging
 */
const changeLevel = (logger, level) => {
  logger.level = level;
};

export { logger, changeLevel };
