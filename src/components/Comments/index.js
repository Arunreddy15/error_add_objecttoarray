import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const commentsList = [
  {
    id: uuidv4(),
    name: 'Nikhil',
    comment: 'hi hello',
    time: formatDistanceToNow(new Date()),
  },
]
// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: ''}

  onSubmitComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      time: formatDistanceToNow(new Date()),
    }
    console.log(typeof newComment)
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeInputName = event => {
    this.setState({name: event.target.value})
  }

  onChangeInputComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    // const {name, comment, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Comments</h1>
          <div className="comment-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image-logo"
            />
            <form
              className="comment-edit-container"
              onSubmit={this.onSubmitComment}
            >
              <p className="question">Say something about 4.0 technologies</p>
              <input
                type="text"
                className="input-name"
                placeholder="Your Name"
                onChange={this.onChangeInputName}
              />
              <br />
              <textarea
                rows="8"
                cols="30"
                className="input-comment"
                placeholder="Your Comment"
                onChange={this.onChangeInputComment}
              />
              <button type="submit" className="add-comment">
                Add Comment
              </button>
            </form>
          </div>
          <hr className="seperator" />
          <ul>
            <CommentItem commentsList={commentsList} key={commentsList.id} />
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
