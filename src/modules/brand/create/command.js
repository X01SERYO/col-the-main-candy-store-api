/**
 * Represents a brand
 */
class Command {
  /**
   * Creates new create brand command
   * @param {String} body The request body
   * @param {String} body.name The brand name
   * @param {String} body.code The brand code
   */
  constructor({ name, code }) {
    this.name = name;
    this.code = code;
  }
}

export { Command };
