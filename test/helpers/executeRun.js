const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

function executeRun(url, flags = {}, config = null) {
  const chromeFlags = { chromeFlags: ['--headless'] };
  return chromeLauncher.launch(chromeFlags).then((chrome) => {
    flags.port = chrome.port;
    return lighthouse(url, flags, config)
      .then(results => chrome.kill().then(() => results))
      .then(results => {
        const errorMessage = results.lhr.runtimeError.message;
        if (errorMessage) throw new Error( `Error accessing ${url}\n${errorMessage}`);
        return results;
      });
  });
}

module.exports = executeRun;