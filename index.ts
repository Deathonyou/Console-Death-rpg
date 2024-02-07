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
Skip to content
DEV Community
Search...

Log in
Create account

0
Jump to Comments
1
Save

Cover image for Developing Console Applications with Node.js in TypeScript
Jonas Pfalzgraf
Jonas Pfalzgraf
Posted on Sep 20, 2023

Developing Console Applications with Node.js in TypeScript
#
javascript
#
typescript
#
node
#
coding
In this comprehensive guide, we'll explore the world of console application development using Node.js and TypeScript. Console applications are powerful tools for automating tasks, interacting with users, and managing various processes from the command line. We'll cover various aspects of building robust and dynamic console applications, including automated command overview generation, flexible command and flag definitions, live console updates, error handling, and progress tracking. By the end of this article, you'll have the knowledge and tools to create versatile console applications with ease.

Table of Contents
Introduction
Setting Up Your Development Environment
Building the Foundation
Automated Command Overview Generation
Defining Commands and Flags
Real-time Console Updates
Effective Error Handling
Implementing a Progress Tracker and Bar
Conclusion
Introduction
Node.js has become a dominant force in modern application development, and its versatility extends to console applications. TypeScript adds a layer of static typing and enhanced tooling to Node.js, making it an excellent choice for developing robust, maintainable, and efficient command-line tools.

In this article, we'll embark on a journey to create feature-rich console applications with Node.js and TypeScript. We'll start by setting up our development environment and then gradually build upon it, incorporating essential features and best practices for console application development.

Setting Up Your Development Environment
Before diving into development, it's crucial to set up your development environment properly. You'll need Node.js, npm (Node Package Manager), and TypeScript installed. Here's a quick checklist:

Install Node.js and npm: Visit nodejs.org to download and install Node.js, which includes npm.

Install TypeScript: Open your terminal and run npm install -g typescript to install TypeScript globally.

Create a Project Directory: Create a directory for your project and navigate to it using the terminal.

Initialize a TypeScript Project: Run npm init -y to create a package.json file.

Create a TypeScript Configuration: Create a tsconfig.json file to configure TypeScript options. You can run tsc --init to generate a basic configuration.

With your environment set up, let's start building our console application.

Building the Foundation
We'll start by creating a basic structure for our console application. In your project directory, create an index.ts file. This will be the entry point of our application.
// index.ts
console.log("Hello, Node.js!");
To compile and run this TypeScript code, execute the following commands:
tsc index.ts    // Compile TypeScript to JavaScript
node index.js   // Run the JavaScript file
You should see "Hello, Node.js!" printed in your terminal. Now that we have our foundation in place, let's move on to the exciting part: adding functionality to our console application.

Automated Command Overview Generation
One of the key features of a well-designed console application is a comprehensive help command. Users should be able to get information about available commands and how to use them easily. To achieve this, we'll implement an automated command overview generation system.
// Add this to your index.ts
import * as commander from 'commander';

const program = new commander.Command();
program.version('1.0.0');

// Define your commands and flags here

program.parse(process.argv);
In the above code, we've imported the commander library, a popular choice for building command-line interfaces in Node.js. We've initialized a program object and set the version of our application.

To add commands and flags, you can use methods like command() and option(). Here's an example:
program
  .command('say-hello')
  .description('Prints a friendly greeting')
  .action(() => {
    console.log('Hello, world!');
  });

program.parse(process.argv);
With this setup, running node index.js say-hello will execute the "say-hello" command and display "Hello, world!" in the console.

Defining Commands and Flags
Console applications often require user input and configuration options through flags and arguments. Let's explore how to define custom commands and flags with flexibility.
program
  .command('greet <name>')
  .description('Greet a person')
  .option('-f, --formal', 'Use a formal greeting')
  .action((name, options) => {
    const greeting = options.formal ? 'Good day' : 'Hello';
    console.log(`${greeting}, ${name}!`);
  });
