import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductFrame from "../../components/product/productFrame";

const Products = () => {
    return (
        <div>
            <Header title="Products"/>
            <ProductFrame filterMode={true}/>
            <Footer />
        </div>
    )
}

export default Products;