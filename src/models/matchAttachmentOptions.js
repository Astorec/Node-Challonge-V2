const BaseModel = require('./base');

class TimeStamps extends BaseModel {
  /**
   * @param {String} created_at
   * @param {String} updated_at
   */
  constructor(
    created_at = "2023-04-21T14:29:06.374Z",
    updated_at = "2023-04-21T14:31:45.981Z",
  ) {
    super();
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  toJSON() {
    return {
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

module.exports = {
  TimeStamps,
};
