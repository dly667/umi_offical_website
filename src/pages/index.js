import React from 'react'
import router from 'umi/router'
import Styles from './index.less'
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 1,
            imgLen: 2,
            imageStatus: '',
            imageInfo: {
                height: ''
            },
            ani_cur: 1,//动画切换之大总管变量
        }
    }
    componentDidMount() {
        if (window.jquery) {
            const jquery = window.jquery;

            // console.log( jquery(this.carou2).FtCarousel);
            jquery(this.carou2).FtCarousel({
                index: 0,
                auto: false,


            });

        }
    }




    refCb = (element) => {
        console.log(element.height)
    }
    handleImageLoaded = (e) => {
        this.setState({ imageInfo: { height: document.getElementById("bg_image").height } });
        // this.setState({ height: 'loaded' });

        // if(window.jquery){
        //     const jquery=window.jquery;
        //  jquery(this.carou2).FtCarousel({
        //         index: 1,
        //         auto: false
        //     })
        // jquery("#carousel_1").FtCarousel();

        // jquery(this.carou2).FtCarousel({
        //     index: 1,
        //     auto: false
        // });

        // jquery("#carousel_3").FtCarousel({
        //     index: 0,
        //     auto: true,
        //     time: 3000,
        //     indicators: false,
        //     buttons: true
        // });
        // }

    }
    switch_action = (ele) => {
        this.setState({ type: ele.target.getAttribute('index') })
    }

    //动画切换之技术优势
    ani_car_func = () => {
        const arrLi = [
            <li className={0 == this.state.ani_cur ? Styles.activate : ''}><img src={require("./../../public/images/index/rocket.png")} /></li>,
            <li className={1 == this.state.ani_cur ? Styles.activate : ''}></li>,//<img src={require("./../../public/images/index/connection.png")} />
            <li className={2 == this.state.ani_cur ? Styles.activate : ''}><img src={require("./../../public/images/index/time-management.png")} /></li>,
            <li className={3 == this.state.ani_cur ? Styles.activate : ''}><img src={require("./../../public/images/index/lock.png")} /></li>,
            <li className={4 == this.state.ani_cur ? Styles.activate : ''}><img src={require("./../../public/images/index/smart-tv.png")} /></li>,
            <li className={5 == this.state.ani_cur ? Styles.activate : ''}><img src={require("./../../public/images/index/bitcoin.png")} /></li>
        ]

        return arrLi.map((item, index, arr) => {

            return item
        })


    }
    render() {

        let imgList = new Array()
        const liArr = Array();
        for (let i = 1; i <= this.state.imgLen; i++) {
            if (i == this.state.type) {
                liArr.push(<a><li className={Styles.active} index={i} key={i} onClick={this.switch_action}></li></a>)
            } else {
                liArr.push(<a><li index={i} key={i} onClick={this.switch_action}></li></a>)
            }
        }
        //自适应手机
        const windowWidth = window.innerWidth;
        console.log(windowWidth, 999)
        let banner_img
        if (windowWidth < 1000) {

            imgList.push(<li className={"carousel-item"}><img onLoad={this.handleImageLoaded.bind(this)} src={require("./../../public/m_images/m_index_01.png")} /></li>);
            imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/m_images/m_index_02.png")} /></li>);
            imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/m_images/m_index_03.png")} /></li>);
            imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/m_images/m_index_04.png")} /></li>);
        } else {
            imgList.push(<li className={"carousel-item"}><img onLoad={this.handleImageLoaded.bind(this)} src={require("./../../public/images/index_01.png")} /></li>);
            imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/images/index_02.png")} /></li>);
            imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/images/index_03.png")} /></li>);
            imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/images/index_04.png")} /></li>);
        }


        return (
            <>
                {/* <div className={Styles[classname]} style={{ height: this.state.imageInfo.height ,position: "relative"}}>
                    <div className={Styles.content}>
                        <div className={Styles.header}>
                            <Navbar location={pathname}></Navbar>
                            <div className={Styles.slogan}></div>
                        </div>
                    </div>
                  

                </div> */}
                <div style={{ height: this.state.imageInfo.height, position: "relative" }}>
                    <div className={"ft-carousel"} ref={carou2 => this.carou2 = carou2}>
                        <ul className="carousel-inner">
                            {imgList}
                        </ul>
                    </div>
                </div>
                <div className={Styles.net}>
                    <img src={require("./../../public/images/img01.png")} />
                </div>

                <div className={Styles.digt_wallet}>

                    <div className={Styles.background_01}>
                        <ul>
                            <li >
                                <img src={require("./../../public/images/wallet.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>数字资产</p>
                                <p className={Styles.english}>Digital assets</p>
                                <p className={Styles.detail}>焕链区块链已应用于商业积分、电子券、预付卡、 游戏装备、保险卡单、证券化资产等场景。</p>
                                <span onClick={()=>router.push('digital_assets')}>查看更多</span>


                            </li>
                            <li >
                                <img src={require("./../../public/images/transaction.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>供应链金融</p>
                                <p className={Styles.english}>Supply chain finance</p>

                                <p className={Styles.detail}>焕链区块链已应用于仓单质押融资、应收账款融资、票据托管贴现、消费金融理财、大宗商品交易等场景。</p>
                                <span onClick={()=>router.push('supply_chain_finance')}>查看更多</span>

                            </li>
                            <li >
                                <img src={require("./../../public/images/discount.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>股权债权</p>
                                <p className={Styles.english}>Equity claims</p>
                                <p className={Styles.detail}>焕链区块链已应用于众筹平台，区域股权交易中心，区域金融资产交易中心，私募管理平台。</p>
                                <span onClick={()=>router.push('equity_bond')}>查看更多</span>
                            </li>
                            <li >
                                <img src={require("./../../public/images/cloud-computing.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>供应链溯源</p>
                                <p className={Styles.english}>Supply chain traceability</p>
                                <p className={Styles.detail}>焕链区块链已应用于食品、药品、消费品、艺术品等领域。</p>
                                <span onClick={()=>router.push('supply_chain_traceability')}>查看更多</span>
                            </li>
                            <li >
                                <img src={require("./../../public/images/icon_01.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>公示公证</p>
                                <p className={Styles.english}>The public notary</p>
                                <p className={Styles.detail}>焕链区块链已应用于慈善公益、养老扶贫、互助保险、网贷众筹等场景。</p>
                                <span  onClick={()=>router.push('notarization')}>查看更多</span>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className={Styles.ani_car}>
                    <p><span>技术优势</span></p>
                    <div className={Styles.content}>
                        <div className={Styles.ins}>
                            <p>海量用户支撑</p>
                            <div></div>
                            <p>高效交易验证和同步</p>
                            <p>支撑千万甚至以及用户规模</p>
                            
                        </div>

                        <ul>
                            {this.ani_car_func()}
                        </ul>
                    </div>
                </div>

                <div className={Styles.more_application_sense}>
                    <div className={Styles.content}>
                        <p><span>查看产品白皮书</span></p>
                        <img src={require("./../../public/images/more_application_sense.png")} />
                    </div>
                </div>
                <div className={Styles.partner}>
                    <img src={require("./../../public/images/partner.png")} />
                    <ul >
                        <div className={Styles.first_part}>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                        </div>
                        <div className={Styles.second_part}>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                        </div>
                        <div className={Styles.third_part}>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                            <li><img src={require("./../../public/images/temp_01.png")} /></li>
                        </div>

                    </ul>
                    <ul className={Styles.switch_btn} >
                        {liArr}
                    </ul>

                </div>
                <div className={Styles.news}>
                    <img src={require("./../../public/images/news.png")} />
                </div>
                <div className={Styles.bottom_word}>
                    <img src={require("./../../public/images/bottom_word.png")} />
                </div>
            </>
        )
    }


}