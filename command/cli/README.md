# Panda Example CLI

Example CLI tool created in the [Creating a CLI Guide](https://adampuzio.github.io/panda-docs/docs/guides/cli).

## Installing

```bash
git clone git@github.com:AdamPuzio/panda-examples.git
cd command/cli
npm install
```

## Usage

To use it, simply run some of the following commands from your terminal:

```bash
# try out the primary/base command
node cli.js

# see the help menu
node cli.js --help

# run the test subcommand
node cli.js test

# run the build subcommand
node cli.js build

# run the deploy subcommand
node cli.js deploy

# run the deploy subcommand with parameters
node cli.js deploy staging --dry-run --test-level none

# see the help menu for the deploy subcommand
node cli.js deploy --help
```