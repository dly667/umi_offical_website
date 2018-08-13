import React from 'react'
import Link from 'umi/link'
import router from 'umi/router'
import Styles from './supply_chain_finance.less'
import TabMenu from './../components/TabMenu'
import { Map } from 'react-amap';
import Amap from './../components/amap';
import article from './../../public/article.json'
import Carousel from './../components/Carousel'
const data = [
  
]
export default class SupplyChainFinance extends React.Component {
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


        router.push('/supply_chain_finance?tab=' + tabname);

    }

    supply_chain_finance = () => {
        return <div >

            <Carousel imgData={["supply_chain_finance/in.png"]} />

        </div>
    }


    contentElement = () => {
        const query = this.props.location.query

        switch (query.tab) {

            case 'supply_chain_finance':

                return this.supply_chain_finance();
                break;
  

       

        }

    }



    render() {

        if (!this.props.location.query.tab) {
            router.push('?tab=supply_chain_finance')
        }
        return (
            <>
                <div className={Styles.supply_chain_finance}>
                    <div className={Styles.banner}>

                    </div>
                    <img className={Styles.solution} src={require("./../../public/images/supply_chain_finance/solution.png")} />
                    <img className={Styles.three} src={require("./../../public/images/supply_chain_finance/three.png")} />
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