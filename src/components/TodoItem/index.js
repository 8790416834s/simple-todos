import './index.css'

const TodoItem = props => {
  const {simpleTodos, key, onDeleteItem} = props
  const {title} = simpleTodos
  const {id} = key

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="item-container">
      <p className="paragraph">{title}</p>
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
