import React from 'react'
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
            }
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
         let banner_img
         if (windowWidth <1000){
            imgList.push(<li className={"carousel-item"}><img onLoad={this.handleImageLoaded.bind(this)} src={require("./../../public/m_images/m_index_01.png")} /></li>);
            imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/m_images/m_index_02.png")} /></li>);
            imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/m_images/m_index_03.png")} /></li>);
            imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/m_images/m_index_04.png")} /></li>);
         }else{
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
                <div style={{ height: this.state.imageInfo.height ,position: "relative"}}>
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
                            <li className={Styles.active}>
                                <img src={require("./../../public/images/wallet.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>数字资产</p>
                                <p className={Styles.english}>Digital assets</p>
                                <p className={Styles.detail}>焕链区块链已应用于商业积分、电子券、预付卡、 游戏装备、保险卡单、证券化资产等场景。</p>
                                <span >查看更多</span>


                            </li>
                            <li >
                                <img src={require("./../../public/images/transaction.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>供应链金融</p>
                                <p className={Styles.english}>Supply chain finance</p>
                            </li>
                            <li >
                                <img src={require("./../../public/images/discount.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>股权债权</p>
                                <p className={Styles.english}>Equity claims</p>
                            </li>
                            <li >
                                <img src={require("./../../public/images/cloud-computing.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>供应链溯源</p>
                                <p className={Styles.english}>Supply chain traceability</p>
                            </li>
                            <li >
                                <img src={require("./../../public/images/icon_01.png")} />
                                <div className={Styles.hr}></div>
                                <p className={Styles.big_font}>公示公证</p>
                                <p className={Styles.english}>The public notary</p>
                            </li>

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