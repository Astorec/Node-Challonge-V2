const MatchAttachment = require("../models/matchAttachment");
const BaseService = require("./base");
const {buildPath, buildQueryParams, PATHS} = require ("../constants");

class MatchAttachmentService extends BaseService {
  constructor(client) {
    super(client);
  }

  async list(tournamentId, matchId) {
    try {
      if (!tournamentId || !matchId) {
        throw new Error("tournamentId and matchId are required");
      }

      const response = await this.client.request(
        buildPath(PATHS.MATCHES.ATTACHMENTS.GET, tournamentId, matchId),
        "GET",
      );
      this.throwIfErrors(response);
      return MatchAttachment.fromListResponse(response);
    } catch (error) {
      console.error("Error listing match attachments:", error.message);
      throw error;
    }
  }

  async create(tournamentId, matchId, data) {
    try {
      if (!tournamentId || !matchId || !data) {
        throw new Error("tournamentId, matchId, and data are required");
      }

      const response = await this.client.request(
        buildPath(PATHS.MATCHES.ATTACHMENTS.CREATE, tournamentId, matchId),
        "POST",
        {
          data: {
            type: "match_attachment",
            attributes: data,
          },
        },
      );
      this.throwIfErrors(response);
      return MatchAttachment.fromSingleResponse(response);
    } catch (error) {
      console.error("Error creating match attachment:", error.message);
      throw error;
    }
  }

  async delete(tournamentId, matchId, attachmentId) {
    try {
      if (!tournamentId || !matchId || !attachmentId) {
        throw new Error("tournamentId, matchId, and attachmentId are required");
      }

      await this.client.request(
        buildPath(PATHS.MATCHES.ATTACHMENTS.DELETE, tournamentId, matchId, attachmentId),
        "DELETE",
      );
    } catch (error) {
      console.error("Error deleting match attachment:", error.message);
      throw error;
    }
  }
}

module.exports = MatchAttachmentService;