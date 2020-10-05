# Serverless Take Home
A take home test for prospective candidates for Players' Lounge.

## Brief
Hey there! This piece of work is intended to check your technical proficiency. In this task, we at Players' Lounge are looking to understand the means in which you conduct your work. We do not expect you to be able to finish everything.

Please treat this like you would any other task that your current/former employer would give you. However, we ask that you complete the tasks in order.

Please don't spend more than a couple of hours on this. That should be more than ample time to demonstrate your process to us in your output.

## Overview of what's here
Your job is to build out a GraphQL API for a Rick and Morty application that will power any generic frontend system. We've based our API on the existing [Rick and Morty API](https://rickandmortyapi.com/) but have changed some of the implementation details.

During the course of this task, we will be using our knowledge of Node.JS, Serverless, and GraphQL to expand the API to give the frontend more data to work with. We will also be doing some work to ensure stability in the future.

## Let's get started

### Task 1 - Flesh out the Character API
Currently, we only have a single "get all" query for characters that can only return a character's ID and name. Ideally, this API can provide a bit more details and control.

#### Acceptance Criteria
- [x] Add a `character` query that takes in an ID and returns the specified character
- [x] Add pagination to the existing `characters` query
  - Default page size should be 10
- [x] Extend the character type to include all the other base fields a character has

### Task 2 - Location API
Right now, we only know about characters, but the Rick & Morty universe has its own complex multiverse. A character can originate from one universe and exist in another. Let's create APIs to learn about these different locations.

#### Acceptance Criteria
- [x] Add `location` type to the graphql API
- [x] Add a paginated `locations` query
  - Default page size should be 10
- [x] Add a single `location` fetch query
- [ ] Add location and origin resolvers to character that return the Location specified

### Task 3 - Episodes API
The series is long running and has plenty of episodes. Episodes have many characters and characters belong to many episodes. We've modeled this through the `Appearances` table.

#### Acceptance Criteria
- [ ] Add `episode` type to the graphql API
- [ ] Add a paginated `episodes` query
  - Default page size should be 10
- [ ] Add an `episodes` resolver to `character` that lists all the episodes a character was in
- [ ] Add a `characters` resolver to `episode` that lists all the characters in that episode

### Task 4 - Multiverse Relocation
Rick and Morty jump universes quite a bit. Who knows where they'll be at the end of the next episode? We need a way to move characters into new locations quickly. However, characters can only change locations with a portal gun, which only Rick, Morty, or Summer ever have access to.

#### Acceptance Criteria
- [ ] Add a new mutation called `changeDimension` that takes a list of characters and a new destination
  - One of the characters **must** be Rick (id: 1), Morty (id: 2), or Summer (id: 3) - Note: there are more Ricks than just Rick C-137 but he's the Rickest Rick so we're only letting him jump from now on because the counsel sucks and banned interdimensional travel and he doesn't listen to them
  - All the characters jumping **must** be in the same location prior to the change

---

# The Tech
We run a fully serverless node stack with a graphql API in front of things. All the steps you need to get started are below.

## Requirements
* Node 12.18.2
* [yarn](https://yarnpkg.com/) 2.x+
* [Serverless CLI](https://www.serverless.com/framework/docs/getting-started/)

## Setup

1. Clone the repo
2. Install dependencies
3. Create your dotenv files
4. `yarn test` to ensure things work

### Clone dotenv files
```
cp .env.development.example .env.development
cp .env.test.example .env.test
```

### Database
We have checked in a SQLite database for your convenience. If you don't have SQLite installed locally, please follow the guidelines for your system to install it.

## Useful Commands
`yarn console`
Launches an interactive repl for testing your code.

`yarn db:seed`
Rebuilds the SQLite database using the source API.

`yarn lint`
Project configured `eslint` command. Accepts all CLI options from eslint. Must specify file to act upon.

`yarn lint:ci`
Runs linting against entire project in error-only mode.

`yarn lint:errors`
Runs linting in error-only mode. Must specify file to act upon.

`yarn test`
Runs jest test suite. All jest CLI options are available.

`yarn test:ci`
Runs full jest test suite in CI mode. All tests are run sequentially.

`yarn test:debug`
Run tests in debuggable mode for your editor.
