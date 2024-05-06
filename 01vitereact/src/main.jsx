import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://duckduckgo.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit DuckDuckGo'
// }

const anotherElement = (
  <a href="https://duckduckgo.com" target='_blank'>Visit DuckDuckGO!</a>
)

const anotherUser = "Chai Aur React";

const reactElement = React.createElement(
  'a',
  {href: 'https://duckduckgo.com', target: '_blank'},
  'Click Me to Visit DuckDuckGo!',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  // <MyApp/>
  // MyApp()
  // anotherElement
  reactElement
  
)
