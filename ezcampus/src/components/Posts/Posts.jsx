import React, { Component } from 'react'
import SinglePost from './SinglePost'

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.data = [
            {
                id: '2232f-usfe-2323f23-2fdsf',
                creator: 'Jeff',
                title: 'VOR 2b2b looking for housemate',
                content: 'We are looking for someone to share our apartment with. Housemate 1 is a ucsd graduate student, Housemate2 is a ucsd undergrad. No alchol, drugs',
                date: '11/10/2020',
                views: 10,
                likes: 8
            }
        ]
    }



    render() {
        return (
            <div>
                <SinglePost data={this.data[0]}></SinglePost>
            </div>
        )
    }
}
