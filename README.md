# calculatehoursworked

calculatehoursworked its an exercise written in javascript that reads a .text file with a defined structure that contains information about the hours worked of a person and then process the data and showing in the console

## Table of contents

- [Architecture](#Architecture)
- [Methodology](#Methodology)
- [Quick start](#quick-start)
- [Author](#Author)

## Architecture

this project uses a module architecture where each file in the core has your own functionality and these can be used for other modules, classes or functions.

```text
calculatehoursworked/
├── src
│   ├── config
│   ├── ├── config.js
│   ├── ├── EmployeesData.txt
│   ├── core
│   ├── ├── coreFile.js
│   ├── ├── coreSchedule.js
│   ├── test
│   ├── ├── coreFile.test.js
│   ├── ├── coreSchedule.test.js
└──  index.js
```

## Methodology

I'm using a [TDD](https://en.wikipedia.org/wiki/Test-driven_development) process which basically consisting in first create a test about a problem that we want to resolve and then create a solution for that test, for finally refactorizing the solution.

In this solution i create first the Schedule.test.js to write my tests about the processing of the data for then write the solution in the coreSchedule.js.
I use the same methodology for the coreFile.test.js and coreFile.js which contain the tests and solutions of the processing of the file txt. And finally uses the index.js to call this modules.

## Quick start

Before installing this project, you have to install Nodejs and npm. Then run the following code:

- Clone the repo: `git clone https://github.com/jonathanJet/calculatehoursworked.git`
- Enter the repo: `cd calculatehoursworked`
- Install dependencies (jest): `npm i`
- Run test: `npm run test`
- Run program: `npm run start`

## Author

- **Jonathan Torres C.** - email: jonathan.torresc@hotmail.com
