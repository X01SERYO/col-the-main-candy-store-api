/**
 * Represents a customer command
 */
class Command {
  /**
   * Creates the delete customer command
   * @param {Object} body The request body
   * @param {String} body.id The customer id to be deleted
   */
  constructor({ id }) {
    this.id = id;
    this.deleted = true;
  }
}

export { Command };
