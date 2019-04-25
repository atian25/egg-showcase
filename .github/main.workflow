workflow "CI" {
  on = "push"
  resolves = ["npm run cov"]
}

action "npm install" {
  uses = "actions/npm@master"
  args = "install"
}

action "npm run lint" {
  uses = "actions/npm@master"
  args = "run lint"
  needs = ["npm install"]
}

action "npm run cov" {
  uses = "actions/npm@master"
  needs = ["npm run lint"]
  args = "run cov"
}
