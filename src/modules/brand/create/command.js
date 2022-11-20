/**
 * Represents a brand
 */
class Command {
  /**
   * Creates new create brand command
   * @param {String} name The brand name
   * @param {String} code The brand code
   */
  constructor({ name, code }) {
    this.name = name;
    this.code = code;
  }
}

export { Command };
