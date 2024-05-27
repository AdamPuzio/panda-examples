import { Command } from '@panda/command'

import { BuildCommand } from './build.js'
import { DeployCommand } from './deploy.js'
import { TestCommand } from './test.js'

export const MainCommand = new Command({
  name: 'panda-example-cli',
  description: 'Panda example CLI',
  version: '1.0.0',

  subcommands: [
    BuildCommand,
    DeployCommand,
    TestCommand
  ],

  async action (data, details) {
    this.out(this.rainbow('Hello, Panda!'))
  }
})