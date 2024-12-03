import ProfilePic from '../images/profile.jpg'
import EmailIcon from '../images/mail_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'



export function Info() {
  return(
     <nav className='info' >
        <img className='profilepic' src={ProfilePic} alt='ProfilePic' />
        
        <h2 className='myname' >Davie Halogen</h2>
        
        <h3 className='myjob' >FullStack Developer</h3>
        
        <h4 className='mylink' >Halogen.com</h4>
        
        <nav className='buttoncontainer' >
        
          <a href='mailto:daviehalogen@gmail.com' >
            <button>
              <img className='emailicon' src={EmailIcon} alt='EmailIcon'/>
              <span>Email</span>
            </button>
          </a>       
        </nav>
     </nav>
    )
}