import React from 'react'
import Styles from './about.less'
import TabMenu from './../components/TabMenu'
import { Map } from 'react-amap';
export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        var map = new window.AMap.Map('container', {
            resizeEnable: true,
            zoom: 11,
            center: [116.397428, 39.90923]
        });
    }
    render() {

        const ele = (<div id='container' className={Styles.map}></div>)
        return (
            <>
                <div className={Styles.about}>
                    <div className={Styles.banner}>
                        <div className={Styles.banner_contact}>

                        </div>
                    </div>
                    <div className={Styles.content}>
                        <TabMenu />
                        <div className={Styles.map_box}>
                            <ul>
                                <li className={Styles.active}>杭州总部</li>
                                <li>北京</li>
                                <li>杭州</li>
                                <li>深圳</li>
                            </ul>
                            {ele}
                        </div>

                    </div>
                </div>
            </>
        )
    }


}