const chalk = require('chalk');

const formatUrl = (url) => chalk.underline.yellow(url);

const nodeMessage = (nodes) => nodes.map(node => {
  return `
  Element: ${chalk.green(node.snippet)}

  ${node.failureSummary}
  `
})

const message = (error) => `
⚠️  ${chalk.bold.blueBright(error.help)}
${nodeMessage(error.nodes)}
  Read more: ${formatUrl(error.helpUrl)}
`;

const formatErrors = (url, errors) => {
  const output =  errors.map(message);
  return `
❌  ${chalk.red(errors.length + ' a11y errors for')} ${formatUrl(url)}
${output.join('\n')}
`
}

module.exports = formatErrors;