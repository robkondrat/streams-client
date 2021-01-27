import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '16424972468-v92d09gkf52kvfok1mfj43vic7u5v1cc.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>I'm signed in</div>
    } else {
      return <div>NOT SIGNED IN</div>;
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth;