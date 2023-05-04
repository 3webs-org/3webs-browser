import TaskList from './tabState/task.js'

let tabs = undefined
let tasks = new TaskList()

export function initialize () {
  window.tabs = tabs
  window.tasks = tasks
}

export function setTabs (newTabs) {
  tabs = newTabs
}

export function getTabs () {
  return tabs
}

export function setTasks (newTasks) {
  tasks = newTasks
}

export function getTasks () {
  return tasks
}
