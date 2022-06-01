const styled = handlerTrackCalls({})

function handlerTrackCalls(obj) {
  const handler = {
    get(target, propKey, receiver) {
			const method     = target[propKey];
			const propExists = Object.keys(target).includes(propKey)

      if ((typeof method === 'function' || typeof method === 'undefined') && !propExists) {
	      return function interceptedMethod(styles) {
	      	return function (content) {
		      	const htmlReturn = `
							<${propKey} style="${styles}">
								${content}
							</${propKey}>
						`
    				target[propKey] = htmlReturn
	      		return htmlReturn
	      	}
	      }
      }
      return method
    }
  }
  return new Proxy(obj, handler)
}