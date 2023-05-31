import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         id:'',
         title:'',
         body:''
      }
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    }
    
  render() {
    const {userId,id,title,body} = this.state
    return (
      <div>
          <div className="container">
        <form onSubmit={this.submitHandler}>
          
            <label htmlFor="userId">User ID</label>
            <input type="text" className="form-control" name='userId' value={userId} id="userId" placeholder="Enter User ID" onChange={this.changeHandler} />
          
            <label htmlFor="id">ID</label>
            <input type="text" value={id} name='id' className="form-control" id="id" placeholder="Enter ID" onChange={this.changeHandler} />
          
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" name='title' value={title} id="title" placeholder="Enter Title"  onChange={this.changeHandler}/>
          
            <label htmlFor="description">Description</label>
            <textarea className="form-control" value={body} name='body' id="description" rows="3" placeholder="Enter Description" onChange={this.changeHandler}></textarea>
          <button type="submit" className="btn btn-danger">Submit</button>
        </form>
  </div>
      </div>
    )
  }
}

export default PostForm