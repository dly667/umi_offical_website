import React from 'react'
import Navbar from './Navbar'
import Styles from './Header.less'


export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageStatus: '',
            imageInfo: {
                height: ''
            }
        }
    }

    componentDidMount() {
        console.log(window.jquery);
        if (window.jquery) {
            const jquery = window.jquery;

            // console.log( jquery(this.carou2).FtCarousel);
            jquery(this.carou2).FtCarousel({
                index: 0,
                auto: false,


            });

        }

    }
    refCb = (element) => {
        console.log(element.height)
    }
    handleImageLoaded = (e) => {
        this.setState({ imageInfo: { height: document.getElementById("bg_image").height } });
        // this.setState({ height: 'loaded' });

        // if(window.jquery){
        //     const jquery=window.jquery;
        //  jquery(this.carou2).FtCarousel({
        //         index: 1,
        //         auto: false
        //     })
        // jquery("#carousel_1").FtCarousel();

        // jquery(this.carou2).FtCarousel({
        //     index: 1,
        //     auto: false
        // });

        // jquery("#carousel_3").FtCarousel({
        //     index: 0,
        //     auto: true,
        //     time: 3000,
        //     indicators: false,
        //     buttons: true
        // });
        // }

    }
    render() {
        // console.log(document.getElementById("bg_image").style.height)
        const { pathname } = this.props.location
        let classname
        let imgList = new Array()
        switch (pathname) {
            case '/':

                imgList.push(<li className={"carousel-item"}><img onLoad={this.handleImageLoaded.bind(this)} src={require("./../../public/images/index_01.png")} /></li>);
                imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/images/index_02.png")} /></li>);
                // imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/images/index_03.png")} /></li>);
                // imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/images/index_04.png")} /></li>);
                // imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/images/index_04.png")} /></li>);
                // imgList.push(<li className={"carousel-item"}><img id="bg_image" src={require("./../../public/images/index_04.png")} /></li>);
                break;
            case '/product':
                classname = 'header_product'; break;
            case '/application':
                classname = 'header_application'; break;
            case '/about':
                imgList.push(<img onLoad={this.handleImageLoaded.bind(this)} id="bg_image" src={require("./../../public/images/about.png")} />);
                classname = "header_about"; break;
        }
     
        return (

            <>
                <div className={Styles[classname]} style={{ height: this.state.imageInfo.height ,position: "relative"}}>
                    <div className={Styles.content}>
                        <div className={Styles.header}>
                            <Navbar location={pathname}></Navbar>
                            <div className={Styles.slogan}></div>
                        </div>
                    </div>
                    <div className={"ft-carousel"} ref={carou2 => this.carou2 = carou2}>
                        <ul className="carousel-inner">
                            {imgList}
                        </ul>
                    </div>

                </div>
            </>
        )
    }

}
