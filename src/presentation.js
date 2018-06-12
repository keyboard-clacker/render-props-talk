/* eslint import/no-webpack-loader-syntax:0 */
// Import React
import React from 'react'
import styled from 'react-emotion'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Fit,
  Fill,
  Layout,
  Code,
  S
} from 'spectacle'

import CodeSlide from 'spectacle-code-slide'
import 'prism-themes/themes/prism-atom-dark.css'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: '#5528ff',
    black: '#191919',
    gray: '#1d1f21',
    aqua: '#00c8c8',
    white: '#FFFFFF',
    quarternary: '#00C8C8'
  },
  {
    primary: {
      name: 'Playfair Display',
      googleFont: true
    },
    secondary: 'Helvetica'
  }
)

const VtsHeading = styled(Heading)`
  position: fixed;
  left: 100px;
  bottom: -300px;
  max-width: 800px;
  text-align: left;
`

const VtsSlideHeading = styled(Heading)`
  position: fixed;
  left: 100px;
  top: -300px;
  max-width: 800px;
  text-align: left;
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        transitionDuration={300}
        theme={theme}
        progress="bar"
        contentWidth={1920}
        contentHeight={1080}
        textColor="blue"
        controls={false}
      >
        <Slide bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo">
          <VtsHeading bold size={1} textColor="white">
            Render your way to a better future
          </VtsHeading>
        </Slide>
        <Slide bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo">
          <Heading size={2} textColor="white" textAlign="left">
            Summary
          </Heading>
          <List textColor="white">
            <ListItem>Shared behavior</ListItem>
            <Appear order={2}>
              <ListItem>Mix-ins</ListItem>
            </Appear>
            <Appear order={3}>
              <ListItem>HOC</ListItem>
            </Appear>
            <Appear order={4}>
              <ListItem>Render props</ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="gray"
          color="white"
          code={require('!raw-loader!./sharedBehavior.js.example')}
          ranges={[{ loc: [0, 16] }, { loc: [17, 33] }, { loc: [18, 20] }]}
        />
        <Slide bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo">
          <VtsHeading size={2} textColor="white">
            Mix-ins
          </VtsHeading>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="gray"
          color="white"
          code={require('!raw-loader!./sharedBehavior.js.example')}
          ranges={[{ loc: [18, 20] }]}
        />
        <CodeSlide
          lang="js"
          bgColor="gray"
          color="white"
          code={require('!raw-loader!./mixins.js.example')}
          ranges={[
            { loc: [0, 8] },
            { loc: [9, 21] },
            { loc: [10, 11] },
            { loc: [22, 34] }
          ]}
        />
        <Slide bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo">
          <VtsSlideHeading textColor="white">Mix-ins</VtsSlideHeading>
          <Layout>
            <Fill>
              <List margin="-50px 0 0 150px" textColor="white">
                <Heading
                  padding="10px 0"
                  size={4}
                  textAlign="left"
                  textColor="white"
                >
                  Pros
                </Heading>
                <ListItem>DRYs up components</ListItem>
                <ListItem>Unit tests</ListItem>
              </List>
            </Fill>
            <Fill>
              <List margin="-50px 0 0 100px" textColor="white">
                <Heading
                  padding="10px 0"
                  size={4}
                  textAlign="left"
                  textColor="white"
                >
                  Cons
                </Heading>
                <ListItem>Implicit behavior</ListItem>
                <ListItem>
                  Relies on a specific property <br />
                  being on <Code textColor="white">state</Code>
                </ListItem>
                <ListItem>
                  Accesses <Code textColor="white">this</Code>
                  outside of the <br /> lexical scope of the component
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo">
          <VtsSlideHeading textColor="white">Mix-ins</VtsSlideHeading>
          <Layout>
            <Fill>
              <List
                margin="-50px 0 0 150px"
                textColor="rgba(255, 255, 255, 0.5)"
              >
                <Heading
                  padding="10px 0"
                  size={4}
                  textAlign="left"
                  textColor="rgba(255, 255, 255, 0.5)"
                >
                  Pros
                </Heading>
                <ListItem>DRYs up components</ListItem>
                <ListItem>Unit tests</ListItem>
              </List>
            </Fill>
            <Fill>
              <List
                margin="-50px 0 0 100px"
                textColor="rgba(255, 255, 255, 0.5)"
              >
                <Heading
                  padding="10px 0"
                  size={4}
                  textAlign="left"
                  textColor="rgba(255, 255, 255, 0.5)"
                >
                  Cons
                </Heading>
                <ListItem>Implicit behavior</ListItem>
                <ListItem>
                  Relies on a specific property <br />
                  being on <Code textColor="white">state</Code>
                </ListItem>
                <ListItem textColor="white">
                  Accesses <Code textColor="white">this</Code>
                  outside of the <br /> lexical scope of the component
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="gray"
          color="white"
          code={require('!raw-loader!./mixins.js.example')}
          ranges={[{ loc: [0, 8] }]}
        />
        <Slide bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo">
          <VtsHeading size={2} textColor="white">
            Higher-order components
          </VtsHeading>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="gray"
          color="white"
          code={require('!raw-loader!./mixins.js.example')}
          ranges={[{ loc: [0, 8] }, { loc: [2, 3] }, { loc: [5, 6] }]}
        />
        <CodeSlide
          lang="js"
          bgColor="gray"
          color="white"
          code={require('!raw-loader!./HOC.js.example')}
          ranges={[
            { loc: [0, 16] },
            { loc: [17, 32] },
            { loc: [31, 32] },
            { loc: [0, 16] },
            { loc: [6, 12] }
          ]}
        />
        <Slide bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo">
          <VtsSlideHeading size={3} textColor="white">
            Higher-order components
          </VtsSlideHeading>
          <Layout>
            <Fill>
              <List margin="-50px 0 0 150px" textColor="white">
                <Heading
                  padding="10px 0"
                  size={4}
                  textAlign="left"
                  textColor="white"
                >
                  Pros
                </Heading>
                <ListItem>Props are immutable</ListItem>
                <ListItem>Can still compose these together</ListItem>
              </List>
            </Fill>
            <Fill>
              <List margin="-50px 0 0 100px" textColor="white">
                <Heading
                  padding="10px 0"
                  size={4}
                  textAlign="left"
                  textColor="white"
                >
                  Cons
                </Heading>
                <ListItem>Implicit behavior</ListItem>
                <ListItem>
                  Relies on a specific property <br />
                  being on{' '}
                  <S type="strikethrough">
                    <Code textColor="white">state</Code>
                  </S>
                  <Code textColor="white">props</Code>
                </ListItem>
                <ListItem>
                  <S type="strikethrough">
                    Accesses <Code textColor="white">this</Code>
                    outside of the <br /> lexical scope of the component
                  </S>
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo">
          <VtsHeading size={2} textColor="white">
            Render props
          </VtsHeading>
        </Slide>
        <CodeSlide
          lang="js"
          bgColor="gray"
          color="white"
          code={require('!raw-loader!./HOC.js.example')}
          ranges={[{ loc: [0, 16] }]}
        />
        <CodeSlide
          lang="js"
          bgColor="gray"
          color="white"
          code={require('!raw-loader!./renderProps.js.example')}
          ranges={[
            { loc: [0, 14] },
            { loc: [15, 26] },
            { loc: [27, 36] },
            { loc: [0, 14] },
            { loc: [9, 10] }
          ]}
        />
        <Slide
          textAlign="left"
          bgImage="https://lh3.googleusercontent.com/PQU3TKUIjfrybevxvzEsiYPiF0OVtgUV4bCP8mld7ixaA_Yqwg9lnZ4uosF9acy5F_tiM6yxPPIm2cAXBJEewMS1JLGNqqufo3zqYl0TGxSsxLegWdy33q4osfpybvFe0djX4nEsmvo"
        >
          <Layout>
            <Fit>
              <BlockQuote>
                <Quote textColor="white">“Example Quote”</Quote>
                <Cite>Author</Cite>
              </BlockQuote>
            </Fit>
            <Fill />
          </Layout>
        </Slide>
      </Deck>
    )
  }
}
