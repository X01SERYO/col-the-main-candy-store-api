/**
 * Represents a brand
 */
class Command {
  /**
   * Creates the update brand command
   * @param {String} body The request body
   * @param {String} body.id The brand id
   * @param {String} body.name The brand name
   * @param {String} body.code The brand code
   */
  constructor({ id, name, code }) {
    this.id = id;
    this.name = name;
    this.code = code;
  }
}

export { Command };
