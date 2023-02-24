import MediumCard from './MediumCard'

export default function Medium () {
  return (
    <section className='container-medium'>
      <h2>Take it to the <br />
        next level with add-ons
      </h2>
      <aside>
        <MediumCard title='Collaborators' description='Invite other users to specific projects for limited access and functionality.' info='Free' />
        <MediumCard
          title='Partners' description='Invite other users for full account access and company management.' info='$9'
        />
        <MediumCard title='Tax Assistant' description='Track expenses, identify write-offs, and estimate quarterly taxes easily.' info='$10' />
      </aside>
    </section>
  )
}
