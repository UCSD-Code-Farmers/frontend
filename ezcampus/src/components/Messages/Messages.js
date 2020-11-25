import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Chat.css';
import uuid from 'react-uuid';
import store from '../../store/Store'
import {Input} from 'antd';
import Icon from '@ant-design/icons';
import {ArrowLeftOutlined} from '@ant-design/icons';

export default class Messages extends Component{

  createHTMLMessage(msg, source){
    this.messages.push({msg: msg, source: source});
  }

  constructor(props) {
    super(props)
    this.history = props.history

    this.name = "Yiming Zhao";
    this.messages = [ {msg: "hello", source: "client"}, {msg: "hi", source: "server"} ];
    this.createHTMLMessage("Yesterday 21:16", "reminder");
    this.createHTMLMessage("How are you doing", "client");
  }

  render(){
    return (
      <div>
        <div className='content-header'>
          <div><ArrowLeftOutlined className="back-button" /></div>
          <div className="content-header-name">{this.name}</div>
        </div>
          <ul className="messages">
            {this.messages.map(x => <li><div className={x.source}>{x.msg}</div></li>)}
          </ul>
        <div className='input-line'>
          <Input.TextArea/>
          <div>
          <Button className='send-button'>
            <strong>Send</strong>
          </Button>
          </div>

        </div>
      </div>
    );
  }
}
