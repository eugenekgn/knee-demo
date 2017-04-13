const screen = {
  clearScreen: () => {
    process.stdout.write('\033c')
  },
  write: (data, mode) => {

    let output = data;
    if (mode === 'json') {
      output = JSON.stringify(data, null, 4)
    }
    console.log(output);
  }
}

module.exports = screen;