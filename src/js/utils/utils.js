import createDom from './dom.js'

export function createHTMLTag(string, tag = 'p') {
	return createDom(`<${tag}>${string}</${tag}>`)
}

export function component(strings, ...values) {
	/*let textContent = ''
	strings.forEach((string, index) => {
		const strong = values[index] ? `<strong>${values[index]}</strong>` : '';
		textContent += string + strong
	})*/
	// const $tag = createHTMLTag(textContent)
	return function (props) {
		let newContent = strings.slice()
		values.forEach((value, index) => {
			newContent[index] += props[value]
			
		})
		return newContent.join('')
	}
}

export function render(component, container) {
	if (!(container instanceof HTMLElement)) throw new Error('Container no es un HTMLElement')
	container.innerHTML = component
}

export const styled = handlerTrackCalls({})


function handlerTrackCalls(obj) {
  const handler = {
    // anytime we do obj.someMethod
    // we actually return the interceptedMethod instead
    get(target, propKey, receiver) {

			const method     = target[propKey];
			const propExists = Object.keys(target).includes(propKey)
			
      // we only do something special if we're working with a function
      // on the object. If the property isn't a function we can just return
      // it as normal.
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