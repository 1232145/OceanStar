import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import colors from '../color'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container' style={{ backgroundColor: colors.darkBlue }}>
      <div>
        <div className='footer-flex-box'>
          <div className='footer-item'>
            <p style={{ fontSize: '23px' }}>Công ty cổ phần</p>
            <p style={{ fontSize: '30px' }}><strong>Sao Đại Dương</strong></p>
            <div className='info'>
              <FontAwesomeIcon className='icon' icon={faCity} />
              <div>
                <p className='info-text'>Tầng 3, Toà nhà Ngọc Khánh </p>
                <p className='info-text'>Số 37 Nguyễn Sơn, Long Biên, Hà Nội</p>
              </div>
            </div>
            <div className='info'>
              <FontAwesomeIcon className='icon' icon={faSquarePhone} />
              <p className='info-text'> (+84) 24 3634 0698 </p>
            </div>
          </div>
          <div className='footer-item'
            style={{ width: "400px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper, nulla ac condimentum blandit, ex nibh tempor lorem, eget dignissim mauris felis vitae quam.
            Integer tellus elit, placerat vel diam id, tempus tempus ipsum. Maecenas in quam feugiat, rutrum sem ut, congue ex. Nunc at mi sed ligula viverra aliquet.
          </div>
          <div className='footer-item'
            style={{ width: "260px" }}>
            <p><strong>Lối tắt</strong></p>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li><NavLink to='/'>Trang chủ</NavLink></li>
              <li><NavLink to='/about-us'>Giới thiệu</NavLink></li>
              <li><NavLink to='/products'>Sản phẩm</NavLink></li>
              <li><NavLink to='/contact'>Liên hệ</NavLink></li>
            </ul>
          </div>
        </div>
        <p className='tagname'>
          © 2022 Công ty cổ phần Sao Đại Dương
        </p>
      </div>
    </div>
  )
}

export default Footer