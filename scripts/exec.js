let child_process = require('child_process');

console.log(process.argv);
// function exec(command, option = []) {
//   const child = child_process.spawn(command, option);
//   console.log(`⚡ ${generExecCode(command, option)}`);
//   return new Promise((res, rej) => {
//     child.on('close', res);
//     child.on('error', rej);
//     child.stderr.on('data', rej);
//     child.stdout.pipe(process.stdout);
//     child.stderr.pipe(process.stderr);
//     process.stdin.pipe(child.stdin);
//   });
// }

// function generExecCode(command, option = []) {
//   return [command, ...option.map((o) => (/ /.test(o) ? `"${o}"` : o))].join(
//     ' '
//   );
// }
