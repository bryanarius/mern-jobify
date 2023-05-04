import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'

const Landing = () => {
  return (
  <Wrapper>
    <nav>
        <Logo />
    </nav>
    <div className='container page'>
        <div className='info'>
            <h1>
                job <span>tracking</span> app
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className='btn btn-hero'>
                Login/Register
            </button>
        </div>
        <img src={main} alt='job hunt' className='img main-img'/>
    </div>
  </Wrapper>
  )
}


export default Landing