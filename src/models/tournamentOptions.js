const BaseModel = require("./base");

class TournamentNotifications extends BaseModel {
  constructor({
    upon_matches_open = false,
    upon_tournament_ends = false,
  } = {}) {
    super();
    this.upon_matches_open = upon_matches_open;
    this.upon_tournament_ends = upon_tournament_ends;
  }

  toJSON() {
    return {
      upon_matches_open: this.upon_matches_open,
      upon_tournament_ends: this.upon_tournament_ends,
    };
  }
}

/**
 * @param {Number} consolation_matches_target_rank - Single or Double Elim only. Helps break up ties in final placement
 * @param {Boolean} accept_attachments - Whether to allow attachments uploads
 */
class TournamentMatchOptions extends BaseModel {
  constructor({
    consolation_matches_target_rank = 0,
    accept_attachments = false,
  } = {}) {
    super();
    this.consolation_matches_target_rank = consolation_matches_target_rank;
    this.accept_attachments = accept_attachments;
  }
  toJSON() {
    return {
      consolation_matches_target_rank: this.consolation_matches_target_rank,
      accept_attachments: this.accept_attachments,
    };
  }
}

/**
 * @param {Boolean} open_signup - Whether to allow open signups
 * @param {Number} signup_cap - Max number of participants allowed to sign up
 * @param {Number} check_in_duration - Duration of check-in period in minutes. 0 is the default and mean no-check in period.
 */
class TournamentRegistrationOptions extends BaseModel {
  constructor({
    open_signup = false,
    signup_cap = 0,
    check_in_duration = 0,
  } = {}) {
    super();
    this.open_signup = open_signup;
    this.signup_cap = signup_cap;
    this.check_in_duration = check_in_duration;
  }

  toJSON() {
    return {
      open_signup: this.open_signup,
      signup_cap: this.signup_cap,
      check_in_duration: this.check_in_duration,
    };
  }
}

/**`
 * @param {Boolean} hide_seeds - Whether to hide seed information
 * @param {Boolean} sequential_pairings - Whether to use sequential pairings
 */
class TournamentSeedingOptions extends BaseModel {
  constructor({ hide_seeds = false, sequential_pairings = false } = {}) {
    super();
    this.hide_seeds = hide_seeds;
    this.sequential_pairings = sequential_pairings;
  }

  toJSON() {
    return {
      hide_seeds: this.hide_seeds,
      sequential_pairings: this.sequential_pairings,
    };
  }
}

/**
 * @param {Boolean} auto_assign - Whether to automatically assign stations to matches
 * @param {Boolean} only_start_matches_with_assigned_stations - Whether to only start matches that have stations assigned
 */
class TournamentStationOptions extends BaseModel {
  constructor({
    auto_assign = false,
    only_start_matches_with_assigned_stations = false,
  } = {}) {
    super();
    this.auto_assign = auto_assign;
    this.only_start_matches_with_assigned_stations =
      only_start_matches_with_assigned_stations;
  }

  toJSON() {
    return {
      auto_assign: this.auto_assign,
      only_start_matches_with_assigned_stations:
        this.only_start_matches_with_assigned_stations,
    };
  }
}

/**
 * @param {String} stage_type - The type of the group stage (e.g., 'round robin')
 * @param {Number} group_size - The number of participants in each group
 * @param {Number} participant_count_to_advance_per_group - The number of participants from each group that advance to the next stage
 */
class TournamentGroupStageOptions extends BaseModel {
  constructor({
    stage_type = "round robin",
    group_size = 4,
    participant_count_to_advance_per_group = 2,
    rr_iterations = 1,
    ranked_by = "match wins",
    rr_pts_for_match_win = 1,
    rr_pts_for_match_tie = 0.5,
    rr_pts_for_game_win = 0,
    rr_pts_for_game_tie = 0,
    split_participants = false,
    tie_breaks = [],
  } = {}) {
    super();
    this.stage_type = stage_type;
    this.group_size = group_size;
    this.participant_count_to_advance_per_group =
      participant_count_to_advance_per_group;
    this.rr_iterations = rr_iterations;
    this.ranked_by = ranked_by;
    this.rr_pts_for_match_win = rr_pts_for_match_win;
    this.rr_pts_for_match_tie = rr_pts_for_match_tie;
    this.rr_pts_for_game_win = rr_pts_for_game_win;
    this.rr_pts_for_game_tie = rr_pts_for_game_tie;
    this.split_participants = split_participants;
    this.tie_breaks = tie_breaks;
  }

