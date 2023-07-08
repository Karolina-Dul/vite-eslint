import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReactTypes } from "./ReactTypes";

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
  function processString(stringInFunc?: string) {
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

  // * GENERICS - generyki

  // https://www.typescriptlang.org/docs/handbook/2/generics.html

  // funkcja bez generyków
  // function printData(data: number | string) {
  //   console.log(data, "data");
  // }

  // z generykami
  function printData<T>(data: T) {
    console.log(data, "data");
  }

  printData(2);
  printData("hello!");
  printData(true);

  // * -----------------------

  function makePair<T>(first: T, second: T): [T, T] {
    return [first, second];
  }

  const numberPair = makePair<number>(1, 2);
  console.log("numberPair", numberPair);

  const stringPair = makePair<string>("hello", "world");
  console.log("stringPair", stringPair);

  // ------------------------------------------------------------

  // UTILITY TYPES
  // https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype

  // Partial
  // Partial<Type> - tworzy nowy typ, który zawiera wszystkie właściwości oryginalnego type, ale oznacza je jako opcjonalne (null lub undefined są dozwolone)

  interface Person {
    name: string;
    age: number;
  }

  type partialPerson = Partial<Person>;
  const partialPerson: partialPerson = {};
  partialPerson.name = "John";
  partialPerson.age = 18;

  // Readonly
  // Readonly<Type> - tworzy typ, który zawiera te same właściwości co oryginalny typ, ale oznacza je jako tylko do odczytu, nie można ich zmieniać

  interface Config {
    apiKey: string;
    endpoint: string;
  }

  type ReadonlyConfig = Readonly<Config>;

  const config: ReadonlyConfig = {
    apiKey: "123abc",
    endpoint: "https://example.com",
  };

  // config.apiKey = "asfkjhjk24kjh"; <---- nie można zmienić, ponieważ mamy Readonly

  // Pick
  // Pick<Type> - tworzy nowy typ, który zawiera tylko wybrane właściwości oryginalnego typu

  interface PersonWithAdress {
    name: string;
    age: number;
    address: string;
  }

  type PersonWithoutAdress = Pick<PersonWithAdress, "name" | "age">;
  const person: PersonWithoutAdress = {
    name: "Joe",
    age: 26,
  };

  person.name = "Mark";
  // person.address = "221b Baker Street"; <---- Błąd - adres nie istnieje

  // Omit
  // Omit<Type> - tworzy nowy typ, który zawiera wszystkie właściwości oryginalnego typu, z wyjątkiem wybranych właściwości

  type PersonWithoutAdress_v2 = Omit<PersonWithAdress, "address">;
  const person_v2: PersonWithoutAdress_v2 = {
    name: "Joe",
    age: 26,
  };

  person_v2.name = "John";
  // person_v2.address = "221b Baker Street"; <---- Błąd - adres nie istnieje

  // ------------------------------------------------------------------------

  // any vs unknown
  // https://dmitripavlutin.com/typescript-unknown-vs-any/

  // any:
  // - najbardziej elastyczny typ w TS
  // - oznacza, że zmienna może mieć dowolny typ i można na niej wykonywać dowolne operacje bez żadnych ostrzeżeń
  // - pomija statyczną kontrolę typów w TS, nie dostaniemy informacji o typach i nie ma sprawdzenia poprawności typów
  // - jest przydatne, gdy pracujemy z kodem, który nie ma jednoznacznie określonych typów lub chcemy zignorować ostrzeżenia

  // unknown:
  // - bezpoeczniejszy niż typ 'any'
  // - oznacza, że zmienna może mieć wartość dowolnego typu, ale nie możemy na niego wykonywać dowolnych operacji, dopóki nie sprawdzimy i nie zweryfikujemy typu
  // - wymusza statyczną kontrolę typów - musimy przeprowadzić sprawdzenie typu lub rzutowanie
  // - przydatne, gdy otrzymujemy wartość o niezmiennnym typie i chcemy ją bezpiecznie manipulować, zachowując kontrolę typów

  // dlaczego unknown jest lepsze?
  // - wymusza statyczną kontrolę typów
  // - zmusza programistów do bardziej świadomego i bezpiecznego manipulowania wartościami o nieznanym typie
  // - pozwala na zachowanie kontroli typów, co prowadzi do bardziej niezawodnego kodu

  // dlaczego any lepsze?
  // - nie wymaga sprawdzania typów ani rzutowania, ale może prowadzić do trudno wykrywalnych błędów

  let valueAny: any;
  valueAny = 123;
  valueAny = "hello";
  // valueAny.someFunction(); // <---- przy 'any' taka operacja jest dozwolona

  let valueUnknown: unknown;

  valueUnknown = 123;
  valueUnknown = "hello";
  // valueUnknown.someFunction(); <---- przy 'unknown' taka operacja nie jest dozwolona

  if (typeof valueUnknown === "string") {
    // ...
    console.log(valueUnknown.toUpperCase());
  }

  // ------------------------------------------------------------------------

  // Promise
  // typ Promise - reprezentuje wartość, która może być dostępna w przyszłości

  // then/Promise

  function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Przykładowe dane z żądania";
        resolve(data);
      }, 2000);
    });
  }

  fetchData().then((data) => console.log("Otrzymane data", data));

  // async/await

  interface User {
    id: string;
    name: string;
    email: string;
  }
  // {id: '', name: '', email: ''}

  async function fetchUser(): Promise<User> {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();

    return data as User; // rzutowanie typu na interface User
  }

  fetchUser().then((user) => console.log("Otrzymany user", user));

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
      <ReactTypes />
    </>
  );
}

export default App;
