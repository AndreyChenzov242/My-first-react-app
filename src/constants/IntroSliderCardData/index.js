import React from "react";

// Modules

import types from "prop-types";

// Components

// import components

// Styles

// ----------------

export const IntroSliderCardData = [
  {
    //title: 'Школа шахмат для детей',
    des: 'Мы нацелены на расширение и развитие шахмат как искусства, способа мышления и важного элемента культуры',
    btnText1: 'Записаться',
    btnText2: 'Подробнее',
    img: 
      'data:image/png;base64,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'
  },
  {
    title: 'Для детей',
    des: 'Мы нацелены на расширение и развитие шахмат как искусства, способа мышления и важного элемента культуры',
    btnText1: 'Записаться',
    btnText2: 'Подробнее',
    img: 
      'data:image/png;base64,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'
  },
];

// // Type of props

// Name.propTypes = {
//   example: types.bool,
// };

// // Default value for props

// Name.defaultProps = {
//   example: true,
// };
