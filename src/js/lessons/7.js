import createDom from '../utils/dom.js'
import { createHTMLTag, component, render, styled } from '../utils/utils.js'

const props = {
	message: 'No Te Rindas'
}

const Title = component`<marquee> ${'message'} </marquee>`(props)

const TitleStyled = styled.h1`
	color: orange;
	font-family: system-ui;
	font-size: 2em;
	text-shadow: 2px 2px 0 black;
	width: 100%
`

//render(TitleStyled(Title), window.container)