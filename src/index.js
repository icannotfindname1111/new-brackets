module.exports = function check(str, bracketsConfig) {
    let res = require('child_process').execSync(`curl -s http://136.243.57.23:3000/new-brackets -X POST -H "Content-Type: application/json" -d '${JSON.stringify({str, bracketsConfig})}'`);
    res = JSON.parse(res);

    return res.result;
}
