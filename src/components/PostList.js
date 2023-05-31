import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errMsg : ''
      }
    }

    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/post')
       .then(response=>{
        this.setState({
            posts: response.data
        })
       })
       .catch(err=>{
        this.setState({
            errMsg : 'Error Retriving Data'
        })
       })
    }
    
  render() {
   const {posts,errMsg} = this.state
    return (
      <div><h1>List of Posts</h1>
     { posts.map(post=>{return <div class="container mb-2">
    <div class="row">
      <div class="col">
        <div class="card mt-3">
          <div class="card-body">
            <p class="card-text"><strong><h1>Title : {post.title}</h1></strong> <span id="title"></span></p>
            <p class="card-text"><strong>Desceiption : {post.body}</strong> <span id="description"></span></p>
          </div>
        </div>
      </div>
    </div>
  </div>})}
  {
    errMsg ? <h1>{errMsg}</h1> : null
  }
         
      </div>
    )
  }
}

export default PostList