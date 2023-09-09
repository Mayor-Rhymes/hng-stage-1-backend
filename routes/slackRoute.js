const express = require("express");

const route = express.Router();

const { getDayOfWeek } = require("../lib/calendar");

route.get("/", (req, res) => {
  if (req.query.slack_name.length > 0 && req.query.track.length > 0) {
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
    res.json({
      message: "hello",
    });
  }
});

module.exports = route;
