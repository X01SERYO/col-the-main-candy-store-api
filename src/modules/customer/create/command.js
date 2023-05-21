/**
 * Represents a customer command
 */
class Command {
  /**
   * Creates new create customer command
   * @param {Object} body The request body
   * @param {String} body.name The customer name
   * @param {String} body.phone The customer phone
   */
  constructor({ name, phone }) {
    this.name = name;
    this.phone = phone;
  }
}

export { Command };
