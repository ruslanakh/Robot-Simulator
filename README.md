## Quick Start

Install Node.js and then:

### Setup
```sh
$ git clone https://github.com/ruslanakh/Robot-Simulator
$ cd Robot-Simulator
$ npm install
```

### Run
Running the commend below will process the commends in data.txt and return the result for each report.

```sh
$ npm start
```

### Testing
The test plan is designed to test the boundaries of the table, it will throw an error if the robot moves passed the table boundaries.

```sh
$ npm test
```