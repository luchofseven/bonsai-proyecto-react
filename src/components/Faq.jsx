import { useState } from 'react'

export default function Faq ({ title, info }) {
  const [viewInfo, setViewInfo] = useState(false)

  const toggleAccordion = (e) => {
    setViewInfo(!viewInfo)
  }

  return (
    <article className='faq'>
      <button onClick={toggleAccordion}>
        <h3>{title}</h3>
        <img src='https://assets-global.website-files.com/635ac9564cc3682ce1536786/635fbb776c5db6f1eef72e9e_Rectangle%203578.svg' alt='Accordion icon' className={viewInfo ? 'accordion-active' : ' '} />
      </button>
      <p className={viewInfo ? 'is-active' : ''}>{info}</p>
    </article>
  )
}
