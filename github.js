require("dotenv").config();
const axios = require("axios");

exports.getRepositories = async () => {
  const url = `https://api.github.com/user/repos`;
  return await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
};

exports.getPullRequests = async (repository) => {
  const url = `https://api.github.com/repos/${repository}/pulls?state=closed`;
  return await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
};
