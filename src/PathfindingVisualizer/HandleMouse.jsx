// import React, {useState, useEffect, useCallback} from 'react';

// export default function HandleMouse(callback = () => {}, ms = 50) {
//   const [mouseIsPressed, setMouseIsPressed] = useState(false);

//   useEffect(() => {
//     let timerId;
//     if (mouseIsPressed) {
//       timerId = setTimeout(callback, ms);
//     } else {
//       clearTimeout(timerId);
//     }

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [callback, ms, mouseIsPressed]);

//   const start = useCallback(() => {
//     setMouseIsPressed(true);
//   }, []);
//   const stop = useCallback(() => {
//     setMouseIsPressed(false);
//   }, []);

//   return {
//     onMouseDown: start,
//     onMouseUp: stop,
//     onMouseEnter: start,
//     onTouchStart: start,
//     onTouchEnd: stop,
//   };
// }
