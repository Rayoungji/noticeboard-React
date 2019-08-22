import React, { Component } from 'react'

//데이터 리스트화하여 보여주기
//서버연동을 한다면 엔티티 느낌?-> 이 형식으로 데이터를 전달하겠다 같은 것
export default class BoardItem extends Component {
  
    handleRemove= (e)=>{
    this.props.onDelete(this.props.row.brdno)
  
    }

    handleSelectRow= (e)=>{
        this.props.onSelectRow(this.props.row)
    }
    render() {
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td><a href='$' onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
                <td align='center'><button type='delete' onClick={this.handleRemove}>x</button></td>
            </tr>
        );
    }
}
