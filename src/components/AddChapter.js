import React,{Component} from 'react';
import Axios from 'axios';

export default class AddChapter extends Component{
    constructor(props){
        super(props);
        this.state={
            title:undefined,
            subject:undefined,
            url:undefined,
            desc:undefined,
            link:undefined

        }
    }
    selectOption=(e)=>{
        console.log(e.target.value)
        this.setState({subject:e.target.value})
    }
    changeData=(val,e)=>{
            this.setState({[val]:e.target.value})
    }
    submitData=()=>{
        Axios.post('http://localhost:4000/subject',{
            title:this.state.title,
            subject:this.state.subject,
            url:this.state.url,
            desc:this.state.desc,
            link:this.state.link
        }).then((res)=>{
                console.log(res);
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(<React.Fragment>
            <div className="title">
               Title: <input type="text" value={this.state.title} onChange={this.changeData.bind(this,'title')}/>
            </div>
            <div  className="subject">
                <select onChange={this.selectOption}>
                    <option>Select</option>
                    <option>abc</option>
                    <option>xyz</option>
                </select>
            </div>
            <div className="link">
                link <input type="text" value={this.state.url} onChange={this.changeData.bind(this,'link')}/>
            </div>
            <div className="desc">
               desc <input type="text" onChange={this.changeData.bind(this,'desc')}/>
            </div>
            <div className="submit">
                <button onClick={this.submitData}>Add</button>
            </div>
        </React.Fragment>);
    }
}