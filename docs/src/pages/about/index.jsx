import Footer from "../../components/footer"
import Header from "../../components/header"
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faPeopleGroup, faHandshake, faGlobe } from '@fortawesome/free-solid-svg-icons'
import image1 from '../../components/image/Image 1.png'
import image2 from '../../components/image/Image 2.png'
import image3 from '../../components/image/Image 3.png'
import image4 from '../../components/image/Image 4.png'

const About = () => {
    return (
        <div>
            <Header title='GIỚI THIỆU'/>
            <div className="about-container">
                <div className="about-content-container">
                    <p className="about-content-title">Giới thiệu chung</p>
                    <p className="about-content">Công ty cổ phần Sao Đại Dương là nhà cung cấp chuyên nghiệp về các giải pháp, công nghệ, thiết bị hàn 
                        cắt, và các thiết bị, vật tư kiểm tra không phá hủy tại thị trường Việt Nam. Có đội ngũ chuyên gia, kỹ thuật 
                        viên nhiệt huyết, giàu kinh nghiệm . Chúng tôi cam kết sẽ cung cấp cho Quý khách hàng dịch vụ tốt nhất, 
                        giả cả cạnh tranh nhất.</p>
                </div>
                <div className="statistics-container">
                        <div className="statistics-items">
                            <FontAwesomeIcon className='statistics-icon' icon={faCalendarDays}/>   
                            <p className="number">12</p>  
                            <p>Năm kinh nghiệm</p>
                        </div>
                        <div className="statistics-items">
                            <FontAwesomeIcon className='statistics-icon' icon={faPeopleGroup}/>   
                            <p className="number">100</p>  
                            <p>Khách hàng hài lòng</p>  
                        </div>
                        <div className="statistics-items">
                            <FontAwesomeIcon className='statistics-icon' icon={faHandshake}/>     
                            <p className="number">20</p>  
                            <p>Đối tác toàn quốc</p> 
                        </div>
                        <div className="statistics-items">
                            <FontAwesomeIcon className='statistics-icon' icon={faGlobe}/>
                            <p className="number">5</p>  
                            <p>Đối tác quốc tế</p>      
                        </div>
                </div>
                <p className="about-partners-title">Đối tác</p>
                <hr />
                <div className="about-partners">
                    <div className="about-partner-logo"><img className="about-partner-img" src= {image1} alt="" /></div>
                    <div className="about-partner-logo"><img className="about-partner-img" src= {image2} alt="" /></div>
                    <div className="about-partner-logo"><img className="about-partner-img" src= {image3} alt="" /></div>
                    <div className="about-partner-logo"><img className="about-partner-img" src= {image4} alt="" /></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About