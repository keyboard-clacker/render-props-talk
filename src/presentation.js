/* eslint import/no-webpack-loader-syntax:0 */
// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
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
import { TitleSlide, TitleHeading, theme, VtsSlide } from './vts-slides'

// Require CSS
require('normalize.css')

export default () => {
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
      <VtsSlide>
        <TitleSlide size={1} textColor="white">
          <div>Shared Component Behavior</div>
          <div
            style={{
              fontWeight: 'normal',
              fontSize: '36px',
              marginTop: '25px'
            }}
          >
            @kyleholzinger
          </div>
        </TitleSlide>
      </VtsSlide>
      <VtsSlide>
        <Heading size={2} textColor="white" textAlign="left">
          Summary
        </Heading>
        <List textColor="white">
          <ListItem>Shared behavior</ListItem>
          <ListItem>Mix-ins</ListItem>
          <ListItem>Higher-order components</ListItem>
          <ListItem>Render props</ListItem>
          <ListItem>Future</ListItem>
        </List>
      </VtsSlide>
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/sharedBehavior.js.example')}
        ranges={[
          { title: 'What is shared behavior?', loc: [0, 16] },
          { title: 'What is shared behavior?', loc: [17, 33] },
          { title: 'What is shared behavior?', loc: [1, 3] },
          { title: 'What is shared behavior?', loc: [18, 20] }
        ]}
      />
      <VtsSlide>
        <TitleSlide size={2} textColor="white">
          1.{' '}
          <Appear order={1}>
            <span>Mix-ins</span>
          </Appear>
        </TitleSlide>
      </VtsSlide>
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/sharedBehavior.js.example')}
        ranges={[{ loc: [18, 20], note: 'Shared behavior example' }]}
      />
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/mixins.js.example')}
        ranges={[
          { title: 'Mix-ins', loc: [0, 8] },
          { title: 'Mix-ins', loc: [9, 21] },
          { title: 'Mix-ins', loc: [10, 11] },
          { title: 'Mix-ins', loc: [22, 34] }
        ]}
      />
      <VtsSlide>
        <TitleHeading textColor="white">Mix-ins</TitleHeading>
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
      </VtsSlide>
      <VtsSlide>
        <TitleHeading textColor="white">Mix-ins</TitleHeading>
        <Layout>
          <Fill>
            <List margin="-50px 0 0 150px" textColor="rgba(255, 255, 255, 0.5)">
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
            <List margin="-50px 0 0 100px" textColor="rgba(255, 255, 255, 0.5)">
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
      </VtsSlide>
      <VtsSlide>
        <TitleSlide size={2} textColor="white">
          2.{' '}
          <Appear order={1}>
            <span>Higher-order components</span>
          </Appear>
        </TitleSlide>
      </VtsSlide>
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/mixins.js.example')}
        ranges={[
          {
            loc: [0, 8],
            note: 'Mix-in exmaple... Notice the orphaned `this` :('
          }
        ]}
      />
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/HOC.js.example')}
        ranges={[
          {
            title: 'Higher-order component',
            loc: [0, 16],
            note: 'No more `this` outside of its lexical scope!'
          },
          { title: 'Higher-order component', loc: [17, 32] },
          { title: 'Higher-order component', loc: [31, 32] },
          { title: 'Higher-order component', loc: [0, 16] },
          { title: 'Higher-order component', loc: [6, 12] },
          { title: 'Higher-order component', loc: [10, 11] },
          {
            title: 'Higher-order component',
            loc: [20, 21],
            note:
              'Bonus round! Now using props instead of state (reduces responsibility)'
          }
        ]}
      />
      <VtsSlide>
        <TitleHeading size={3} textColor="white">
          Higher-order components
        </TitleHeading>
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
      </VtsSlide>
      <VtsSlide>
        <TitleHeading size={3} textColor="white">
          Higher-order components
        </TitleHeading>
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
              <ListItem style={{ opacity: 0.5 }}>DRYs up components</ListItem>
              <ListItem style={{ opacity: 0.5 }}>Unit tests</ListItem>
              <ListItem style={{ opacity: 0.5 }}>Props are immutable</ListItem>
              <ListItem style={{ opacity: 0.5 }}>
                Can still compose these together
              </ListItem>
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
                being on <Code textColor="white">props</Code>
              </ListItem>
              <ListItem style={{ opacity: 0.5 }}>
                <S type="strikethrough">
                  Accesses <Code textColor="white">this</Code>
                  outside of the <br /> lexical scope of the component
                </S>
              </ListItem>
            </List>
          </Fill>
        </Layout>
      </VtsSlide>
      <VtsSlide>
        <TitleSlide size={2} textColor="white">
          3.{' '}
          <Appear order={1}>
            <span>Render props</span>
          </Appear>
        </TitleSlide>
      </VtsSlide>
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/HOC.js.example')}
        ranges={[{ loc: [0, 16] }]}
      />
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/renderProps.js.example')}
        ranges={[
          { title: 'Render props', loc: [0, 14] },
          { title: 'Render props', loc: [9, 10] },
          {
            title: 'Render props',
            loc: [15, 26],
            note: 'No more implicit behavior!'
          },
          { title: 'Render props', loc: [25, 36] },
          {
            title: 'Render props',
            loc: [30, 31],
            note: 'No more relying on a specific property name!'
          }
        ]}
      />
      <VtsSlide>
        <TitleHeading size={3} textColor="white">
          Render props
        </TitleHeading>
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
              <ListItem>
                <S type="strikethrough">Implicit behavior</S>
              </ListItem>
              <ListItem>
                <S type="strikethrough">
                  Relies on a specific property <br />
                  being on <Code textColor="white">props</Code>
                </S>
              </ListItem>
              <ListItem>
                <S type="strikethrough">
                  Accesses <Code textColor="white">this</Code>
                  outside of the <br /> lexical scope of the component
                </S>
              </ListItem>
              <Appear order={1}>
                <ListItem>Can be a little difficult to read</ListItem>
              </Appear>
            </List>
          </Fill>
        </Layout>
      </VtsSlide>
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/renderPropsProblem.js.example')}
        ranges={[{ loc: [0, 21] }]}
      />
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/renderPropsPotentialSolution.js.example')}
        ranges={[{ loc: [0, 5] }, { loc: [0, 15] }]}
      />
      <VtsSlide>
        <TitleSlide size={2} textColor="white">
          4.{' '}
          <Appear order={1}>
            <span>Hooks?</span>
          </Appear>
        </TitleSlide>
      </VtsSlide>
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/renderPropsPotentialSolution.js.example')}
        ranges={[{ loc: [0, 15] }]}
      />
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/subscription.js.example')}
        ranges={[{ loc: [0, 19] }]}
      />
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/hooks.js.example')}
        ranges={[
          { loc: [0, 15] },
          { loc: [1, 7] },
          { loc: [8, 13] },
          { loc: [0, 15] }
        ]}
      />
      <CodeSlide
        lang="jsx"
        bgColor="gray"
        color="white"
        code={require('!raw-loader!./examples/abstractedHooks.js.example')}
        ranges={[{ loc: [14, 24] }, { loc: [0, 24] }, { loc: [14, 37] }]}
      />
      <VtsSlide textAlign="left">
        <Layout>
          <Fit>
            <BlockQuote>
              <Quote textColor="white">“Example Quote”</Quote>
              <Cite>Author</Cite>
            </BlockQuote>
          </Fit>
          <Fill />
        </Layout>
      </VtsSlide>
      <VtsSlide>
        <TitleSlide size={2} textColor="white">
          @kyleholzinger
        </TitleSlide>
      </VtsSlide>
    </Deck>
  )
}
