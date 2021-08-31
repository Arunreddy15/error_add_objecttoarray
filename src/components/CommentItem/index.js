// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentsList} = props
  const {id, name, comment, time} = commentsList
  return (
    <li>
      <h1>{name}</h1>
      <p>{comment}</p>
    </li>
  )
}
export default CommentItem
