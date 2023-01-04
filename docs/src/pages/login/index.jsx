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

  return (
    <div>
      <Header />
      <div className='form-container'>
        <form style={{ color: colors.darkBlue }}>
          <div>Đăng nhập</div>
          <div className='login'>
            <label>Tên đăng nhập / Email</label>
            <input type='email' />
            <label>Mật khẩu</label>
            <div>
              <input type='password' value={password}
                onChange={(e) => handlePasswordChange(e)}
              />
              <i><FontAwesomeIcon icon={faEye} /></i>
            </div>
            <NavLink style={{ color: colors.darkBlue, fontWeight: 'bold' }} >Quên mật khẩu</NavLink>
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