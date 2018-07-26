import React from 'react'
import Styles from './../pages/about.less'


export default class AMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {

            },
            title: ""
        }
    }
    componentWillMount() {

        const { lng, title } = this.props;
        this.setState({ center: lng.center, title }, () => {
            this.creatMap();
        });
    }
    componentWillReceiveProps(props) {
       
        if (props.lng.center != this.state.center) {
            this.setState({ center: props.lng.center, title: props.title }, () => {
                this.map.setCenter(props.lng.center);
                  // 创建一个 Marker 实例：
       this.creat_marker()
            })
        }
    }
    map = null;
    creatMap = () => {
        const { center, title } = this.state;

        this.map = new window.AMap.Map(this.amap, {
            resizeEnable: true,
            zoom: 11,
            center: center
        });
     
        this.creat_marker()
        
    }

    creat_marker = ()=>{
        const { center, title } = this.state;
        this.map.clearMap()
        // 创建一个 Marker 实例：
        var marker = new window.AMap.Marker({
            position: new window.AMap.LngLat(center[0], center[1]),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: title
        });

        // 将创建的点标记添加到已有的地图实例：
        this.map.add(marker);

        // 移除已创建的 marker
        // this.map.remove(marker);
    }

    render() {

        return (
            <div className={Styles.map} ref={(amap) => this.amap = amap}></div>
        )
    }


}