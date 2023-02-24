import { useState } from 'react'
import Plans from './Plans'

export default function Hero () {
  const [planSelect, setPlanSelect] = useState(false)

  const handleClick = (e) => {
    setPlanSelect(!planSelect)
  }

  return (
    <>
      <section className='container-hero'>
        <h1>Pick the best plan for <br />
          your business
        </h1>
        <div className='hero-plans'>
          <button onClick={handleClick} className={planSelect === true ? 'btn-monthly btn-active' : 'btn-monthly'}>Monthly</button>
          <button onClick={handleClick} className={planSelect === false ? 'btn-yearly btn-active' : 'btn-yearly'}>Yearly</button>
        </div>
      </section>
      <Plans planToView={planSelect} />
    </>
  )
}
