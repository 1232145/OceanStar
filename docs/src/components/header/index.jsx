import NavBar from '../navigator'
import HeaderTitle from './headerTitle'
import './index.css'

const Header = ({ image, title, style }) => {
    return (
        <div>
            <div className='header-container'>
                <NavBar />
            </div>
            <div>
                <HeaderTitle
                    {
                    ...{
                        image,
                        title,
                        style
                    }
                    }
                />
            </div>
        </div>
    )
}

export default Header