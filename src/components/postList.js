import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/blogStyle.module.css';

const Post = ({post}) => {
  const date = new Date(post.timestamp);
  return (
    <div className="mx-32 my-16">
      <Link to={'/posts/'+post._id} style={{textDecoration:"none"}}>
        <h1 className={styles.postTitle}>{post.title}</h1>
      </Link>
      <p className="{styles.postDetails} mt-2">
        Posted On- <span style={{color:"#777"}}>{date.toDateString()}</span>, by <span style={{color:"#777"}}>{post.author}</span>
      </p>
      <p className={styles.postBody}>
        {post.body.slice(0,200)}...
      </p>
      <Link to={'/posts/'+post._id} style={{textDecoration:"none"}}>
        <button className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Read More</button>
      </Link>
    </div>
  )
}

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
       posts: []
    }
  }

  componentDidMount() {
    axios.get('https://arcane-caverns-09297.herokuapp.com/api/posts')
    .then(res=>{
      this.setState({
        posts: res.data.filter(post=>post.published===true)
      })
    })
    .catch(err=>console.log(err))
  }

  postList() {
    return this.state.posts.map(post=>{
      return <Post post={post} key={post._id}/>
    })
  }
  
  render() {
    return (
      <div>
        {this.postList()}
      </div>
    )
  }
}

export default PostList
