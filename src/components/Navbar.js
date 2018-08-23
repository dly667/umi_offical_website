import React from 'react'
import Link from 'umi/link'
import router from 'umi/router'
import Styles from './Navbar.less'
import menuList from './../../public/menu.json'
import classNames from 'classnames'
export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    current: 'mail',
    mouser: ''
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
      mouser: '',

    });
  }


  render() {
    const pathname = this.props.location
    const menu = menuList.map((v, idx) => {
      console.log(this.props, v.path)
      let liArr = []
      if (v.child.length) {
        liArr = v.child.map((ele, key) => {
          return <Link to={ele.path}><li key={key}>{ele.name}</li></Link>
        })
      }


      return (<div key={idx} index={idx} 
        onMouseOver={(e) => this.setState({ mouser: e.currentTarget.getAttribute("index") })}
        onMouseOut={(e) => this.setState({ mouser: '' })}
  
        onClick={(e) => {
          this.setState({ mouser:''})
          if (v.path == 'white') {
            window.open('white.pdf')
            e.preventDefault();
          }else if(v.path == 'scenes'){
           
            this.setState({ mouser: e.currentTarget.getAttribute("index") })
            setTimeout(()=>{
              this.setState({ mouser:''})
            },4000)
            e.stopPropagation();
          }else if(v.path == '/about'){
            
            this.setState({ mouser: e.currentTarget.getAttribute("index") })
            setTimeout(()=>{
              this.setState({ mouser:''})
            },4000)
            e.stopPropagation();
          }
          else{
            router.push(v.path)
            
          }
        }}
        className={(this.state.mouser == idx && (idx==2||idx==4)? Styles.mouser_activate : '') +' '+ Styles.menu_test }>
     
          <span className={
          (pathname == v.path || v.path == 'scenes' && ['/digital_assets','/equity_bond','/supply_chain_finance','/notarization','/supply_chain_traceability'].indexOf(pathname)>-1)? Styles.menu_activate : ''}>{v.name}
          </span>
        <ul >
          {liArr ? liArr : ''}
        </ul></div>)
    })

    return (
      <>
        <div className={Styles.Nbar}  touchstart ={() => this.setState({ mouser: '' })}>
          <span className={Styles.Logo}>
            <img src={require('../../public/images/logo.png')} />
            <span>焕链</span>
          </span>

          <div className={Styles.menu}>
            {/* <span className={Styles.menu_activate}>首页</span>
            <span>产品服务</span>
            <span>应用场景</span>
            <span>产品白皮书</span>
            <span>关于焕链</span> */}
            {menu}
          </div>
          <span className={Styles.login}>
            <span>登录</span>
            <span></span>
            <span>注册</span>
          </span>
        </div>
      </>
    );
  }
}

