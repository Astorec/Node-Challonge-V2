const StationQueuer = require("../models/stationQueuer");
const BaseService = require("./base");
const { buildPath, buildQueryParams, PATHS } = require ("../constants");
class StationQueuerService extends BaseService {
  constructor(client) {
     super(client);
  }

  async list(tournamentId, matchId) {
    try {
      if (!tournamentId || !matchId) {
        throw new Error("tournamentId and matchId are required");
      }

      const response = await this.client.request(
        buildPath(PATHS.STATION_QUEUERS.LIST, tournamentId, matchId),
        "GET",
      );
      this.throwIfErrors(response);
      return StationQueuer.fromListResponse(response);
    } catch (error) {
      console.error("Error listing station queuers:", error.message);
      throw error;
    }
  }

  async get(tournamentId, matchId) {
    try {
      if (!tournamentId || !matchId) {
        throw new Error("tournamentId and matchId are required");
      }

      const response = await this.client.request(
        buildPath(PATHS.STATION_QUEUERS.GET, tournamentId, matchId),
        "GET",
      );
      this.throwIfErrors(response);
      return StationQueuer.fromSingleResponse(response);
    } catch (error) {
      console.error("Error getting station queuer:", error.message);
      throw error;
    }
  }

  async create(tournamentId, matchId, data) {
    try {
      if (!tournamentId || !matchId || !data) {
        throw new Error("tournamentId, matchId, and data are required");
      }

      const response = await this.client.request(
        buildPath(PATHS.STATION_QUEUERS.CREATE, tournamentId, matchId),
        "POST",
        {
          data: {
            type: "station_queuer",
            attributes: data,
          },
        },
      );
      this.throwIfErrors(response);
      return StationQueuer.fromSingleResponse(response);
    } catch (error) {
      console.error("Error creating station queuer:", error.message);
      throw error;
    }
  }

  async update(tournamentId, matchId, data) {
    try {
      if (!tournamentId || !matchId || !data) {
        throw new Error("tournamentId, matchId, and data are required");
      }

      const response = await this.client.request(
        buildPath(PATHS.STATION_QUEUERS.UPDATE, tournamentId, matchId),
        "PUT",
        {
          data: {
            type: "station_queuer",
            attributes: data,
          },
        },
      );
      this.throwIfErrors(response);
      return StationQueuer.fromSingleResponse(response);
    } catch (error) {
      console.error("Error updating station queuer:", error.message);
      throw error;
    }
  }

  async delete(tournamentId, matchId) {
    try {
      if (!tournamentId || !matchId) {
        throw new Error("tournamentId and matchId are required");
      }

      await this.client.request(
        buildPath(PATHS.STATION_QUEUERS.DELETE, tournamentId, matchId),
        "DELETE",
      );
      this.throwIfErrors(response);
    } catch (error) {
      console.error("Error deleting station queuer:", error.message);
      throw error;
    }
  }
}

module.exports = StationQueuerService;
