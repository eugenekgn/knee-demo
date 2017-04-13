
const chalk = require('chalk');

const screen = {
  clearScreen: () => {
    process.stdout.write('\033c');
  },
  write: (data, mode) => {

    let output = data;
    if (mode === 'json') {
      output = JSON.stringify(data, null, 4)
    }
    console.log(output);
  },
  error: (errorMessage) => {
    const messageFormatter = chalk.bold.red;
    console.log(messageFormatter(errorMessage));
  }
}

module.exports = screen;