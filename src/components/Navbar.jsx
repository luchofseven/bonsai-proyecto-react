import { useEffect, useState } from 'react'

export default function Navbar () {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = (e) => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const clickOnMenu = (e) => {
      if (e.target.matches('.navbar ul a') || (e.target.matches('.navbar ul button'))) {
        setShowMenu(false)
      }
    }

    document.querySelector('.navbar').addEventListener('click', clickOnMenu)

    return document.removeEventListener('click', clickOnMenu)
  }, [])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <a href='#home'>
            <img src='https://assets-global.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg' alt='Bonsai logo' />
          </a>
          <button onClick={handleClick} className='navbar-touch-icon'>
            <img src='https://assets-global.website-files.com/635ac9564cc3682ce1536786/6363a910018ea661db9d2000_Group%2012489.svg' alt='Touch icon logo' />
          </button>
        </div>
        <ul className={showMenu ? 'is-active' : ''}>
          <a href='#product'>Product</a>
          <a href='#industries'>Industries</a>
          <a href='#templates'>Templates</a>
          <a href='#pricing'>Pricing</a>
          <a href='#reviews'>Reviews</a>
          <div className='navbar-buttons-login'>
            <button className='login'>Login</button>
            <button className='btn-start-for-free'>Start free</button>
          </div>
        </ul>
      </nav>
      <div className='navbar-after'>
        <a href='#small-businesses'>Small businesses</a>
        <a href='#agencies'>Agencies</a>
        <a href='#freelancers'>Freelancers</a>
      </div>
    </>
  )
}
