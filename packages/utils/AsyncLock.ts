export class AsyncLock {
  // eslint-disable-next-line @typescript-eslint/ban-types
  checkingAyncQueue: Function[] = []
  isOk = false

  waiting = () => {
    if (this.isOk) return
    return new Promise((resolve) => {
      this.checkingAyncQueue.push(resolve)
    })
  }
  ok = () => {
    this.isOk = true
    this.checkingAyncQueue.forEach((fn) => fn())
  }

  reWaiting = () => {
    this.isOk = false
  }
}
