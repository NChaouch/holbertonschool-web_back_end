process.stdout.write('Welcome to Holberton School, what is your name?\n');

// datas by user
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // delete spaces around name
  console.log(`Your name is: ${name}`); // display name of user

  console.log('This important software is now closing');

  // end of the processus
  process.stdin.end();
});
