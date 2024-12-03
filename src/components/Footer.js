import Githubicon from '../images/github-mark.svg'
import Xicon from '../images/logo-black.png'
import Whatsappicon from '../images/Digital_Glyph_Green.svg'
import Instagramicon from '../images/Instagram_Glyph_Gradient.svg'
import Facebookicon from '../images/Facebook_Logo_Primary.png'

export function Footer() {
   return(
    <div className='footer' >
      <nav className='footericons' >
          <a href='https://x.com/Davie1566398?t=2H6VUd4lyN6nODd645S7XA&s=09' className='x' >
              <span>X</span>
              <img src={Xicon} alt='' className='xicon' />
          </a>
          
          <a href='https://wa.link/0sdf4x' className='whatsapp' >
              <span>Whatsapp</span>
              <img src={Whatsappicon} alt='' className='whatsappicon' />
          </a>
          
          <a href='https://www.instagram.com/_ha.log.en_/profilecard/?igsh=YWR3N2FyNWR3bTVp' className='instagram' >
              <span>Instagram</span>
              <img src={Instagramicon} alt='' className='instagramicon' />
          </a>
          
          <a href='https://www.facebook.com/profile.php?id=100090607807765' className='facebook' >
              <span>Facebook</span>
              <img src={Facebookicon} alt='' className='facebookicon' />
          </a>
          
          <a href='https://github.com/DavieHalogen' className='github' >
              <span>Github</span>
              <img src={Githubicon} alt='' className='githubicon' />
          </a>
      </nav>
      <h1 className='signature' >&copy; Halogen</h1>
    </div>
   )
}