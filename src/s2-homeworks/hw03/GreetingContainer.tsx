import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";
import { v1 } from "uuid";

type GreetingContainerPropsType = {
  users: UserType[]; // need to fix any
  addUserCallback: (name: string) => void; // need to fix any
};

export const pureAddUser = (
  name: string,
  setError: (value: string) => void,
  setName: (value: string) => void,
  addUserCallback: (name: string) => void
) => {
  if (name.trim() === "") {
    setError("Ошибка! Введите имя!");
  } else {
    setName(name);
    addUserCallback(name);
    setName("");
  }
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
};

export const pureOnBlur = (name: string, setError: (value: string) => void) => {
  if (name.trim() === "") {
    setError("Ошибка! Введите имя!");
  }
  // если имя пустое - показать ошибку
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void
) => {
  if (e.key === "Enter") {
    addUser();
  }
  // если нажата кнопка Enter - добавить
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); // need to fix any
  const [error, setError] = useState<string>(""); // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // need to fix any
    setName(e.currentTarget.value);
  if (!e.currentTarget.value.trim()) {
    setError("Ошибка! Введите имя!");
  } else {
    setError(""); // очищаем ошибку, если имя введено
  }
};
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    if (!name.trim()) {
      setError("Ошибка! Введите имя!");
    }else{
    pureOnBlur(name, setError);
  };
  }
  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!name.trim()) {
        setError("Ошибка! Введите имя!");
      }else{
    pureOnEnter(e, addUser);
  };
  }
  const totalUsers = users.length;
  const lastUserName = users.length > 0 ? users[users.length - 1].name : null // need to fix
  console.log(users);

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
