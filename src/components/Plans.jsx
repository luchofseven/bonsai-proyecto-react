import { useEffect, useState } from 'react'
import Plan from './Plan'
import mockPlans from '../mocks_plans/plans.json'

export default function Plans ({ planToView }) {
  const [plan, setPlan] = useState(mockPlans.yearly)

  useEffect(() => {
    if (planToView) {
      setPlan(mockPlans.monthly)
    } else {
      setPlan(mockPlans.yearly)
    }
  }, [planToView])

  return (
    <section className='container-plans'>
      {plan.length > 0
        ? plan.map(el => <Plan key={el.title} infoPlan={el} />)
        : ''}
    </section>
  )
}