In this example, we've defined a "greet" command that takes a mandatory <name> argument and an optional -f or --formal flag to toggle between formal and informal greetings.

You can now run commands like:

node index.js greet John
node index.js greet Jane -f
Flexibility in command and flag definitions is essential for creating versatile console applications that cater to various use cases.

Real-time Console Updates
A console application can become more engaging by providing real-time updates during lengthy processes. We can achieve this by leveraging the stdout stream and overwriting the console output as needed.
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
In this example, we've created a function showProgress() that simulates a progress bar. It updates the console output every second, providing feedback to the user during a process.

Effective Error Handling
Robust error handling is crucial for a console application's reliability. TypeScript's static typing helps catch many errors at compile time, but we also need to handle runtime errors gracefully.
try {
  // Your code that might throw an error
  throw new Error('Something went wrong');
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1); // Exit the program with a non-zero status code
}
In this example, we use a try...catch block to catch and display errors. The process.exit(1) statement ensures the program exits with a non-zero status code, indicating an error.

Implementing a Progress Tracker and Bar
For long-running processes or tasks, it's beneficial to provide users with a visual representation of progress. Libraries like cli-progress can simplify the creation of progress bars.
import * as cliProgress from 'cli-progress';

const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const totalSteps = 100;
progressBar.start(totalSteps, 0);

for (let i = 0; i <= totalSteps; i++) {
  // Your task logic here
  progressBar.update(i);
}

progressBar.stop();
console.log

('Process complete!');
In this example, we use the cli-progress library to create a progress bar that updates in real-time. You can customize its appearance and behavior to match your application's needs.

Conclusion
Console applications built with Node.js and TypeScript offer a powerful and flexible way to automate tasks, interact with users, and manage processes from the command line. By following the steps and examples provided in this article, you now have a solid foundation for developing dynamic and feature-rich console applications.

Incorporate these techniques, experiment with additional libraries and functionalities, and soon you'll be creating console applications that enhance your productivity and delight your users. Happy coding!

(Disclaimer: Parts of this code were written with help and information from chat.openai.com AKA ChatGPT.)

Top comments (0)
Subscribe
pic
Add to the discussion
Code of Conduct • Report abuse
profile
Sentry
PROMOTED

Next.js

Next.js Performance Monitoring 🚫
Within minutes after installing Sentry, software teams are able to trace Next.js performance issues back to a poor performing API call as well as surface all related code errors. Engineering Managers and Developers now have a single tool to optimize the performance of their code and deliver fast customer experiences.

Try Sentry

Read next
devworld_conf profile image
🚀 Don't Miss Out: DevWorld Early Bird Prices Ending Soon!
DEVWorld Conference - Jan 2

bytesfarms profile image
Mobile Marketing: Optimizing Strategies for a Mobile-First World
BytesFarms - Jan 6

manthanank profile image
Setting Up a Simple Real-Time Application with Angular, Node.js, and Socket.IO
Manthan Ankolekar - Jan 15

endykaufman profile image
Collection of NestJS-mod utilities for unifying applications and modules on NestJS
ILshat Khamitov - Jan 24


Jonas Pfalzgraf
Follow
Web Developer 💻 Web Design 🖥️ Web Entwicklung 📲 Gamer 🎮 JosunLP © https://linktr.ee/JosunLP
LOCATION
Norderstedt, Germany
PRONOUNS
he/him
WORK
Software Developer
JOINED
May 17, 2021
More from Jonas Pfalzgraf
Vue.js3 Usage Survey
#webdev #javascript #vue
VSCode Live Share and Why We Need It
#webdev #coding #vscode #programming
Using the WebComponent API with TypeScript: Building Modular and Readable Systems
#webdev #programming #tutorial #typescript
DEV Community

Did you know?
You can use this area right here to promote your company's:

🧠 Products and tools
🎪 Events
🍎 Job listings
🎉 And more

Learn More

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