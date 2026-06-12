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

class RelationshipData extends BaseModel {
  constructor({ id, type } = {}) {
    super();
    this.id = id;
    this.type = type;
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
    };
  }
}

class PlayerRelationship extends BaseModel {
  constructor({ data } = {}) {
    super();
    this.data = RelationshipData.from(data);
  }

  toJSON() {
    return {
      data: this.data.toJSON(),
    };
  }
}

class MatchRelationships extends BaseModel {
  constructor({ player1, player2 } = {}) {
    super();
    this.player1 = PlayerRelationship.from(player1);
    this.player2 = PlayerRelationship.from(player2);
  }

  toJSON() {
    return {
      player1: this.player1.toJSON(),
      player2: this.player2.toJSON(),
    };
  }
}

module.exports = {
  TimeStamps,
  MatchRelationships,
  PlayerRelationship,
  RelationshipData,
};
