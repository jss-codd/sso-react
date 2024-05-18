

const awsConfig = 
{
  "aws_project_region": "ap-south-",
  "aws_cognito_region": "ap-south-1",
  "aws_user_pools_id": "ap-south-1_JZ2idgUk7",
  "aws_user_pools_web_client_id": "4ii8f367ihi6pn7en294ilc528",
  "oauth": {
    "domain": "https://myappone.auth.ap-south-1.amazoncognito.com",
    scope: ['email', 'profile', 'openid'],
      redirectSignIn: 'http://localhost:3001/sign-up', // Change for each app
      redirectSignOut: 'http://localhost:3001/sign-up', // Change for each app
      responseType: 'code',
  },
  
}
  export default awsConfig;

  // 4ii8f367ihi6pn7en294ilc528