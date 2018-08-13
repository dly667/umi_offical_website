import React from 'react'
import Link from 'umi/link'
import router from 'umi/router'
import Styles from './equity_bond.less'
import TabMenu from './../components/TabMenu'
import { Map } from 'react-amap';
import Amap from './../components/amap';
import article from './../../public/article.json'
import Carousel from './../components/Carousel'
const data = [
    {key:0,tabIndex:'digital_finance',tabName:"数字金融"},
    {key:1,tabIndex:'smart_government',tabName:"智慧政务"},
    {key:2,tabIndex:'commodity_trading',tabName:"大宗商品交易"},
   

]
export default class EquityBond extends React.Component {
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

    digital_finance = () => {
        return <div >

            <Carousel imgData={["equity_bond/digital_finance.png"]} />

        </div>
    }
    smart_government = () => {
        return <div >

            <Carousel imgData={["equity_bond/commodity_trading.png"]} />

        </div>
    }
    commodity_trading = () => {
        return <div >

        <Carousel imgData={["equity_bond/commodity_trading.png"]} />

    </div>
    }


    contentElement = () => {
        const query = this.props.location.query

        switch (query.tab) {

            case 'digital_finance':

                return this.digital_finance();
                break;
            case 'smart_government':

                return this.smart_government();
                break;
            case 'commodity_trading':

                return this.commodity_trading();
                break;

       

        }

    }



    render() {

        if (!this.props.location.query.tab) {
            router.push('?tab=digital_finance')
        }
        return (
            <>
                <div className={Styles.digital_assets}>
                    <div className={Styles.banner}>

                    </div>
                    <img className={Styles.solution} src={require("./../../public/images/equity_bond/solution.png")} />
                    <img className={Styles.three} src={require("./../../public/images/equity_bond/three.png")} />
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