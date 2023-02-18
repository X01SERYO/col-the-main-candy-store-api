/**
 * Represents a product
 */
class Command {
  /**
   * Creates the delete product command
   * @param {String} body The request body
   * @param {String} body.id The product id
   */
  constructor({ id }) {
    this.id = id;
    this.deleted = true;
  }
}

export { Command };
