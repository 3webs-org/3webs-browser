import TaskList from './tabState/task.js'

export function initialize () {
  window.tasks = new TaskList()
  window.tabs = undefined
}
