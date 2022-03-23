import React, { ReactElement, ReactNode } from 'react';
import './App.css';

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

function App() {
  return (
    <div>
      <Heading title="Hello world" />
      <HeadingWithContent>
        <strong>
          Hi!
        </strong>
      </HeadingWithContent>
      <Container>
        Foo
      </Container>
    </div>
  );
}

export default App;