  toJSON() {
    return {
      stage_type: this.stage_type,
      group_size: this.group_size,
      participant_count_to_advance_per_group:
        this.participant_count_to_advance_per_group,
      rr_iterations: this.rr_iterations,
      ranked_by: this.ranked_by,
      rr_pts_for_match_win: this.rr_pts_for_match_win,
      rr_pts_for_match_tie: this.rr_pts_for_match_tie,
      rr_pts_for_game_win: this.rr_pts_for_game_win,
      rr_pts_for_game_tie: this.rr_pts_for_game_tie,
      split_participants: this.split_participants,
      tie_breaks: this.tie_breaks,
    };
  }
}

class DoubleEliminationOptions extends BaseModel {
  constructor({ split_participants = false, grand_final = false } = {}) {
    super();
    this.split_participants = split_participants;
    this.grand_final = grand_final;
  }

  toJSON() {
    return {
      split_participants: this.split_participants,
      grand_final: this.grand_final,
    };
  }
}

class RoundRobinOptions extends BaseModel {
  constructor({
    iterations = 1,
    ranking = "",
    pts_for_match_win = 1,
    pts_for_match_tie = 0.5,
    pts_for_game_win = 0,
    pts_for_game_tie = 0,
  } = {}) {
    super();
    this.iterations = iterations;
    this.ranking = ranking;
    this.pts_for_match_win = pts_for_match_win;
    this.pts_for_match_tie = pts_for_match_tie;
    this.pts_for_game_win = pts_for_game_win;
    this.pts_for_game_tie = pts_for_game_tie;
  }

  toJSON() {
    return {
      iterations: this.iterations,
      ranking: this.ranking,
      pts_for_match_win: this.pts_for_match_win,
      pts_for_match_tie: this.pts_for_match_tie,
      pts_for_game_win: this.pts_for_game_win,
      pts_for_game_tie: this.pts_for_game_tie,
    };
  }
}

class SwissOptions extends BaseModel {
  constructor({
    rounds = 0,
    ranking = "",
    pts_for_match_win = 1,
    pts_for_match_tie = 0.5,
    pts_for_game_win = 0,
    pts_for_game_tie = 0,
    pts_for_bye = 1,
  } = {}) {
    super();
    this.rounds = rounds;
    this.ranking = ranking;
    this.pts_for_match_win = pts_for_match_win;
    this.pts_for_match_tie = pts_for_match_tie;
    this.pts_for_game_win = pts_for_game_win;
    this.pts_for_game_tie = pts_for_game_tie;
    this.pts_for_bye = pts_for_bye;
  }

  toJSON() {
    return {
      rounds: this.rounds,
      ranking: this.ranking,
      pts_for_match_win: this.pts_for_match_win,
      pts_for_match_tie: this.pts_for_match_tie,
      pts_for_game_win: this.pts_for_game_win,
      pts_for_game_tie: this.pts_for_game_tie,
      pts_for_bye: this.pts_for_bye,
    };
  }
}

class FreeForAllOptions extends BaseModel {
  constructor({ ranking = "" } = {}) {
    super();
    this.ranking = ranking;
  }
  
  toJSON() {
    return {
      ranking: this.ranking,
    };
  }
}

class TournamentOptions extends BaseModel {
  static normalizeOptions(options, Model) {
    if (options == null) return null;
    return Model.from(options).toJSON();
  }
}

module.exports = {
  TournamentNotifications,
  TournamentMatchOptions,
  TournamentRegistrationOptions,
  TournamentSeedingOptions,
  TournamentStationOptions,
  TournamentGroupStageOptions,
  TournamentOptions,
  DoubleEliminationOptions,
  RoundRobinOptions,
  SwissOptions,
  FreeForAllOptions,
};
