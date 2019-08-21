
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import BoardItem from './BoardItem';
import BoardForm from './BoardForm';

class App extends Component {
  state = {
    maxNo:3,
    boards: [
        {
            brdno: 1,
            brdwriter: 'Lee SunSin',
            brdtitle: 'If you intend to live then you die',
            brddate: new Date()
        },
        {
            brdno: 2,
            brdwriter: 'So SiNo',
            brdtitle: 'Founder for two countries',
            brddate: new Date()
        }
    ]
}

handleSaveData = (data) => {
  this.setState({
    maxNo: this.state.maxNo+1,
        boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data })
  });
}

render() {
    const { boards } = this.state;

    return (
        <div>
           <BoardForm onSaveData={this.handleSaveData}/>
            <table border="1">
                <tbody>
                <tr align="center">
                    <td width="50">No.</td>
                    <td width="300">Title</td>
                    <td width="100">Name</td>
                    <td width="100">Date</td>
                </tr>
                {
                    boards.map(row =>
                        (<BoardItem key={row.brdno} row={row} />)
                    )
                }
                </tbody>
            </table>
        </div>
    );
}
}

export default App;
