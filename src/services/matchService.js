const Match = require("../models/match");
const BaseService = require("./base");
const { buildPath, buildQueryParams, PATHS } = require ("../constants");
class MatchService extends BaseService {
  constructor(client) {
     super(client);
  }

  async list(tournamentId, options = {}) {
    try {
      if (!tournamentId) {
        throw new Error("tournamentId is required");
      }

      const query = options ? `?${new URLSearchParams(options)}` : "";
      const response = await this.client.request(
        buildPath(PATHS.MATCHES.GET, tournamentId) + query,
        "GET",
      );
      this.throwIfErrors(response);
      return Match.fromListResponse(response);
    } catch (error) {
      console.error("Error listing matches:", error.message);
      throw error;
    }
  }

  async get(tournamentId, matchId) {
    try {
      if (!tournamentId || !matchId) {
        throw new Error("tournamentId and matchId are required");
      }

      const response = await this.client.request(
        buildPath(PATHS.MATCHES.GET_BY_ID, tournamentId, matchId),
        "GET",
      );
      this.throwIfErrors(response);
      return Match.fromSingleResponse(response);
    } catch (error) {
      console.error("Error getting match:", error.message);
      throw error;
    }
  }

  async changeMatchState(tournamentId, matchId, state) {
    try {
      if (!tournamentId || !matchId || !state) {
        throw new Error("tournamentId, matchId, and state are required");
      }

      const response = await this.client.request(
        buildPath(PATHS.MATCHES.CHANGE_STATE, tournamentId, matchId),
        "POST",
        { state },
      );
      this.throwIfErrors(response);
      return Match.fromSingleResponse(response);
    } catch (error) {
      console.error("Error changing match state:", error.message);
      throw error;
    }
  }
}

module.exports = MatchService;
