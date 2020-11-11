import React, { Component } from 'react'

export default class SinglePost extends Component {
    constructor(props) {
        super(props)
        this.data = this.props.data
    }
    componentDidMount() {
        console.log(this.data)
    }

    render() {
        const {creator, title, content, views, likes, date, id} = this.data

        return (
            <div>
                <h1>{id}, {creator}, {title}, {content}</h1>
            </div>
        )
    }
}
