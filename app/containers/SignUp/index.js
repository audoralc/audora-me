/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class SignUp extends React.PureComponent {

constructor(props) {
  super(props);
  this.state = {
    email:'',
    name: '',
    password: '',
    }
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
    console.log(this.state.email);
  }

  handleName = (event) => {
    this.setState({
      name:event.target.value
    })
    console.log(this.state.name);
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
    console.log(this.state.password)
  }

storeUser= () => {
  var data= new FormData();
  data.append("email", this.state.email);
  data.append("name", this.state.name);
  data.append("password", this.state.password);
/*another JS func used to send & recieve, will put API point -an URL- in quotes  ex= fetch("http://audora.me:8000/API/storeArticle")*/
    fetch("http://audora.me:8000/api/storeUser", {
//getting & posting, body is builtin key of fetch
        method: "post",
        body: data,
    })
//now backend needs to respond -> error or naw
// .then runs after fetch goes to backend IS PROMISE
  .then(function(response) {
// convert response back to front lang
return response.json();
})
//now return error or naw
  .then(function(json) {
   if (json.success) {
     console.log(json.success);
   }
   else if (json.error) {
     console.log(json.error);
   }
 })
}

  render() {
      const divStyle= {
        background: '#ffffff',
        height: '100vh',
      }
        const ribbonStyle={
          height:'40vh',
          width: '100%',
          background: '#00BFA5',
        }

        const formContainer={
          display: 'flex',
          flexDirection: 'column',
          margin: '-10vh auto 0 auto',
          width: '50vw',
        }
          const labelRibbon= {
            background:'#1355C5',
            height: '10%',
          }
            const labelStyle={
              padding: '0 .5em',
              margin: 'auto .5em',
              lineHeight: "2em",
              color: "#FAFAFA",
              fontSize: "1.5em",
            }

          const formStyle={
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
            flexShrink: '0',
            padding: "2em",
          }

            const inputStyle= {
              background: 'white',
              margin: '0 auto',
              padding: '1em',
            }
              const textFieldStyles= {
                 errorStyle: {
                   color: '#FFA361',
                 },
                underlineStyle: {
                  borderColor: '#FFA361',
                },
                floatingLabelStyle: {
                  color: '#FFA361',
                },
                floatingLabelFocusStyle: {
                  color: '#1355C5',
                },
              };

            const buttonStyle= {
              margin: '1em auto',
            }

    return (
      <div style={divStyle}>
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>
            <div style={ribbonStyle}> </div>

          <div style={formContainer}>
            <Paper zDepth={2}>
            <form>
                <div style={labelRibbon}>
                  <label style={labelStyle}> Sign Up </label>
                </div>


                  <fieldset style={formStyle}>
                    <TextField type="email" name="email" placeholder="email" style={inputStyle} underlineStyle={textFieldStyles.underlineStyle} onChange={this.handleEmail}/>

                    <TextField type="text" name="username" placeholder="username" style={inputStyle} underlineStyle={textFieldStyles.underlineStyle} onChange={this.handleName}/>

                    <TextField type="password" name="password" placeholder="password" style={inputStyle} underlineStyle={textFieldStyles.underlineStyle} onChange={this.handlePassword }/>

                    <FlatButton label="Submit" style={buttonStyle} primary={true} hoverColor="rgba(255, 163, 97, .5)">  </FlatButton>
                </fieldset>
            </form>
          </Paper>
        </div>

      </div>
    );
  }
}
