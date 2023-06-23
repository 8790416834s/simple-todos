import {Component} from 'react'
import SimpleTodos from './components/SimpleTodos'
import TodoItem from './components/TodoItem'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <SimpleTodos />
      </div>
    )
  }
}
export default App
