import { FunctionComponent, ChangeEvent, MouseEvent, useState } from "react";

type UserType = {
  name: string;
  sessionID: number;
};

export const ReactUseStateExampleComponent: FunctionComponent = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<UserType | null>(null);
  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setUser({
      name: userName,
      sessionID: Math.random(),
    });
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
          <input type="text" placeholder="username" onChange={handleInput} />
          <button onClick={handleLogin}>Login</button>
        </form>
      )}
    </div>
  );
};
