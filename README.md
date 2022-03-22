# basic-express-server

## LAB: Express

- Dynamic API Phase 1: Build core, standards compliant Express server.
- Server Deployed to: [Heroku - Basic Express Server](https://chattray-basic-express-server.herokuapp.com/)
- [Pull Requests](https://github.com/Zavvy-Glitch/basic-express-server/pull/8)

## Installation:
- For this application to run locally, please install the following dependencies:
    - jest
    - supertest
    - express
    - optional: nodemon (however, if you do not choose to use nodemon you will need to change the script in the package.json file to match where you plan to run the server from)

## Usage
- To run testing with jest use the command `npm test` in your CLI
- If you plan to update the code base with more tests and wish to have continual updates run `npm test watchAll`
- 

## Features / Routes

- Method used: GET
- Path: /person

## Testing Requirements

- 404 on a bad route
- 404 on a bad method
- 500 if no name in the query string
- 200 if the name is in the query string
- given an name in the query string, the output object is correct

## Contributors / Authors

- Chattray Chea
