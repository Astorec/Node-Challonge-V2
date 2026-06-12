class BaseModel {
  static from(value) {
    return value instanceof this ? value : new this(value);
  }

  static fromListResponse(response) {
    return (response.data || []).map((item) => this.fromResource(item));
  }

  static fromSingleResponse(response) {
    return this.fromResource(response.data);
  }

  static fromResource(data) {
    throw new Error(`${this.name}.fromResource() not implemented`);
  }
}

module.exports = BaseModel;