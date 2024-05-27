import { Command } from '@panda/command'
import ora from 'ora'

export const BuildCommand = new Command({
  name: 'build',
  description: 'Build the project',

  async action (data, details) {
    this.heading('Building a new project')

    await this.buildAction(data, details)

    this.spacer()
    this.out('Project built successfully', { styles: ['green', 'bold'] })
    this.spacer()
  },

  async buildAction (data, details) {
    const spinner = ora()

    spinner.start('Compiling assets')
    await new Promise(resolve => setTimeout(resolve, 1000))
    spinner.succeed('Assets compiled')

    spinner.start('Optimizing images')
    await new Promise(resolve => setTimeout(resolve, 1000))
    spinner.succeed('Images optimized')

    spinner.start('Minifying JavaScript')
    await new Promise(resolve => setTimeout(resolve, 1000))
    spinner.succeed('JavaScript minified')

    spinner.start('Minifying CSS')
    await new Promise(resolve => setTimeout(resolve, 1000))
    spinner.succeed('Project built')
  }
})