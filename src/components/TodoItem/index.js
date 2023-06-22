import './index.css'

const TodoItem = props => {
  const {simpleTodos, key} = props
  const {title} = simpleTodos
  const {id} = key

  return (
    <li>
      <p>{title}</p>
      <div>
        <button type="button">Delete</button>
      </div>
    </li>
  )
}

export default TodoItem
