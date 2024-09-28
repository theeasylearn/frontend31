import React from 'react';
import ReactDOM from 'react-dom/client';
class UserPost extends React.Component {
    constructor(props) {
        super(props);
        //create propery variable
        this.username = props.username;
        this.photo = props.photo;
        this.content = props.content;
        //create state array
        this.state = {
            comments: [],
            message: '',
            isLiked:0
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addComment = () => {
        console.log(this.state.message);
        if (this.state.message.length > 0) {
            this.state.comments.unshift(this.state.message);
            this.setState({
                message: ''
            });
        }
    }
    deleteComment = (item) => {
        let temp = this.state.comments.filter((msg) => {
           if(msg !== item)
                return msg;
        });
        this.setState({
            comments:temp
        });
    }

    updateLike = () => {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }
    render() {
        return (<div className="col-4">
            <div className="card shadow">
                {/* Post Header (User Info) */}
                <div className="card-header d-flex align-items-center">
                    <img src="https://picsum.photos/50" alt="Profile" className="rounded-circle me-3" />
                    <div>
                        <h5 className="mb-0">{this.username}</h5>
                        <small className="text-muted">2 hours ago</small>
                    </div>
                </div>
                {/* Post Body (Text and Image) */}
                <div className="card-body">
                    <p className="card-text">
                        {this.content}
                    </p>
                    <img src={this.photo} className="img-fluid rounded" alt="Post Image" /> <br />
                    <div className='d-flex justify-content-between'>
                        <span><b>Comments</b></span>
                        <span className='badge bg-dark'>{this.state.comments.length>0 && this.state.comments.length + " comments"}</span>
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.state.comments.map((item,index) => {
                            return (<li key={index} className='list-group-item d-flex justify-content-between'><span>{item}</span>
                                <i onClick={() => this.deleteComment(item)} className='fa fa-trash'></i>
                            </li>)
                        })}
                    </ul>
                </div>
                {/* Post Footer (Like, Comment, Share Buttons) */}
                <div className="card-footer d-flex justify-content-between">
                    <button className="btn btn-light btn-sm" onClick={this.updateLike}>
                        <i className={(this.state.isLiked==true) ? "fa-solid fa-thumbs-up fa-2x" : "fa-regular fa-thumbs-up fa-2x"}></i>
                    </button>
                    <input type='text' className='form-control' name='message' onChange={(e) => this.onChangeValue(e)} value={this.state.message} />
                    <button className="btn btn-light btn-sm" onClick={this.addComment}>
                        <i className="bi bi-chat" /> Comment
                    </button>
                </div>
            </div>
        </div>);
    }
}
class FaceBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (<div className="container my-4">
            <div className="row">
                <UserPost username='Ankit Patel' photo='http://picsum.photos/300?random=1' content='this my first facebook post' />
                <UserPost username='Diya Patel' photo='http://picsum.photos/300?random=2' content='this my second facebook post' />
            </div>
        </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FaceBook />);