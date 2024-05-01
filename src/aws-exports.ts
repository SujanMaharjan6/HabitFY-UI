const awsconfig = {
  Auth: {
    region: '',
    userPoolId: '',
    userPoolWebClientId: '',
    oauth: {
      domain: '',
      scope: [],
      redirectSignIn: 'https://habitfy.vercel.app/home',
      redirectSignOut: 'https://habitfy.vercel.app',
      responseType: 'code'
    }
  }
};

export default awsconfig;
