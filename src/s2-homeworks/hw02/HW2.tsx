import React, { useState } from "react";
import Affairs from "./affairs/Affairs";
import s2 from "../../s1-main/App.module.css";

export type AffairPriorityType = "high" | "low" | "middle"; // need to fix any
export type AffairType = {
  _id: number; // need to fix any
  name: string; // need to fix any
  priority: AffairPriorityType;
};
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: AffairType[] = [
  // need to fix any
  { _id: 1, name: "React", priority: "high" }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "low" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (
  affairs: AffairType[],
  filter: FilterType
): AffairType[] => {
  if (filter === "all") {
    return affairs;
  } else return affairs.filter((el) => el.priority === filter);
  //мой вариант
  // if (filter === "high") {
  //   return affairs.filter((el) => el.priority === "high");
  // }
  // if (filter === "middle") {
  //   return affairs.filter((el) => el.priority === "middle");
  // }
  // if (filter === "low") {
  //   return affairs.filter((el) => el.priority === "low");
  // }
  // return affairs; // need to fix
};

export const deleteAffair = (
  affairs: AffairType[],
  _id: number
): AffairType[] => {
  return affairs.filter((el) => el._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs); // need to fix any
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);

  const deleteAffairCallback = (_id: number) => {
    setAffairs(deleteAffair(affairs, _id));
    // need to fix any
    // need to fix
  };

  return (
    <div id={"hw2"}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default HW2;
