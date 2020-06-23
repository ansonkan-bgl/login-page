import React from "react"
import { Global, css } from '@emotion/core'
// import { graphql, StaticQuery } from 'gatsby'
// import styled from "@emotion/styled"

import LoginForm from "../component/loginForm"
// import BackgroundImage from 'gatsby-background-image'
import bg from "../data/bitmap@3x-min.jpg"

const left = css`
  flex-grow: 1;
  max-width: 520px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  background-color: #222133;

  @media (max-width: 1040px) {
    max-width: none;
    width: 100%;
  }
`

// const BackgroundSection = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         desktop: file(relativePath: { eq: "bg.jpg" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       const imageData = data.desktop.childImageSharp.fluid
//       return (
//         <BackgroundImage
//           Tag="section"
//           className={className}
//           fluid={imageData}
//           backgroundColor={`#040e18`}
//         >
//         </BackgroundImage>
//       )
//     }}
//   />
// )

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-attachment: fixed;
//   background-position: bottom right;
//   background-repeat: no-repeat;
//   background-size: cover;
// `

export default function Home() {
  return (
    <div css={css`
      display: flex;
      overflow: scroll;
      min-height: 100vh;
    `}>
      <Global styles={css`
        body {
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
        }

        html {
          box-sizing: border-box;
        }

        *, *:before, *:after {
          box-sizing: inherit;
        }
      `} />
      <div css={left}>
        <LoginForm />
      </div>
      <div css={css`
        flex-grow: 1;
        background-image: url(${bg});
        // background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}>
        {/* <StyledBackgroundSection /> */}
      </div>
    </div>
  )
}
