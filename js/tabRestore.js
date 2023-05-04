class TabStack {
  constructor(tabStack) {
    this.depth = 10

    if (tabStack) {
      this.stack = tabStack.stack
    } else {
      this.stack = []
    }
  }
  push(closedTab) {
    // Do not store private tabs or blank tabs
    if (closedTab.private ||
      closedTab.url === '') {
      return
    }

    if (this.stack.length >= this.depth) {
      this.stack.shift()
    }

    this.stack.push(closedTab)
  }
  pop() {
    return this.stack.pop()
  }
}

export default TabStack
