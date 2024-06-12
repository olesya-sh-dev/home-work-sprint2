import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        color: "rgb(0, 204, 34)",
        "& .MuiSlider-rail": {
          backgroundColor: "rgb(139, 139, 139)", // цвет линии слайдера
        },
        "& .MuiSlider-track": {
          backgroundColor: "rgb(0, 204, 34)", // цвет линии слайдера до бегунка
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "rgb(255, 255, 255)",
          width: "18px",
          height: "18px", // цвет бегунка
          border: "1px solid rgb(0, 204, 34)",
          position: "relative", // необходимо для позиционирования внутреннего эллипса
          "&::after": {
            content: '""', // обязательно для создания псевдоэлемента
            display: "block",
            position: "absolute",
            width: "6px", // ширина внутреннего эллипса
            height: "6px", // высота внутреннего эллипса
            backgroundColor: "rgb(0, 204, 34)", // цвет внутреннего эллипса
            borderRadius: "50%", // сделать внутренний эллипс круглым
            transform: "translate(-50%, -50%)", // центрировать внутренний эллипс
          },
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
