export default function Plan ({ infoPlan }) {
  const { title, price, description, checks } = infoPlan

  return (
    <article className='plan'>
      <div>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <button className='btn-start-for-free'>Start for free</button>
        <small>{description}</small>
        <ul>
          {checks?.map(check =>
            <span key={check}>
              ✅
              <li>{check}</li>
            </span>
          )}
        </ul>
        <button className='btn-start-for-free'>Start for free</button>
      </div>
    </article>
  )
}
