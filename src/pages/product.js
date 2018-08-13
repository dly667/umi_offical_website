import React from 'react'
import Styles from './product.less'
export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 1,
            imgLen: 2
        }
    }

    render() {


        return (
            <>
                <div className={Styles.product}>
                    <div className={Styles.banner}><img src={require("./../../public/images/product_server_banner.png")} /></div>
                    <div className={Styles.ins_box}>
                        <div className={Styles.ins}>
                            <div className={Styles.title}>焕链区块链网络</div>
                            <p> 焕链区块链经过几年的发展，不仅具备多语言的智能合约、可插拔的共识算法、多重隐私保护、跨链操作等基础设施输出能力；在提高交易性能、数据
                                处理能力，丰富开发组件等方面兼具技术性创新优势。既满足行业区块链网络的诸多商业诉求（身份、数据、隐私、权限、监管等），也能支撑公共
                            区块链网络搭建的大众需求（去中心化、激励机制、物联网价值传递）。</p>
                        </div>

                    </div>
                    <div className={Styles.content}>
                        <img src={require("./../../public/images/product_01.png")} />
                        <img src={require("./../../public/images/product_02.png")} />
                        <img src={require("./../../public/images/product_03.png")} />
                        <img src={require("./../../public/images/product_04.png")} />
                        

                    </div>
                    <img className={Styles.github} src={require("./../../public/images/github.png")} />
                </div>
            </>
        )
    }


}