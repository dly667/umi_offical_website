import Styles from './TabMenu.less'
export default (props) => {
    const data = [
        "关于我们",
        "发展历程",
        "加入我们",
        "联系我们",
        "企业资讯"
    ]
    const liList = data.map(element => {
        return <li onClick={() => { console.log(1) }}><a href="javascript:;">{element}</a></li>
    });
    return (
        <>
            <ul className={Styles.tab_menu}>
                {liList}
            </ul>

        </>
    )
}
