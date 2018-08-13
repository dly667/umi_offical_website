import Styles from './TabMenu.less'
export default (props) => {

   

    const data = props.data
    
    if(data.length == 0){
        return <></>
    }
    const liList = data.map(element => {
       
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
