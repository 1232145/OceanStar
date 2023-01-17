import React, { useState } from 'react';
import Footer from "../../components/footer";
import Header from "../../components/header";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faEnvelope, faClock, faPhone} from '@fortawesome/free-solid-svg-icons'
import colors from '../../components/color'

const Contact = () => {
    const [isHover, setIsHover] = useState(false);
  
    const buttonStyle = isHover ? {
      backgroundColor: colors.darkBlue,
      color: 'white'
    } : {
      backgroundColor: 'white',
      color: colors.darkBlue,
      border: `1px solid ${colors.darkBlue}`
    }

    const handleChangeColor = () => {
        setIsHover(!isHover)
      }
  
    return (
        <div>
            <Header />
            <div className="contact-container">
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.7261295391373!2d105.8761762046261!3d21.04796256759362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a97e2919cef5%3A0x253d5a6802f83e8d!2zMzcgxJAuIE5ndXnhu4VuIFPGoW4sIE5n4buNYyBMw6JtLCBMb25nIEJpw6puLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1673045251877!5m2!1sen!2sus"></iframe>
                </div>
                <div className="address-container">
                    <p className="title">Công ty cổ phần Sao Đại Dương</p>
                    <hr />
                    <table>
                        <tr className="address-row">
                            <td >
                                <FontAwesomeIcon className='icon' icon={faCity} 
                                        style={{color : colors.darkBlue}}/>     
                                <div>
                                    <p className="address-content">Tầng 3, Toà nhà Ngọc Khánh</p>
                                    <p className="address-content">Số 37 Nguyễn Sơn, Long Biên, Hà Nội</p>
                                </div>
                            </td>
                            <td>
                                <FontAwesomeIcon className='icon' icon={faPhone} 
                                        style={{color : colors.darkBlue}}/> 
                                <div>
                                    <p className="address-content">Nguyễn Thị Thu Trâm</p>
                                    <p className="address-content">(+84) 915 329797</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="address-row">
                            <td>
                                <FontAwesomeIcon className='icon' icon={faEnvelope} 
                                            style={{color : colors.darkBlue}}/>
                                <p className="address-content">liemnq@oceanstarndt.com.vn</p>
                            </td>
                            <td>
                            <FontAwesomeIcon className='icon' icon={faClock} 
                                        style={{color : colors.darkBlue}}/>
                                <p className="address-content"> Thứ 2 - Thứ 7: 8h00 - 17h30 </p>
                            </td>
                        </tr>
                    </table>
                </div>
                <p className="title">Liên hệ với chúng tôi</p>
                <hr />
                <div className='form-container'>
                    <form style={{ color: colors.darkBlue }}>
                    <div className='login'>
                        <label>Họ và Tên *</label>
                            <input  type='text'/>
                        <label>Số điện thoại *</label>
                            <div>
                                <input  type='text'/>
                            </div>
                        <label>Email *</label>
                            <div>
                                <input  type='email'/>
                            </div>
                        <label>Lời nhắn *</label>
                            <div >
                                <textarea type='text' />
                            </div>
                        <div className='submit-button'>
                            <button className='submit-button-button' style={buttonStyle}
                                onMouseEnter={handleChangeColor}
                                onMouseLeave={handleChangeColor}>
                                    Gửi form
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
