import React, {Component} from 'react';
import './Comment.css'
import CommentCell from "./CommentCell";
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[{id:1,name:"Jone Doe",comment:'good',email:'guoyili19years@gmail.com'},
                {id:2 ,name:"Jeffrey li",comment:'League of Legends (abbreviated LoL or League) is a 2009 multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. Originally inspired by Defense of the Ancients, the game has followed a freemium model since its release on October 27, 2009. League of Legends is often cited as the world\'s largest esport, with an international competitive scene. The 2019 League of Legends World Championship had over 100 million unique viewers, peaking at a concurrent viewership of 44 million, with a minimum prize pool of US$2.5 million.',email:''},
                {id:3 ,name:"Liyuan lin",comment:'',email:''},
                {id:4 ,name:"jeff",comment:'',email:''},
                {id:5 ,name:"manxin zhang",comment:'',email:''},],
            text:""
        }
        this.handlerTextChange = this.handlerTextChange.bind(this)
        this.handleText = this.handleText.bind(this)
    }
    // Get the comment text
    handlerTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    /*
    *Todo: Submit the comment text
    **/
    handleText = (event) =>{
        event.preventDefault()
        const {text} = this.state
        console.log(text)
        alert("have not implement")
    }
    render() {
        return (
            <div className="comment-li" onSubmit={this.handleText}>
                <textarea type={"text"} className={"box-li"} placeholder={"Write a comment"} onChange={this.handlerTextChange}></textarea>
                <button
                    className={"primaryContained-li"}
                    type="submit"
                >
                    Add Comment
                </button>

                <br />
                <br />
                <br />
                {this.state.data.map((item)=>(
                    <CommentCell key={item.id} item={item} />
                ))}
            </div>
        );
    }
}

export default Comment;