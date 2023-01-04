import Footer from "../../components/footer"
import Header from "../../components/header"
import './index.css'

const About = () => {
    return (
        <div>
            <Header />
                <div className="about-image"> GIỚI THIỆU </div>
                <div>
                    <p>Giới thiệu chung</p>
                    <p>Công ty cổ phần Sao Đại Dương là nhà cung cấp chuyên nghiệp về các giải pháp, công nghệ, thiết bị hàn 
                        cắt, và các thiết bị, vật tư kiểm tra không phá hủy tại thị trường Việt Nam. Có đội ngũ chuyên gia, kỹ thuật 
                        viên nhiệt huyết, giàu kinh nghiệm . Chúng tôi cam kết sẽ cung cấp cho Quý khách hàng dịch vụ tốt nhất, 
                        giả cả cạnh tranh nhất.</p>
                </div>
            <Footer />
        </div>
    )
}

export default About