import React, { useState, useEffect } from 'react'
import './index.css'
import Footer from '../../components/footer'
import Header from '../../components/header'
import colors from '../../components/color'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function Login() {
  const [isHover, setIsHover] = useState(false);
  const [isPasswordVisble, setIsPasswordVisible] = useState(false);
  const [res, setRes] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

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

  const handleUserChange = (e, type) => {
    if (type === "email") {
      setUser({...user, email: e.currentTarget.value})
    }
    if (type === "password") {
      setUser({...user, password: e.currentTarget.value});
    }
  }

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisble)
  }

  const handleSubmit = async (e) => {
    try {
      setUser(0);
      e.preventDefault();
      await axios.post('http://localhost:5000/login', user).then(res => setRes(res.data));
      setUser({
        email: "",
        password: ""
      })
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
   if (res?.token) {
    navigate('/')
   } else if (res?.msg) {
    alert(res.msg)
   }
  }, [res])

  return (
    <div>
      <Header style={{}}/>
      <div className='form-container'>
        <form style={{ color: colors.darkBlue }}>
          <div className='header-login'>
            <div className='header'>Đăng nhập</div>
            <hr style={{ backgroundColor: colors.orange }}></hr>
          </div>
          <div className='login'>
            <label>Tên đăng nhập / Email</label>
            <input type='email'
              value={user.email} 
              onChange={(e) => handleUserChange(e, "email")}/>
            <label className='password-label'>Mật khẩu</label>
            <div>
              <input type={isPasswordVisble ? 'text' : 'password'} value={user.password}
                onChange={(e) => handleUserChange(e, "password")}
              />
              <i onClick={handlePasswordVisible}><FontAwesomeIcon icon={isPasswordVisble ? faEyeSlash : faEye} /></i>
            </div>
            <div className='forget-password-button'>
              <NavLink style={{ color: colors.darkBlue, fontWeight: 'bold' }} >Quên mật khẩu</NavLink>
            </div>
            <div className='submit-button'>
              <button style={buttonStyle}
                onMouseEnter={handleChangeColor}
                onMouseLeave={handleChangeColor}
                onClick={(e) => handleSubmit(e)}
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
