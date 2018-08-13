import React from 'react'
import Link from 'umi/link'
import router from 'umi/router'
import Styles from './supply_chain_traceability.less'
import TabMenu from './../components/TabMenu'
import { Map } from 'react-amap';
import Amap from './../components/amap';
import article from './../../public/article.json'
import Carousel from './../components/Carousel'
const data = [
    { key: 0, tabIndex: 'agricultural', tabName: "农产品溯源" },
    { key: 1, tabIndex: 'supervision', tabName: "食药监溯源" },
    { key: 2, tabIndex: 'certificate', tabName: "农产品合格证" },
    { key: 3, tabIndex: 'important', tabName: "重要产品溯源" },

]
export default class SupplyChainTraceability extends React.Component {
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


        router.push('/supply_chain_traceability?tab=' + tabname);

    }

    agricultural = () => {
        return <div >

            <Carousel imgData={["supply_chain_traceability/agricultural01.png","supply_chain_traceability/agricultural02.png",
            "supply_chain_traceability/agricultural03.png","supply_chain_traceability/agricultural04.png",
            "supply_chain_traceability/agricultural05.png","supply_chain_traceability/agricultural06.png"]} />

        </div>
    }
    supervision = () => {
        return <div >

            <Carousel imgData={["supply_chain_traceability/supervision01.png","supply_chain_traceability/supervision02.png","supply_chain_traceability/supervision03.png",
            "supply_chain_traceability/supervision04.png","supply_chain_traceability/supervision05.png"]} />

        </div>
    }
    certificate = () => {
        return <div >

            <Carousel imgData={["supply_chain_traceability/certificate01.png","supply_chain_traceability/certificate02.png","supply_chain_traceability/certificate03.png"]} />

        </div>
    }
    important = () => {
        return <div >

            <Carousel imgData={["supply_chain_traceability/important01.png","supply_chain_traceability/important02.png"]} />

        </div>
    }

    contentElement = () => {
        const query = this.props.location.query

        switch (query.tab) {

            case 'agricultural':

                return this.agricultural();
                break;

            case 'supervision':

                return this.supervision();
                break;
            case 'certificate':

                return this.certificate();
                break;
            case 'important':

                return this.important();
                break;

        }

    }



    render() {

        if (!this.props.location.query.tab) {
            router.push('?tab=agricultural')
        }
        return (
            <>
                <div className={Styles.supply_chain_traceability}>
                    <div className={Styles.banner}>
                  
                    </div>
                    <img className={Styles.solution} src={require("./../../public/images/supply_chain_traceability/solution.png")} />
                    <img className={Styles.three} src={require("./../../public/images/supply_chain_traceability/three.png")} />
                    <div className={Styles.content}>

                        <img src={require("./../../public/images/digital_assets_example.png")} />
                        <TabMenu switchTab={this.switchTab} activeTab={this.props.location.query.tab} data={data} />

                        {this.contentElement()}
                    </div>
                </div>
            </>
        )
    }


}