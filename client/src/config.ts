// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '7cj0n6w1lg'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-jc-eiq6r.us.auth0.com',            // Auth0 domain
  clientId: 'HKVZonht3t9bmv391zo8EX1UW9oMQYNZ',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
