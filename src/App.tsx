import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("count");

  const handleClick = () => {
    setCount((count) => count + 1);
    setText("licznik");
  };

  // * Ćwiczenia na zajęciach z 07.07.2023
  // ! Funkcja I
  function countCharacters(word: string): number {
    return word.length;
  }

  // ! Funkcja II
  function isEven(inputNumber: number): boolean {
    const isNumberEven = inputNumber % 2;
    return isNumberEven === 0;
  }

  // ! Funkcja III
  // let valueToPass: boolean;
  // valueToPass = true;
  // valueToPass = false;
  function getParityMessage(booleanValue: boolean): string {
    return booleanValue
      ? "Ta liczba jest parzysta"
      : "Ta liczba nie jest parzysta";
  }

  // ! Funkcja IV
  function processString(stringInFunc?: string): string {
    if (stringInFunc) {
      const numberOfLetter: number = countCharacters(stringInFunc);
      const isStringEvenResponse: string = getParityMessage(
        isEven(numberOfLetter)
      );
      return console.log(
        `Podany string to "${stringInFunc}". Liczba jego znaków to ${numberOfLetter}. ${isStringEvenResponse}.`
      );
    } else {
      return console.log("Nie podano argumentu");
    }
  }

  processString("Karolina");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          {text} is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
