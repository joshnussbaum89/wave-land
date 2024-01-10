import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const email = data.get('email')
  const API_KEY = import.meta.env.MAILCHIMP_API_KEY
  const API_SERVER = import.meta.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = import.meta.env.MAILCHIMP_AUDIENCE_ID

  // If for whatever reason HTML form validation fails, return an error
  if (!email) {
    return new Response(
      JSON.stringify({
        error: `Email is required`,
      }),
      { status: 400 }
    )
  }

  // Send a request to Mailchimp to add the user to the list
  const mailchimpData = {
    email_address: email,
    status: 'subscribed',
  }

  const mailchimpResponse = await fetch(
    `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    {
      body: JSON.stringify(mailchimpData),
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  )

  // Something went wrong
  if (mailchimpResponse.status >= 400) {
    return new Response(
      JSON.stringify({
        error: `There was an error subscribing to the newsletter. Shoot me an email at josh@wavelandweb.com and I'll add you to the list.`,
      }),
      { status: 400 }
    )
  }

  // If everything worked, return a success message
  return new Response(
    JSON.stringify({ message: `Email address ${email} was successfully subscribed 🌊` }),
    {
      status: 200,
    }
  )
}
