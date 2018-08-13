import React from 'react'
import Link from 'umi/link'
import router from 'umi/router'
import Styles from './notarization.less'
import TabMenu from './../components/TabMenu'
import { Map } from 'react-amap';
import Amap from './../components/amap';
import article from './../../public/article.json'
import Carousel from './../components/Carousel'
const data = [
  
]
export default class Notarization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            map: {
                active: 0
            },
            tab: {
                active: 0
            },
            about_banner: {
                active: ''
            }
        }


    }


    componentDidMount() {

    }
    componentDidUpdate() {
        // this.creatMap()
    }

    switchMap = (index) => {

        this.setState({
            map: {
                active: index
            }
        })
    }
    switchTab = (tabname) => {


        router.push('/equity_bond?tab=' + tabname);

    }

    notarization = () => {
        return <div >

            <Carousel imgData={["notarization/in.png"]} />

        </div>
    }


    contentElement = () => {
        const query = this.props.location.query

        switch (query.tab) {

            case 'notarization':

                return this.notarization();
                break;
  

       

        }

    }



    render() {

        if (!this.props.location.query.tab) {
            router.push('?tab=notarization')
        }
        return (
            <>
                <div className={Styles.notarization}>
                    <div className={Styles.banner}>

                    </div>
                    <img className={Styles.solution} src={require("./../../public/images/notarization/solution.png")} />
                    <img className={Styles.three} src={require("./../../public/images/notarization/three.png")} />
                    <div className={Styles.content}>
                   
                        <img src={require("./../../public/images/digital_assets_example.png")} />
                        <TabMenu switchTab={this.switchTab} activeTab={this.props.location.query.tab} data={data}/>
                        
                        {this.contentElement()}
                    </div>
                </div>
            </>
        )
    }


}