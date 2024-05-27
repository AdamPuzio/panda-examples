import { Command } from '@panda/command'
import ora from 'ora'

export const TestCommand = new Command({
  name: 'test',
  description: 'Run tests',

  async action (data, details) {
    this.heading('Running tests')

    const spinner = ora()

    spinner.start('Running full test suite')
    for (let i = 0; i < 25; i++) {
      await new Promise(resolve => setTimeout(resolve, 100))
      spinner.text = `Running test ${i + 1}`
    }
    spinner.succeed('Tests passed')

    this.spacer()
  }
})