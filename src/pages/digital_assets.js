import React from 'react'
import Link from 'umi/link'
import router from 'umi/router'
import Styles from './digital_assets.less'
import TabMenu from './../components/TabMenu'

import article from './../../public/article.json'
import Carousel from './../components/Carousel'

const data = [
    {key:0,tabIndex:'game_trading',tabName:"游戏交易"},
    {key:1,tabIndex:'business_credit',tabName:"商业积分"},
    {key:2,tabIndex:'network_mutual_aid',tabName:"网络互助"},
    {key:3,tabIndex:'insurance_card',tabName:"保险卡单"},
]
export default class DigitalAssets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            // tab: {
            //     active: 0
            // },
            // about_banner: {
            //     active: ''
            // }
        }


    }


    componentDidMount() {

    }



    switchTab = (tabname) => {
       
        router.push('/digital_assets?tab=' + tabname);

    }

    game_trading = () => {
        return <div >

            <Carousel imgData={["carousel/digital_assets_game.png", "carousel/digital_assets_scenes.png", "carousel/digital_assets_solu.png", "carousel/digital_assets_youshi.png"]} />

        </div>
    }
    business_credit = () => {
        return <div >

            <Carousel imgData={["carousel/business_credit.png", "carousel/business_credit_scenes.png", "carousel/business_credit_solu01.png", "carousel/business_credit_solu02.png","carousel/business_credit_youshi.png"]} />

        </div>
    }
    network_mutual_aid = () => {
        return <div >

        <Carousel imgData={["carousel/network_mutual_aid.png", "carousel/network_mutual_aid_scenes.png", "carousel/network_mutual_aid_solu.png", "carousel/network_mutual_aid_youshi.png"]} />

    </div>
    }
    insurance_card = () =>{
        return <div >

        <Carousel imgData={["carousel/insurance_card.png", "carousel/insurance_card_scenes.png", "carousel/insurance_card_solu01.png", "carousel/insurance_card_solu02.png","carousel/insurance_card_youshi.png"]} />

    </div>
    }
 
    contentElement = () => {
        const query = this.props.location.query

        switch (query.tab) {

            case 'game_trading':

                return this.game_trading();
                break;
            case 'business_credit':

                return this.business_credit();
                break;
            case 'network_mutual_aid':

                return this.network_mutual_aid();
                break;

            case 'insurance_card':

                return this.insurance_card();
                break;

        }

    }



    render() {

        if (!this.props.location.query.tab) {
            router.push('?tab=game_trading')
        }
        return (
            <>
                <div className={Styles.digital_assets}>
                    <div className={Styles.banner}>

                    </div>
                    <img className={Styles.solution} src={require("./../../public/images/digital_assets_solution.png")} />
                    <img className={Styles.three} src={require("./../../public/images/digital_assets_three.png")} />
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