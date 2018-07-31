import Styles from './TabMenu.less'
export default (props) => {
    const data = [
        {key:0,tabIndex:'about_us',tabName:"关于我们"},
        {key:1,tabIndex:'dev_path',tabName:"发展历程"},
        {key:2,tabIndex:'join_us',tabName:"加入我们"},
        {key:3,tabIndex:'contact_us',tabName:"联系我们"},
        {key:4,tabIndex:'conp_news',tabName:"企业资讯"}
   
    ]
    const liList = data.map(element => {
        console.log( props.switchTab)
        if (element.tabIndex == props.activeTab) {
            return <li key={element.key} dataindex={element.key} className={Styles.active}onClick={props.switchTab.bind(this,element.tabIndex)}><a href="javascript:;">{element.tabName}</a></li>
        }else{
            return <li key={element.key} dataindex={element.key}onClick={props.switchTab.bind(this,element.tabIndex)}><a href="javascript:;">{element.tabName}</a></li>
        }
    });
    return (
        <>
            <ul className={Styles.tab_menu}>
                {liList}
            </ul>

        </>
    )
}
