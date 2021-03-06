const local = {
  get: name => {
    return window.localStorage.getItem(name)
  },
  set: (name, val) => {
    window.localStorage.setItem(name, val)
  },
  remove: name => {
    window.localStorage.removeItem(name)
  },
  clear: () => {
    window.localStorage.clear()
  }
}
export default local
