import createDom from '../utils/dom.js'
import { createHTMLTag, component, render, styled } from '../utils/utils.js'

const props = {
	message: 'No Te Rindas'
}

const Title = component`${'message'}`(props)

const TitleStyled = styled.LlegoElTrolleo`
	color: orange;
	font-family: system-ui;
	font-size: 2em;
	text-shadow: 2px 2px 0 black;
	width: 100%
`

render(TitleStyled(Title), window.container)

const obj = {
  val: 2,
  double(x) {
    return this.val * x
  },
  testF(prop) {
  	console.info('testing Function')
  }
}

//trackedObj.double(4)