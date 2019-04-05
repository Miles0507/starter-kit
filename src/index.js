import _ from 'lodash'
import 'normalize.css'
import './assets/css/reset.css'
import './assets/style.css'
import './assets/style2.css'
import Icon from './assets/images/love.png'
import printMe from './print'

function component() {
  const element = document.createElement('div')
  const input = document.createElement('input')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Starter Kit'], ' ')
  element.classList.add('hello')
  element.classList.add('hello2')

  // Add the image to our existing div.
  const myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  // btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   var print = module.default

  //   print()
  // })

  return element
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
} else {
  console.log('production mode!')
}
