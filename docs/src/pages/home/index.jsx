import Footer from '../../components/footer';
import Header from '../../components/header';
import ProductFrame from '../../components/product/productFrame';
import colors from '../../components/color'

const Home = () => {

    return (
        <div>
            <Header title="Home" />
            <div style={{backgroundColor: `${colors.lightGray}`, margin: '0px'}}>
                <ProductFrame borderMode={true} />
            </div>
            <Footer />
        </div>
    )
}

export default Home;