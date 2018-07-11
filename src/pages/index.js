import Styles from './index.less'
export default () => {


    return (
        <>
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
                           
                                <p className={Styles.detail}>焕链区块链已应用于商业积分、电子券、预付卡、
                                游戏装备、保险卡单、证券化资产等场景。</p>
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
        </>
    )

}