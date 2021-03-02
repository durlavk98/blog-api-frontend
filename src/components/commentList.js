import React, { Component } from 'react'
import axios from 'axios';

import styles from '../styles/blogStyle.module.css';

const Comment = ({comment}) => {
  const date = new Date(comment.timestamp);
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };
  let str = comment.body;
  Object
  .entries(htmlEscapes)
  .forEach(([plain, hexCode]) => str = str.replace(new RegExp(hexCode, 'g'), plain));
  return (
    <div className={styles.commentBody}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <span>{comment.username} <span style={{color:"#999"}}>says-</span></span>
        <span style={{color:"#777"}}>{date.toDateString()} </span>
      </div>
      <hr style={{color:"#999"}}/>
      <p style={{marginLeft:"10px"}}> {str} </p>
    </div>
  )
}

class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
       comments: []
    }
  }

  componentDidMount() {
    axios.get('https://arcane-caverns-09297.herokuapp.com/api/posts/'+this.props.postid+'/comments')
    .then(res=>{
      this.setState({
        comments: res.data
      })
    })
    .catch(err=>console.log(err))
  }

  commentList() {
    return this.state.comments.map(comment=>{
      return <Comment comment={comment} key={comment._id}/>
    })
  }
  
  render() {
    return (
      <div className={styles.commentbody}>
        <h3 className={styles.commentHead}>Some of your thoughts on this {this.props.postid} -</h3>
        {this.commentList()}
      </div>
    )
  }
}

export default CommentList
