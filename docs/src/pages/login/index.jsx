import React from 'react'
import './index.css'
import Footer from '../../components/footer'
import Header from '../../components/header'

function Login() {
  return (
    <div>
      <Header />
      <div className='form-container'>
        <form>
          <div>Đăng nhập</div>
          <div className='login'>
            <label>Tên đăng nhập</label>
            <input />
            <label>Mật khẩu</label>
            <input />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login