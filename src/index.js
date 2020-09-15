export default class Fifo {

  constructor() {
    this.queue = []
  }

  add(item) {
    this.queue.push(item)
  }

  take() {
    return this.queue.shift()
  }

  size() {
    return this.queue.length
  }
}
