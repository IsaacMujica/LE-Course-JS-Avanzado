import createDom from '../utils/dom.js'
import { createHTMLTag } from from '../utils/utils.js'

const name = 'Isaac'
const $content = document.querySelector('#content')
function taggedTemplate(strings, ...values) {
	let textContent = ''
	strings.forEach((string, index) => {
		const strong = values[index] ? `<strong>${values[index]}</strong>` : '';
		textContent += string + strong
	})
	const $tag = createHTMLTag(textContent)
	$content.innerHTML = ''
	$content.append($tag)
}
taggedTemplate`El ${'trabajo duro'} supera al ${'talento natural'}`