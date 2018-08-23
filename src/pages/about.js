import React from 'react'
import Link from 'umi/link'
import router from 'umi/router'
import Styles from './about.less'
import TabMenu from './../components/TabMenu'
import { Map } from 'react-amap';
import Amap from './../components/amap';
import article from './../../public/article.json'
const map_data = [
    { key: '0', ad: '杭州总部', lng: { center: [120.15507, 30.274084] } },
    { key: '1', ad: '北京', lng: { center: [116.407526, 39.90403] } },
    { key: '2', ad: '上海', lng: { center: [121.473701, 31.230416] } },
    { key: '3', ad: '深圳', lng: { center: [114.057868, 22.543099] } },
]
const data = [
    {key:0,tabIndex:'about_us',tabName:"关于我们"},
    {key:1,tabIndex:'dev_path',tabName:"发展历程"},
    {key:2,tabIndex:'join_us',tabName:"加入我们"},
    {key:3,tabIndex:'contact_us',tabName:"联系我们"},
    {key:4,tabIndex:'conp_news',tabName:"企业资讯"}

]
export default class About extends React.Component {
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


        router.push('/about?tab=' + tabname);

    }
    contact = () => {

        const map_list = map_data.map((item, index) => {
            if (index == this.state.map.active) {
                return <li key={item.key} dataindex={item.key} className={Styles.active} >{item.ad}</li>
            } else {

                return <li key={item.key} dataindex={item.key} onMouseOver={this.switchMap.bind(this, index)} onClick={this.switchMap.bind(this, index)}>{item.ad}</li>
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
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江焕链科技有限公司是一家提供高品质网络品牌产品推广服务的精英团队，专注于互联网领域解决方案的发展与创新，
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
                <p>如果您对我们的职位感兴趣，请将您的简历发送至 Hr@huanlian.cn， 并在邮件标题注明「应聘的职位」。焕链团队，期待靠谱的你加入我们！</p>
            </div>


        </div>
    }
    corporate_information = () => {
        const list = article.map((item) => {

            const new_query = { ...this.props.location.query, detail_id: item.id }
            const path = {
                pathname: '',
                query: new_query,
            }
            return <Link to={path}><li >
                <div>
                    <div className={Styles.title_time}>
                        <h3>{item.title}</h3>
                        <span>{item.dataTime.date}</span>
                    </div>
                    <p>{item.summary}</p>
                </div>
                <img src={require("./../../public/images/article/" + item.cover)} />
            </li>
            </Link>

        })

        return <div className={Styles.about_news}>
            <ul className={Styles.news_list}>
                {list}

            </ul>
            <div className={Styles.pagination_bar}>
                <p>共20条记录</p>
                <ul className="pagination">
                    <li><a href="#">&laquo;</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&raquo;</a></li>
                </ul>
            </div>

        </div>
    }
    article = (detail_id) => {
        const article_detail = article[detail_id - 1]
        // console.log(article[detail_id-1])

        return <div className={Styles.article_detail}>
            <p className={Styles.back}>
                <Link to="?tab=conp_news">返回企业资讯</Link>

            </p>
            <h3>{article_detail.title}</h3>
            <div className={Styles.date_time_author}>
                <span>{article_detail.dataTime.date}</span>
                <span>{article_detail.dataTime.time}</span>
                <span>发布者：{article_detail.author}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: article_detail.content }} className={Styles.context}></div>
        </div>
    }
    contentElement = () => {
        const query = this.props.location.query

        switch (query.tab) {

            case 'about_us':
                this.about_banner = 'banner_about_join_us'
                return this.about_us();
                break;
            case 'dev_path':
                this.about_banner = 'banner_about_dev_path'
                return this.development_path();
                break;
            case 'join_us':
                this.about_banner = 'banner_about_join_us'
                return this.join_us();
                break;

            case 'contact_us':
                this.about_banner = 'banner_about_contact'
                return this.contact();
                break;
            case 'conp_news':

                this.about_banner = 'banner_about_news'
                if (query.detail_id) {
                    return this.article(query.detail_id)
                } else {
                    return this.corporate_information();

                }
                break;
        }

    }

    get_banner_class_name = () => {
        const query = this.props.location.query

        switch (query.tab) {

            case 'about_us':
                return 'banner_about_about';
                break;
            case 'dev_path':
                return 'banner_about_dev_path';
                break;
            case 'join_us':
                return 'banner_about_join_us'
                break;

            case 'contact_us':
                return 'banner_about_contact'
                break;
            case 'conp_news':

                return 'banner_about_news'
                break;
        }

    }

    render() {

        if (!this.props.location.query.tab) {
            router.push('?tab=about_us')
        }
        return (
            <>
                <div className={Styles.about}>
                    <div className={Styles.banner}>
                        <div className={Styles[this.get_banner_class_name()]} >

                        </div>
                    </div>
                    <div className={Styles.content}>
                        <TabMenu switchTab={this.switchTab} activeTab={this.props.location.query.tab} data={data}/>
                        {this.contentElement()}
                    </div>
                </div>
            </>
        )
    }


}
