import React from 'react'
import Navbar from './Navbar'
import Styles from './Header.less'


export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }


    render() {

        const { pathname } = this.props.location
       

        return (

            <>
                <div className={Styles.content}>
                    <div className={Styles.header}>
                        <Navbar location={pathname}></Navbar>
                        <div className={Styles.slogan}></div>
                    </div>
                </div>

            </>
        )
    }

}
