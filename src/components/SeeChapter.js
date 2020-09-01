import React,{Component} from 'react';
import Axios from 'axios';

export default class SeeChapter extends Component{
    state={showData:[]}
    componentDidMount(){
        Axios.get('http://localhost:4000/subject').then((res)=>{
            console.log(res.data);
            this.setState({showData:res.data})
        })
    }
    render(){
        return(<React.Fragment>
            <div className="container" style={{display:'flex',flexWrap:'wrap'}}>
            {this.state.showData.map((data,i)=>{
                return <>
                <div className="card" style={{width:'250px',margin:'10px'}}>
            <div className="card-header">{data.title}</div>
                <div className="card-body">{data.link}</div>
                <div className="card-footer"><a href={data.link}>Go</a></div>
                </div>
                </>
            })}
            </div>
        </React.Fragment>);
    }
}