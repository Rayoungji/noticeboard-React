import React, { Component } from 'react'

export default class BoardForm extends Component {
    // state = {
    //     brdtitle:'',
    //     brdwriter:''
    // }
    
    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }
    
    //값을 서버로 전송할떄 발생하는 이벤트 처리
    handleSubmit = (e) => {
        //실제로 서버에 안보낼꺼니까 중지시켜준다
         e.preventDefault();
         //원래는 서버로 보내는데 여기서는 app의 board배열로 데이터를 보낸다
        this.props.onSaveData(this.state);
         this.setState({});
     }
    
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="brdtitle" onChange={this.handleChange}/>
                <input placeholder="name" name="brdwriter" onChange={this.handleChange}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}
