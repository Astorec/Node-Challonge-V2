const User = require("../models").User;
const BaseService = require("./base");
const { buildPath, PATHS } = require("../constants");
class UserService extends BaseService {
  constructor(client) {
    super(client);
  }

  async get() {
    try {
      const response = await this.client.request(
        buildPath(PATHS.USER.GET),
        "GET",
      );
      this.throwIfErrors(response);
      if (response && response.data) {
        return new User({
          id: response.data.id,
          type: response.data.type,
          attributes: response.data.attributes,
        });
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }

    return null;
  }
}

module.exports = UserService;
