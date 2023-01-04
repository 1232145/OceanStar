import React, { useState } from 'react'
import './index.css'
import Footer from '../../components/footer'
import Header from '../../components/header'
import colors from '../../components/color'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function Login() {
  const [isHover, setIsHover] = useState(false);
  const [isPasswordVisble, setIsPasswordVisible] = useState(false)
  const [password, setPassword] = useState("");

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

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  }

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisble)
  }

  //97.3, 34.7

  return (
    <div>
      <Header />
      <div className='form-container'>
        <form style={{ color: colors.darkBlue }}>
          <div className='header-login'>
            <div className='header'>Đăng nhập</div>
            <hr style={{ backgroundColor: colors.orange }}></hr>
          </div>
          <div className='login'>
            <label>Tên đăng nhập / Email</label>
            <input type='email' />
            <label className='password-label'>Mật khẩu</label>
            <div>
              <input type={isPasswordVisble ? 'text' : 'password'} value={password}
                onChange={(e) => handlePasswordChange(e)}
              />
              <i onClick={handlePasswordVisible}><FontAwesomeIcon icon={faEye} /></i>
            </div>
            <div className='forget-password-button'>
              <NavLink style={{ color: colors.darkBlue, fontWeight: 'bold' }} >Quên mật khẩu</NavLink>
            </div>
            <div className='submit-button'>
              <button style={buttonStyle}
                onMouseEnter={handleChangeColor}
                onMouseLeave={handleChangeColor}
              >Đăng nhập
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login