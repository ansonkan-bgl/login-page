import React, { useState } from "react"
import { css } from "@emotion/core"
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';

import logo from "../data/logo.svg"
import gLogo from "../data/g_logo.svg"
import twitterLogo from "../data/Twitter_Logo_Blue.svg"
import fLogo from "../data/f_logo_RGB-Blue_58.png"

const mainWrapper = css`
  width: 100%;
  height: 100%;
  max-width: 500px;
  padding: 40px 70px 20px 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: "Roboto", sans-serif;
`

const OrangeTextField = withStyles({
  root: {
    marginBottom: 15,
    '& input': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: green[400],
    },
    '& .MuiFormLabel-root': {
      color: 'rgba(255,255,255,.32)',
    },
    '& .MuiOutlinedInput-root': {

      '& fieldset': {
        transition: 'all .3s ease',
        borderColor: 'rgba(255,255,255,.32)',
      },
      '&:hover fieldset': {
        borderColor: green[400],
      },
      '&.Mui-focused fieldset': {
        borderColor: green[400],
      },
    },
  },
})(TextField)

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />)

const SocialButton = withStyles(() => ({
  root: {
    color: 'rgba(255,255,255,.60)',
    backgroundColor: 'rgba(255,255,255,.12)',
    height: 40,
    borderRadius: 20,
    transition: 'all .3s ease',

    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(255,255,255,.32)',
    },
  },
}))(Button);

const SignInButton = withStyles(() => ({
  root: {
    color: '#fff',
    backgroundColor: green[500],
    height: 50,
    borderRadius: 25,
    marginBottom: '10vh',

    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const LoginForm = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div css={[mainWrapper]}>
      <img src={logo} alt="cloudbet logo" css={css`width: 150px; margin-bottom: 10vh;`} />
      <h1 css={css`
        margin-bottom: 40px;
        font-weight: 500;
      `}>Sign in</h1>
      <div css={css`
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 70%;
        max-width: 300px;
      `}>
        {
          [
            [fLogo, 'Facebook'],
            [gLogo, 'Google'],
            [twitterLogo, 'Twitter']
          ].map(([logo, text]) => (
            <SocialButton>
              <img src={logo} css={css`width: 30px;`} />
              {/* {text} */}
            </SocialButton>
          ))
        }
      </div>
      <div css={css`
        height: 1px;
        background-color: rgba(255,255,255,.32);
        margin: 30px 0;
      `}></div>
      <FormControl>
        <OrangeTextField id="outlined-basic" label="Username/Email" variant="outlined" />
        <OrangeTextField id="outlined-basic" label="Password" variant="outlined" />
        <Link href="#" target="_blank" rel="noopener" css={css`
          color: rgba(255,255,255,.32) !important;
          margin-bottom: 40px !important;
        `}>Forgot password?</Link>
        <FormControlLabel css={css`
          color: rgba(255,255,255,.32);
          transition: all .3s ease;
          &:hover {
            color: #fff;
          }
        `}
          control={<GreenCheckbox checked={checked} onChange={event => setChecked(event.target.checked)} name="checked" />}
          label="Remember me"
        />
        <SignInButton onClick={(() => alert("Signed in!"))}>Sign in</SignInButton>
      </FormControl>
      <div css={css`
        margin-top: auto;
        text-align: center;
        color: rgba(255,255,255,.6);
      `}>
        <span>New user? </span>
        <Link href="#" target="_blank" rel="noopener" css={css`
          color: #f8932f !important;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.14;
          letter-spacing: 1.25px;
        `}>JOIN NOW</Link>
      </div>
    </div>
  )
}

export default LoginForm