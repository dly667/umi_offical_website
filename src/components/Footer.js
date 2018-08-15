import Styles from './Footer.less'
export default (props) => {
    return (
        <>
            <div className={Styles.footer}>
                <div className={Styles.content}>
                    <div className={Styles.image_box}>
                        <img src={require("./../../public/images/logo.png")} />
                        <span>焕链</span>
                    </div>
                    <div className={Styles.book}>
                        <div className={Styles.item}>
                            <p>产品服务</p>
                            <div className={Styles.book_hr}></div>
                            <ul>
                                <li>区块链浏览器</li>
                                <li>健康监控</li>
                                <li>数据分析</li>
                                <li>电子合同</li>
                            </ul>
                        </div>
                        <div  className={Styles.item}>
                            <p>应用场景</p>
                            <div className={Styles.book_hr}></div>
                            <ul>
                                <li>数字资产</li>
                                <li>供应链金融</li>
                                <li>股权债权</li>
                                <li>供应链溯源</li>
                                <li>公示公证</li>
                            </ul>
                        </div>
                        <div  className={Styles.item}>
                            <p>关于焕链</p>
                            <div className={Styles.book_hr}></div>
                            <ul>
                                <li>关于我们</li>
                                <li>发展历程</li>
                                <li>加入我们</li>
                                <li>联系我们</li>
                                <li>企业资讯</li>
                            </ul>
                        </div>
                        <div  className={Styles.item}>
                            <p>联系我们</p>
                            <div className={Styles.book_hr}></div>
                            <ul>
                                <li>商务合作</li>
                                <li>bd@huanlian.com</li>
                                <li>技术支持</li>
                                <li>support@huanlian.com</li>
                            </ul>
                        </div>
                        <div className={Styles.qr}>
                           <img src={require("./../../public/images/QR_code.png")}/>
                           <p>微信公众号：焕链区块链</p>
                        </div>
                    </div>
                    <div className={Styles.hr}></div>


                    <p className={Styles.copyright}>Copyright © 2016 浙江焕链科技有限公司、浙江焕购科技有限公司 | 浙ICP备18028852号-1</p>
                    
                </div>
            </div>
        </>
    )
}
