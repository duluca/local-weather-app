const cp = require('child_process')
const fs = require('fs')
const path = require('path')

// get projects root
const root = path.resolve(__dirname, '../projects/')

fs.readdirSync(root).forEach(module => {
  const modulePath = path.join(root, module)
  console.log(modulePath)

  const project = ['--project', module]

  const build = ['run', 'build', '--', '--prod'].concat(project)
  const test = ['run', 'test', '--', '--watch=false'].concat(project)
  const e2e = ['run', 'e2e', module]

  const npmCommandsArray = [build, test, e2e]

  npmCommandsArray.forEach(command => {
    cp.spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', command, {
      env: process.env,
      cwd: modulePath,
      stdio: 'inherit',
    })
  })
})
