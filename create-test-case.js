const menu = require("./menu");
const github = require("./github");
const dayjs = require("dayjs");
const csv = require("csv");
const fs = require("fs");

const filterTestCase = (body) => {
  let testCases = [];
  const lines = body.split(/\r\n|\r|\n/);
  for (const line of lines) {
    const matches = line.match(/^\-\s\[\s\](.*)$/);
    if (matches) {
      const testCase = matches[1];
      if (testCase.length > 0) {
        //console.log(testCase);
        testCases.push(testCase);
      }
    }
  }
  return testCases;
};

(async () => {
  // select repository
  const { repository } = await menu.selectRepository();
  if (!repository) return;

  // get pull requests
  const res = await github.getPullRequests(repository);
  const pullRequests = res.data.sort((a, b) => {
    return dayjs(a.merged_at).isBefore(b.merged_at);
  });

  // out put csv
  let csvData = [];
  csvData.push(["内容", "github URL", "テストケース", "マージ日時"]);
  for (const pullRequest of pullRequests) {
    //console.log(`${pullRequest.title} (${pullRequest.html_url}) `);
    const body = pullRequest.body;
    const testCases = filterTestCase(body);
    const date = dayjs(pullRequest.merged_at);
    testCases.forEach((testCase) => {
      csvData.push([
        pullRequest.title,
        pullRequest.html_url,
        testCase,
        date.format("YYYY/MM/DD hh:mm"),
      ]);
    });
  }
  csv.stringify(csvData, (error, output) => {
    fs.writeFile("test-case.csv", output, (error) => {
      console.log(`${csvData.length - 1}項目をCSV出力しました。`);
    });
  });
})();
