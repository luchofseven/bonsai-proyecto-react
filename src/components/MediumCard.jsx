export default function MediumCard ({ title, description, info }) {
  return (
    <article className='medium-card'>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <h2>{info}</h2>
    </article>
  )
}
