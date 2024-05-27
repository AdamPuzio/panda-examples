import { Command } from '@panda/command'
import ora from 'ora'

import { BuildCommand } from './build.js'

export const DeployCommand = new Command({
  name: 'deploy',
  description: 'Deploy the project',

  arguments: {
    name: 'environment',
    description: 'The environment to deploy to',
    validate: value => ['production', 'staging', 'development'].includes(value)
  },

  options: [
    {
      name: 'test-level',
      alias: 't',
      description: 'The test level to run',
      default: 'full',
      validate: value => ['full', 'partial', 'none'].includes(value)
    }
  ],

  flags: [
    {
      name: 'force',
      alias: 'f',
      description: 'Force deployment'
    },
    {
      name: 'dry-run',
      description: 'Perform a dry run'
    }
  ],

  prompts: [
    {
      type: 'select',
      name: 'environment',
      label: 'Environment',
      options: [
        { title: 'Production', value: 'production' },
        { title: 'Staging', value: 'staging' },
        { title: 'Development', value: 'development' }
      ],
      default: 'production'
    }
  ],

  async action (data, details) {
    this.heading(`Deploying to ${data.environment} environment`)

    const spinner = ora()

    // Build the project
    await BuildCommand.buildAction.call(this, data, details)

    // Run tests if --test-level is set
    if (data.testLevel === 'full') {
      spinner.start('Running full test suite')
      await new Promise(resolve => setTimeout(resolve, 1000))
      spinner.succeed('Tests passed')
    } else if (data.testLevel === 'partial') {
      spinner.start('Running partial test suite')
      await new Promise(resolve => setTimeout(resolve, 1000))
      spinner.succeed('Tests passed')
    }

    if (data.dryRun) {
      // Perform a dry run
      spinner.start('Performing dry run')
      await new Promise(resolve => setTimeout(resolve, 1000))
      spinner.succeed('Dry run complete')
    } else {
      // Deploy the project
      spinner.start('Deploying')
      await new Promise(resolve => setTimeout(resolve, 3000))
      spinner.succeed('Deployment complete')
    }
    
    this.spacer()
  }
})