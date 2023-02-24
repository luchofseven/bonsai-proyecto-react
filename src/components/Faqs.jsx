import Faq from './Faq'

export default function Faqs () {
  return (
    <section className='container-faq'>
      <h2>Frequently asked questions</h2>
      <Faq title='How does the free trial work?' info="When you start your trial with Bonsai you'll receive full, unlimited access to the plan you chose. You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the trial ends. You can cancel at any time during the trial period via your Subscriptions settings." />
      <Faq title='Can I change my plan anytime?' info='Yes, you can upgrade, downgrade or cancel your plan at any time via your Subscription settings.' />
      <Faq title='How do I pause my Bonsai subscription?' info="We totally understand that you not always need your Bonsai subscription to remain active. You can cancel or pause your monthly subscription at any time without penalty via your Subscription settings. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking." />
      <Faq title='What is your refund policy?' info='If you contact us within two weeks of being charged for your subscription, we will be happy to issue a refund for you. Beyond those two weeks, you will need to cancel or modify the subscription from the Subscriptions tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.' />
    </section>
  )
}
