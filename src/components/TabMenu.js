import Styles from './TabMenu.less'
export default (props) => {
    const data = [
        {key:0,tabName:"关于我们"},
        {key:1,tabName:"发展历程"},
        {key:2,tabName:"加入我们"},
        {key:3,tabName:"联系我们"},
        {key:4,tabName:"企业资讯"}
   
    ]
    const liList = data.map(element => {
        if (element.key == props.activeTab) {
            return <li key={element.key} dataindex={element.key} className={Styles.active}onClick={props.switchTab.bind(this,element.key)}><a href="javascript:;">{element.tabName}</a></li>
        }else{
            return <li key={element.key} dataindex={element.key}onClick={props.switchTab.bind(this,element.key)}><a href="javascript:;">{element.tabName}</a></li>
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
