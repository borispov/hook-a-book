const throttle = (fn, limit) => {
  let lastRan, lastFn
  return function() {
    const ctx = this
    const args = arguments
    if (!lastRan) {
      fn.apply(ctx, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          fn.apply(ctx, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

export default throttle