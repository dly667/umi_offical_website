import React from 'react'
import Styles from './Carousel.less'
import { relativeTimeRounding } from '_moment@2.22.2@moment';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activate:1
        }
    }
    imgList = ()=>{
        const li = this.props.imgData.map((img_name,idx)=>{
            
            return <li className={this.state.activate-1==idx?Styles.activate:''}><img style={{width:"100%"}}src={require("./../../public/images/"+img_name)}/></li>
        })
        return li
    }
    oList = ()=>{
        const li = this.props.imgData.map((img_name,idx)=>{
            return <li className={this.state.activate-1==idx?Styles.activate:''}  onClick={()=>this.setState({activate:idx+1})}></li>
        })
        return li
    }
    tab_next_pre = (type)=>{
        if(type=='next'){
            if(this.state.activate==this.props.imgData.length){
                this.setState({activate:1})

            }else{
                this.setState({activate:this.state.activate+1})

            }
        }else{
            if(this.state.activate==1){
                this.setState({activate:this.props.imgData.length})

            }else{
                this.setState({activate:this.state.activate-1})

            }
        }
    }
    render() {
        
        if(this.state.activate>this.props.imgData.length){
            this.setState({activate:1})
            console.log('aa')
        }
        return (

            <>
                <div className={Styles.main}>
                    <ul className={Styles.imgList}>
                      {this.imgList()}
                    </ul>
                    <ul className={Styles.tab_bar}>
                        {this.oList()}
                    </ul>
                    <img className={Styles.left} src={require("./../../public/images/carousel/left.png")} onClick={()=>this.tab_next_pre('pre')} />
                    <img className={Styles.right} src={require("./../../public/images/carousel/right.png")} onClick={()=>this.tab_next_pre('next')} />
                </div>

            </>
        )
    }

}
