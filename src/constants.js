const BASE_URL = "https://api.challonge.com/v2";
const OAUTH_BASE_URL = "https://api.challonge.com";
const PATHS = {
  TOURNAMENTS: {
    GET: "/tournaments",
    CREATE: "/tournaments",
    GET_BY_ID: "/tournaments/:id",
    UPDATE: "/tournaments/:id",
    DELETE: "/tournaments/:id",
    CHANGE_STATE: "/tournaments/:id/change_state",
  },
  MATCHES: {
    GET: "/tournaments/:tourneyId/matches",
    CREATE: "/tournaments/:tourneyId/matches",
    GET_BY_ID: "/tournaments/:tourneyId/matches/:matchId",
    UPDATE: "/tournaments/:tourneyId/matches/:matchId",
    CHANGE_STATE: "/tournaments/:tourneyId/matches/:matchId/change_state",
    ATTACHMENTS: {
      GET: "/tournaments/:tourneyId/matches/:matchId/attachments",
      CREATE: "/tournaments/:tourneyId/matches/:matchId/attachments",
      GET_BY_ID:
        "/tournaments/:tourneyId/matches/:matchId/attachments/:attachmentId",
      DELETE:
        "/tournaments/:tourneyId/matches/:matchId/attachments/:attachmentId",
    },
    STATIONS: {
      GET: "/tournaments/:tourneyId/matches/:matchId/stations",
      CREATE: "/tournaments/:tourneyId/matches/:matchId/stations",
      GET_BY_ID: "/tournaments/:tourneyId/matches/:matchId/stations/:stationId",
      DELETE: "/tournaments/:tourneyId/matches/:matchId/stations/:stationId",
    },
    STATION_QUEUER: {
      GET: "/tournaments/:tourneyId/matches/:matchId/station_queuer",
      CREATE: "/tournaments/:tourneyId/matches/:matchId/station_queuer",
    },
  },
  PARTICIPANTS: {
    GET: "/tournaments/:tourneyId/participants",
    CREATE: "/tournaments/:tourneyId/participants",
    GET_BY_ID: "/tournaments/:tourneyId/participants/:participantId",
    UPDATE: "/tournaments/:tourneyId/participants/:participantId",
    DELETE: "/tournaments/:tourneyId/participants/:participantId",
    BULK_CREATE: "/tournaments/:tourneyId/participants/bulk_create",
    CLEAR: "/tournaments/:tourneyId/participants/clear",
    RANDOMIZE: "/tournaments/:tourneyId/participants/randomize",
    REGISTER: "/tournaments/:tourneyId/participants/register",
    UNREGISTER: "/tournaments/:tourneyId/participants/unregister",
  },
  USER: {
    GET: "/me",
  },
};

function buildPath(template, ...args) {
  let result = template;
  args.forEach((arg) => {
    result = result.replace(/:\w+/, arg);

    console.log(`Replacing placeholder in template: ${template} with argument: ${arg}. Resulting path: ${result}`);
  });
  return result;
}

function buildQueryParams(params) {
  const query = new URLSearchParams(params);
  return query.toString() ? `?${query.toString()}` : "";
}

module.exports = {
  BASE_URL,
  OAUTH_BASE_URL,
  PATHS,
  buildPath,
  buildQueryString: buildQueryParams,
};