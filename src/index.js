import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {articles} from './fixtures'

//const article = articles[0]

// function HelloWorld(){
//     return <h1>Hello World</h1>
// }

render(<App articles = {articles}/>, document.getElementById('container'))