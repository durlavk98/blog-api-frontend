import React, { Component } from 'react'
import axios from 'axios';
import styles from '../styles/blogStyle.module.css';

class CreateComment extends Component {
  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
       username: '',
       body: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const comment = {
      username: this.state.username,
      body: this.state.body
    }

    axios.post('https://arcane-caverns-09297.herokuapp.com/api/posts/'+this.props.postid+'/comments', comment)
    .then(res=> {
      console.log(res.status);
      if(res.status === 200){
        window.location +=  '';
      }
    })

    this.setState({
      username: '',
      body: ''
    })
  }
  
  render() {
    return (
      <div className=" mx-4">
        <h3 className={styles.CreateCommentHead}>Leave a Comment</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
            style={{padding:'10px',width:'50vw'}}
            placeholder="Your Name"
            required
            type="text"
            autoComplete='off'
            className='form-control'
            value={this.state.username}
            onChange={this.onChangeUsername}
            // ref='userInput'
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea 
            style={{padding:'10px',width:'50vw',height:'15vh'}}
            placeholder="Your Comment"
            required
            type="text"
            value={this.state.body}
            className='form-control'
            onChange={this.onChangeBody}
            >
            </textarea>
          </div>
          <div className="form-group">
            <input type="button" onClick={this.onSubmit} value="Create Comment" className='btn btn-primary'/>
          </div>
        </form>        
      </div>
    )
  }
}

export default CreateComment