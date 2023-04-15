/**
 * Represents a customer
 */
class Command {
  /**
   * Creates the update customer command
   * @param {String} body The request body
   * @param {String} body.id The customer id
   * @param {Number} body.name The customer name
   * @param {Number} body.phone The customer phone
   */
  constructor({ id, name, phone }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}

export { Command };
