// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '7k8to062ae'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-po9644o3.us.auth0.com',            // Auth0 domain
  clientId: 'pqdxZ90PLoDNwZdpYzhPc5eQRhT7BsTS',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
