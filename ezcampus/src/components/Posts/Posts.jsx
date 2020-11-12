import React, { Component } from 'react'
import SinglePost from './SinglePost'
import "./homepage.css"
import { HomeOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import { Row, Col} from 'antd';

export default class Posts extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        posts:[
            {
                name: 'Liyuan',
                title: "A master bedroom for rent in VOR",
                content: "Move-in September 21, 2019, the rent will be prorated. A 12 - months minimum agreement or longer. Master bedroom size 15' x 14', fully furnished bedroom with a private entrance. This is a 2 bedroom 2 bathroom. Privileges included are Kitchen, living room, laundry. Utilities and WiFi not included. Must be clean, respectful and without drama. Please call for viewing.",
                date: '11-10-2020',
                views: 250,
                likes: 110
            },
            {
                name: 'Haolun',
                title: "Used table from Ikea",
                content: "height adjustable office table, perfect for Zoom University. Asking price of $100",
                views: 44,
                likes: 2
            }
        ],
        pageSize:10
    };



    render() {
        return (
            <div>
                <>
                <HomeOutlined style={{
                    fontSize:40,
                    float: "left"}}/>
                <div style={{
                    fontSize:35,
                    marginLeft:"50px",
                    marginBottom:"50px",
                    flexFlow:"row warp"
                    }}>Home</div>
                </>
                    
                <div>
                    <div style={{marginTop:"20px"}}>
                    {this.state.posts.map(
                        aPost => (
                        <div style={{
                            flex:"0,0,100%",
                            width:"100%"}}>
                        <a href="#">
                        <SinglePost 
                        name={aPost.name} 
                        title={aPost.title}
                        content={aPost.content}
                        views={aPost.views}
                        likes={aPost.likes}
                        />
                        </a>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
