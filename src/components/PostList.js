import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(err => {
                this.setState({
                    errMsg: 'Error Retriving Data'
                })
            })
    }

    render() {
        const { posts, errMsg } = this.state
        return (
            <div><h1>List of Posts</h1>
                {posts.map(post => {
                    return <div className="container mb-2">
                        <div className="row">
                            <div className="col">
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <p className="card-text"><strong><h1>Title : {post.title}</h1></strong> <span id="title"></span></p>
                                        <p className="card-text"><strong>Desceiption : {post.body}</strong> <span id="description"></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
                {
                    errMsg ? <h1>{errMsg}</h1> : null
                }

            </div>
        )
    }
}

export default PostList