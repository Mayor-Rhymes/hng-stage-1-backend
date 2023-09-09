const express = require("express");

const route = express.Router();

const { getDayOfWeek } = require("../lib/calendar");

route.get("/", (req, res) => {
  if (
    Object.keys(req.query).length > 0 &&
    "slack_name" in req.query &&
    "track" in req.query
  ) {
    res.status(200).json({
      slack_name: req.query.slack_name,
      current_day: getDayOfWeek(),
      utc_time: new Date().toISOString().slice(0, -5) + 'Z',
      track: req.query.track,
      github_file_url: "https://github.com/Mayor-Rhymes/hng-stage-1-backend/blob/main/server.js",
      github_repo_url: "https://github.com/Mayor-Rhymes/hng-stage-1-backend",
      status_code: 200,
    });
  } else {
    res.status(404).json({
      message:
        "Please make sure to enter expected queries like so: http://example.com/api?slack_name=example_name&track=backend",
    });
  }
});

module.exports = route;


