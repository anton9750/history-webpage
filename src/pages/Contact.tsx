import { useState } from 'react'
import styled from 'styled-components'
import { Page, Title, Lead, Button, Field } from '../partials/ui'

const Area = styled(Field).attrs({ as: 'textarea', rows: 6 })``
export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <Page>
      <Title>Contact</Title>
      <Lead>Found a mistake or want to contribute an article? Tell us.</Lead>
      {sent ? <p>Thanks, your message is on its way. (Connect a backend or a service like Formspree to really send it.)</p> : (
        <form style={{ maxWidth: 560 }} onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <Field required placeholder="Your name" /><Field required type="email" placeholder="Email" />
          <Area required placeholder="Message" /><Button type="submit">Send message</Button>
        </form>
      )}
    </Page>
  )
}
