import Footer from '../../components/footer';
import Header from '../../components/header';
import Slider from '../../components/slide';
import ProductFrame from '../../components/product/productFrame';
import colors from '../../components/color'

const Home = () => {

    return (
        <div>
            <Header title="Home"/>
            <div>SẢN PHẨM NỔI BẬT</div>
            <Slider></Slider>
            <div style={{backgroundColor: `${colors.lightGray}`, margin: '0px'}}>
                <ProductFrame borderMode={true} pathTo="/products/"/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;