import React, { useState } from "react";
import { v1 } from "uuid";
import s2 from "../../s1-main/App.module.css";
import GreetingContainer from "./GreetingContainer";



// types
export type UserType = {
  _id: string; // need to fix any
  name: string; // need to fix any
};

export const pureAddUserCallback = (
  name: string,
  setUsers: (users: UserType[]) => void, //?
  users: UserType[]
) => {
  // need to fix any
  const user = {
    _id: v1(),
    name: name, // need to fix
  };
  setUsers([...users, user]);
};

const HW3 = () => {
  const [users, setUsers] = useState<UserType[]>([]); // need to fix any+

  const addUserCallback = (name: string) => {
    // need to fix any
    pureAddUserCallback(name, setUsers, users);
  };

  return (
    <div id={"hw3"}>
      <div className={s2.hwTitle}>Homework #3</div>
      {/*для автоматической проверки дз (не менять)*/}

      <div className={s2.hw}>
        <GreetingContainer users={users} addUserCallback={addUserCallback} />
      </div>
    </div>
  );
};

export default HW3;
