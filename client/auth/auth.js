
import auth0 from 'auth0-js';
import history from './history';

export default class Auth {
    constructor() {
       this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    auth0 = new auth0.WebAuth({
        domain: 'churchs.auth0.com',
        clientID: 'pAuihkOWCjld0TjE927fZmFBJHY6S24P',
        redirectUri: window.location.href + 'callback_auth',
        audience: 'https://churchs.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        console.log("Calling login")
        this.auth0.authorize();
    } 

  

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/');
            } else if (err) {
                history.replace('/');
                console.log(err);
            }
        });
    }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/membros');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/membros');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log("Expires At", expiresAt)
    console.log("GetTime", new Date().getTime())
    console.log(new Date().getTime() < expiresAt)
    return new Date().getTime() < expiresAt;
  }
}
