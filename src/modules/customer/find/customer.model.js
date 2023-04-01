/**
 * Represents a customer
 */
class Customer {
  /**
   * Creates a customer model
   * @param {Object} doc The documents retuned by db
   * @param {String} doc._id The customer id
   * @param {String} doc.name The customer name
   * @param {String} doc.phone The customer phone
   */
  constructor({ _id, name, phone }) {
    this.id = String(_id);
    this.name = name;
    this.phone = phone;
  }
}

export { Customer };
