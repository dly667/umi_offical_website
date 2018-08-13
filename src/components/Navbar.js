import React from 'react'
import Link from 'umi/link'
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
      mouser: ''
    });
  }
  render() {
    const { pathname } = this.props.location
    const menu = menuList.map((v, idx) => {
      let liArr = []
      if (v.child.length) {
        liArr = v.child.map((ele,key) => {
          return <Link to={ele.path}><li key={key}>{ele.name}</li></Link>
        })
      }


      return (<div key={idx} index={idx} onMouseOver={(e) => this.setState({ mouser: e.currentTarget.getAttribute("index") })}
      onMouseOut={(e) => this.setState({ mouser: '' })}
        className={this.state.mouser==idx?Styles.mouser_activate:''}><Link key={v.name} to={v.path}>
          <span className={pathname == v.path ? Styles.menu_activate : ''}>{v.name}
          </span></Link>
        <ul>
          {liArr ? liArr : ''}
        </ul></div>)
    })

    return (
      <>
        <div className={Styles.Nbar}>
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

