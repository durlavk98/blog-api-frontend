import React, { Component } from 'react'
import axios from 'axios';
import styles from '../styles/blogStyle.module.css';
import { Link } from 'react-router-dom';

import CommentList from './commentList';
import CreateComment from './createComment';

class HomePage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      body: '',
      author: '',
      date: '',
      id: '',
      showComments: false
    }
  }

  componentDidMount() {
    axios.get('https://arcane-caverns-09297.herokuapp.com/api/posts')
    .then(res=>{
      this.setState({
        id: res.data.filter(post=>post.published===true)[0]._id,
        title: res.data.filter(post=>post.published===true)[0].title,
        body: res.data.filter(post=>post.published===true)[0].body,
        author: res.data.filter(post=>post.published===true)[0].author,
        date: res.data.filter(post=>post.published===true)[0].timestamp,
      })
    })
    .catch(err=>console.log(err));
  }
  
  render() {
    const date = new Date(this.state.date);
    return (
      <div className="mx-32 mb-4">
        <div className="flex justify-between items-center mb-24">
          <div>
            <h1>A Simple Blog</h1>
            <p className="mb-4">React blog that uses REST api to show posts.</p>
            <a href="#featured" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Featured Post</a>
            <Link to='/posts' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" aria-current="page">All Post</Link>
          </div>
          <img src="/blog.svg" alt="blog poster" style={{width: "50vw"}}/>
        </div>
        <div id="featured">
          <h1 className="text-4xl text-center mb-8 underline">Featured Post</h1>
          <h1 className={styles.postTitle}>{this.state.title}</h1>
          <p className="{styles.postDetails} mt-2 mb-4">
            Posted On- <span style={{color:"#777"}}>{date.toDateString()}</span>, by <span style={{color:"#777"}}>{this.state.author}</span>
          </p>
          <p className={styles.postBody}>
            {this.state.body}
          </p>
          <hr style={{color:"#999"}}/>
          <button 
          className="mx-4 my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          onClick={()=>{this.setState({showComments: !this.state.showComments})}}>
            Show Comments {this.state.showComments}
          </button>
          {this.state.showComments &&<CommentList postid={this.state.id}/>}
          <hr style={{color:"#999"}}/>
          <CreateComment postid={this.state.id}/>
        </div>
      </div>
    )
  }
}

export default HomePage