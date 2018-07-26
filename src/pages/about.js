import React from 'react'
import Styles from './about.less'
import TabMenu from './../components/TabMenu'
import { Map } from 'react-amap';
import Amap from './../components/amap';
const map_data = [
    { key: '0', ad: '杭州总部', lng: { center: [120.15507, 30.274084] } },
    { key: '1', ad: '北京', lng: { center: [116.407526, 39.90403] } },
    { key: '2', ad: '上海', lng: { center: [121.473701, 31.230416] } },
    { key: '3', ad: '深圳', lng: { center: [114.057868, 22.543099] } },
]
export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            map: {
                active: 0
            },
            tab: {
                active: 4
            }
        }
    }
    componentDidMount() {
        // this.creatMap()
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
    switchTab = (dataindex) => {

        this.setState({
            map: {
                active: 0
            },
            tab: {
                active: dataindex
            }
        })

    }
    contact = () => {

        const map_list = map_data.map((item, index) => {
            if (index == this.state.map.active) {
                return <li key={item.key} dataindex={item.key} className={Styles.active} >{item.ad}</li>
            } else {

                return <li key={item.key} dataindex={item.key} onMouseOver={this.switchMap.bind(this, index)}>{item.ad}</li>
            }

        })


        return (
            <div className={Styles.contact_box}>
                <ul>

                    {map_list}
                </ul>
                <Amap lng={map_data[this.state.map.active].lng} title={map_data[this.state.map.active].ad} />
            </div>
        )

    }
    about_us = () => {
        return <div className={Styles.about_us_box}>
            <div className={Styles.ins}>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江焕购科技有限公司是一家提供高品质网络品牌产品推广服务的精英团队，专注于互联网领域解决方案的发展与创新，
                            我们已为全国多家知名企业提供了相应的技术解决方案，并树立了良好的口碑，积累了丰富的经验和成功案例，
                            我们来自于国内知名的4A广告公司，软件开发公司，网络游戏研发公司，网络品牌营销公司，我们凭借不同的专业技能，
                            及良好的售后服务质量，亦赢得客户的广泛认可，持续帮助企业实现卓越的业务成果。
                            移动互联网是当下互联网发展的大趋势，创新网站建设和手机应用成为众多企业关注的热点。
                </p>
            </div>
            <img src={require("./../../public/images/about_us_01.png")} />
            <img src={require("./../../public/images/about_us_02.png")} />
            <img src={require("./../../public/images/about_us_03.png")} />
            <div className={Styles.company_culture}>
                <img src={require("./../../public/images/about_us_04.png")} />

            </div>


        </div>
    }
    development_path = () => {
        return <div className={Styles.about_dev_path}>
            <img src={require("./../../public/images/about_dev_path.png")} />
        </div>
    }
    join_us = () => {
        return <div className={Styles.about_join_us}>

            <ul className={Styles.job_list}>

                <li>
                    <div><p>C++高级工程师（北京）</p><p><span>月薪:</span> <span>10-20k</span></p></div>
                    <p>一天前发布</p>
                </li>
                <li>
                    <div><p>C++高级工程师（北京）</p><p><span>月薪:</span> <span>10-20k</span></p></div>
                    <p>一天前发布</p>
                </li>
                <li>
                    <div><p>C++高级工程师（北京）</p><p><span>月薪:</span> <span>10-20k</span></p></div>
                    <p>一天前发布</p>
                </li>
                <li>
                    <div><p>C++高级工程师（北京）</p><p><span>月薪:</span> <span>10-20k</span></p></div>
                    <p>一天前发布</p>
                </li>
                <li>
                    <div><p>C++高级工程师（北京）</p><p><span>月薪:</span> <span>10-20k</span></p></div>
                    <p>一天前发布</p>
                </li>
                <li>
                    <div><p>C++高级工程师（北京）</p><p><span>月薪:</span> <span>10-20k</span></p></div>
                    <p>一天前发布</p>
                </li>
                <li>
                    <div><p>C++高级工程师（北京）</p><p><span>月薪:</span> <span>10-20k</span></p></div>
                    <p>一天前发布</p>
                </li>
                <li>
                    <div><p>C++高级工程师（北京）</p><p><span>月薪:</span> <span>10-20k</span></p></div>
                    <p>一天前发布</p>
                </li>

            </ul>



            <div className={Styles.job_info}>
                <ul className={Styles.job_addr}>
                    <li>地点：北京市</li>
                    <li>工作经验：不限</li>
                    <li>学历：不限</li>
                    <li>全职</li>
                </ul>
                <p>英语流利，具备传播、新闻相关专业能力。</p>
                <div className={Styles.claim}>
                    <h3>岗位职责</h3>
                    <ul>

                        <li> 1、策划市场部推广活动，负责线上推广、线下活动的执行；</li>
                        <li>2、能够对行业进行评估与监测，整合维护公司推广渠道资源，收集反馈推广效果数据；</li>
                        <li>3、负责运营网站、关键词SEO、社区等日常推广维护工作；</li>
                        <li>4、完成上级下达的其它工作任务。</li>


                    </ul>
                </div>
                <div className={Styles.claim}>
                    <h3>任职要求</h3>
                    <ul>
                        <li>1、大专以上学历，一年以上工作经验，英语、传播、新闻相关专业者优先；</li>
                        <li>2、有相关互联网行业推广工作经验者优先，有活动策划执行经营者优先；</li>
                        <li>3、具备较强的市场洞察力和敏锐度，以及良好的沟通能力；</li>
                        <li>4、较强的团队协作力及良好的服务意识，勤奋开朗、积极主动、乐于接受挑战。</li>


                    </ul>
                </div>
                <p>如果您对我们的职位感兴趣，请将您的简历发送至 Hr@bubi.cn， 并在邮件标题注明「应聘的职位」。布比团队，期待靠谱的你加入我们！</p>
            </div>


        </div>
    }
    corporate_information = () => {
        return <div className={Styles.about_news}>
            <ul>
                <li >
                    <div>
                        <div className={Styles.title_time}>
                            <h3>一起奋斗新时代 共同创造新可能 中信集团 & 布比区块链</h3>
                            <span>2018-4-20</span>
                        </div>
                        <p>新时代，新可能，这个春天，新时代扑面而来，伟大的征程你我同行，光荣的梦想有你有我，不断创新，不断前行布比区块链，与中信一起创造新可能</p>
                    </div>
                    <img src={require("./../../public/images/about_news_list_01.png")}/>
                </li>
                <li >
                    <div>
                        <div className={Styles.title_time}>
                            <h3>一起奋斗新时代 共同创造新可能 中信集团 & 布比区块链</h3>
                            <span>2018-4-20</span>
                        </div>
                        <p>新时代，新可能，这个春天，新时代扑面而来，伟大的征程你我同行，光荣的梦想有你有我，不断创新，不断前行布比区块链，与中信一起创造新可能</p>
                    </div>
                    <img src={require("./../../public/images/about_news_list_01.png")}/>
                </li>
                <li >
                    <div>
                        <div className={Styles.title_time}>
                            <h3>一起奋斗新时代 共同创造新可能 中信集团 & 布比区块链</h3>
                            <span>2018-4-20</span>
                        </div>
                        <p>新时代，新可能，这个春天，新时代扑面而来，伟大的征程你我同行，光荣的梦想有你有我，不断创新，不断前行布比区块链，与中信一起创造新可能</p>
                    </div>
                    <img src={require("./../../public/images/about_news_list_01.png")}/>
                </li>
                <li >
                    <div>
                        <div className={Styles.title_time}>
                            <h3>一起奋斗新时代 共同创造新可能 中信集团 & 布比区块链</h3>
                            <span>2018-4-20</span>
                        </div>
                        <p>新时代，新可能，这个春天，新时代扑面而来，伟大的征程你我同行，光荣的梦想有你有我，不断创新，不断前行布比区块链，与中信一起创造新可能</p>
                    </div>
                    <img src={require("./../../public/images/about_news_list_01.png")}/>
                </li>
                <li >
                    <div>
                        <div className={Styles.title_time}>
                            <h3>一起奋斗新时代 共同创造新可能 中信集团 & 布比区块链</h3>
                            <span>2018-4-20</span>
                        </div>
                        <p>新时代，新可能，这个春天，新时代扑面而来，伟大的征程你我同行，光荣的梦想有你有我，不断创新，不断前行布比区块链，与中信一起创造新可能</p>
                    </div>
                    <img src={require("./../../public/images/about_news_list_01.png")}/>
                </li>
                <li >
                    <div>
                        <div className={Styles.title_time}>
                            <h3>一起奋斗新时代 共同创造新可能 中信集团 & 布比区块链</h3>
                            <span>2018-4-20</span>
                        </div>
                        <p>新时代，新可能，这个春天，新时代扑面而来，伟大的征程你我同行，光荣的梦想有你有我，不断创新，不断前行布比区块链，与中信一起创造新可能</p>
                    </div>
                    <img src={require("./../../public/images/about_news_list_01.png")}/>
                </li>
            </ul>
        </div>
    }
    contentElement = () => {
        const index = this.state.tab.active

        switch (index) {

            case 0:
                return this.about_us();
                break;
            case 1:
                return this.development_path();
                break;
            case 2:
                return this.join_us();
                break;

            case 3:
                return this.contact();
                break;
            case 4:
                return this.corporate_information();
                break;
        }

    }

    render() {

        return (
            <>
                <div className={Styles.about}>
                    <div className={Styles.banner}>
                        <div className={Styles.banner_contact}>

                        </div>
                    </div>
                    <div className={Styles.content}>
                        <TabMenu switchTab={this.switchTab} activeTab={this.state.tab.active} />
                        {this.contentElement()}
                    </div>
                </div>
            </>
        )
    }


}