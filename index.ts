console.log("Hello, Node.js!");
import * as commander from 'commander';

const program = new commander.Command();
program.version('1.0.0');



program.parse(process.argv);
program
  .command('say-hello')
  .description('Prints a friendly greeting')
  .action(() => {
    console.log('Hello, world!');
  });

program.parse(process.argv);
function showProgress() {
    const progressBarLength = 30;
    let progress = 0;
  
    const interval = setInterval(() => {
      const percentage = (progress / 100) * progressBarLength;
      const progressBar = '='.repeat(percentage) + ' '.repeat(progressBarLength - percentage);
      process.stdout.write(`[${progressBar}] ${progress}%\r`);
  
      progress += 10;
      if (progress > 100) {
        clearInterval(interval);
        console.log('\nProcess complete!');
      }
    }, 1000);
  }
  
  showProgress();