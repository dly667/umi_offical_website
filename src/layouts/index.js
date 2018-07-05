
import LayoutStyles from './index.less'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default (props) => {
    console.log(props,111)
    return (
        <>
            <Header location={props.location}/>
            {props.children}
            <Footer />
        </>
    )
}
