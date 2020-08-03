const github = require("./github");
const prompts = require("prompts");

exports.selectRepository = async () => {
  const res = await github.getRepositories();
  if (!res.data) {
    console.log("No repositories found");
    return { repository: null };
  }

  const choices = res.data.map((data) => {
    return { title: data.full_name, value: data.full_name };
  });
  const response = await prompts([
    {
      type: "select",
      name: "repository",
      message: "Select repository",
      choices,
    },
  ]);

  // {repository: 'Owner/Some-Repo' }
  return response;
};
