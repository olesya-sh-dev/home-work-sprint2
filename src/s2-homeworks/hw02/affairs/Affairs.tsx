import React, { Dispatch } from "react";
import Affair from "./affair/Affair";
import { AffairType, FilterType, deleteAffair } from "../HW2";
import s from "./Affairs.module.css";

type AffairsPropsType = {
  data: AffairType[]; // need to fix any
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (_id: number) => void;
  //deleteAffairCallback: React.Dispatch<React.SetStateAction<number>>;//навороченная типизация
  filter: FilterType;
};

function Affairs(props: AffairsPropsType) {
  const setAll = () => {
    props.setFilter("all");

    // need to fix
  };
  const setHigh = () => {
    props.setFilter("high");
    // need to fix
  };
  const setMiddle = () => {
    props.setFilter("middle");
    // need to fix
  };
  const setLow = () => {
    // need to fix
    props.setFilter("low");
  };

  //вариант через один set
  // const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   props.setFilter(e.currentTarget.value as FilterType);
  // };

  const cnAll =
    s.button + " " + s.all + (props.filter === "all" ? " " + s.active : "");
  const cnHigh =
    s.button + " " + s.high + (props.filter === "high" ? " " + s.active : "");
  const cnMiddle =
    s.button +
    " " +
    s.middle +
    (props.filter === "middle" ? " " + s.active : "");
  const cnLow =
    s.button + " " + s.low + (props.filter === "low" ? " " + s.active : "");
  //классы для кнопок вариант через один set
  // const setClasses = (filter: FilterType) => {
  //   return s.button + (props.filter === filter ? " " + s.active : "");
  // };

  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  return (
    <div>
      <div className={s.buttonContainer}>
        <button id={"hw2-button-all"} onClick={setAll} className={cnAll}>
          All
        </button>
        <button id={"hw2-button-high"} onClick={setHigh} className={cnHigh}>
          High
        </button>
        <button
          id={"hw2-button-middle"}
          onClick={setMiddle}
          className={cnMiddle}
        >
          Middle
        </button>
        <button id={"hw2-button-low"} onClick={setLow} className={cnLow}>
          Low
        </button>
        {/* вариант через один set */}
        {/* <button onClick={set} value={"all"} className={setClasses("all")}>
          All
        </button>
        <button onClick={set} value={"high"} className={setClasses("high")}>
          High
        </button>
        <button onClick={set} value={"middle"} className={setClasses("middle")}>
          Middle
        </button>
        <button onClick={set} value={"low"} className={setClasses("low")}>
          Low
        </button> */}
      </div>
      <div className={s.affairs}>{mappedAffairs}</div>
    </div>
  );
}

export default Affairs;
