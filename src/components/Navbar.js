import React from 'react'
import Link from 'umi/link'
import Styles from './Navbar.less'
import menuList from './../../public/menu.json'
export default class Navbar extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const {pathname} = this.props.location
    const menu = menuList.map((v)=>{
      return (<Link key={v.name}to={v.path}><span className={pathname==v.path?Styles.menu_activate:''}>{v.name}</span></Link>)
    })
    
    return (
      <>
        <div className={Styles.Nbar}>
          <span className={Styles.Logo}>
            <img src={require('../../public/images/logo.png')}/>
            <span>焕链</span>
          </span>

          <div className={Styles.menu}>
            {/* <span className={Styles.menu_activate}>首页</span>
            <span>产品服务</span>
            <span>应用场景</span>
            <span>产品白皮书</span>
            <span>关于布比</span> */}
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

