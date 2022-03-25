import React, { ReactElement, ReactNode, useState } from 'react';
import './App.css';
import UseContextComponent from './features/UseContextComponent';
import UseEffectComponent from './features/UseEffectComponent';
import UseStateComponent from './features/UseStateComponent';

// conventional props
function Heading({ title }: { title?: string }) {
  return <h1>{title}</h1>
}


// ReactNode will help to specify that the children can be any dataType 
// With ReactElement we are specifing what we're going to return, in this case is a react element
function HeadingWithContent({ children }: { children?: ReactNode }): ReactElement {
  return <h1>{children}</h1>
}

// deafultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}

type ContainerProps = { children?: ReactNode } & typeof defaultContainerProps

function Container({ heading, children }: ContainerProps): ReactElement {
  return <div>
    <h1>{heading}</h1>
    {children}
  </div>
}

Container.defaultProps = defaultContainerProps;

// functional props
function TextWithNumber({
  header,
  children
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode
}) {
  const [state, setState] = useState<number>(1)

  return <div>
    {header && <h2>{header?.(state)}</h2>}
    <div>
      {children(state)}
    </div>
    <div>
      <button onClick={() => setState(state + 1)} >Add</button>
    </div>
  </div>
}

// List
function List<ListItem>(
  {
    items, render,
  }: {
    items: ListItem[],
    render: (item: ListItem) => ReactNode
  }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <div>
      {/* <Heading title="Hello world" />
      <HeadingWithContent>
        <strong>
          Hi!
        </strong>
      </HeadingWithContent>
      <Container>
        Foo
      </Container>
      <TextWithNumber >
        {(num: number) => <div>Today's number num {num}</div>}
      </TextWithNumber>
      <List items={["Jack", "Sadie", "Jerson", "oso"]} render={(item: string) => <div>{item.toLowerCase()}</div>}></List> */}

      <div>
        <h1>UseState wit TS:</h1>
        <UseStateComponent />
      </div>
      <div>
        <h1>UseEffect wit TS:</h1>
        <UseEffectComponent />
      </div>
      <div>
        <h1>UseContext wit TS:</h1>
        <UseContextComponent />
      </div>
    </div>
  );
}

export default App;
