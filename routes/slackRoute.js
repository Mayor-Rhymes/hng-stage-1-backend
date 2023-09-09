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
      utc_time: new Date(),
      track: req.query.track,
      github_file_url: "hello",
      github_repo_url: "hello",
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

// req.query.hasOwnProperty(slack_name) && req.query.hasOwnProperty(track)
