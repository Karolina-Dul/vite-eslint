import React, { FunctionComponent } from "react";
import { ReactUseStateExampleComponent } from "../ReactUseStateExample";

const style: React.CSSProperties = {
  color: "red",
  fontSize: 14,
};

interface ChildrenProps {
  children: React.ReactNode;
}

// Children Types example
const ChildrenComponent = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

// const ChildrenComponent = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };

// Dwa sposoby deklaracji funkcji
// export const ReactTypes(): JSX.Element {
export const ReactTypes: FunctionComponent = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("kliknięto przycisk", event);
  };

  return (
    <div style={style}>
      {/* EVENT DLA INPUTA */}
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>KLIK!</button>
      <ChildrenComponent>
        <div>children</div>
        <div>children</div>
      </ChildrenComponent>
      <ReactUseStateExampleComponent />
    </div>
  );
};

// styled-components
// https://styled-components.com/
