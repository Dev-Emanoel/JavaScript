/* Juntando todos os arrays */

// const zero = 0;
// const numPositivos = [1, 2, 3, 4];
// const numNegativos = [-1, -2, -3, -4];

// let numerosTotais = numNegativos.concat(zero, numPositivos);
// console.log(numerosTotais);

/* Iterando arrays */
/* ===================================*/
// devolve true se x for múltiplo de 2.
// let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const multiplo = x => x % 2 === 0;
// valores.every(multiplo);
/* ===================================*/
const feedbacks = [
  "Melhorar responsividade do site",
  "Erros confusos",
  "Os botões são intuitivos",
  "Erros confusos",
];

// function removerFeedbacksDuplicados(feedbacks) {
//   return [...new Set (feedbacks)]
// }

// console.log(
//   removerFeedbacksDuplicados(feedbacks)
// )
// Com método - Reduce

// const feedbacks = [
//   "Melhorar responsividade do site",
//   "Erros confusos",
//   "Os botões são intuitivos",
//   "Erros confusos",
//  ];
 
//  function removerFeedbacksDuplicados(feedbacks) {
//   const objectMap = feedbacks.reduce((map, feedback) => {
//     map.set(feedback, feedback);
//     return map;
//   }, new Map());
 
//   return Array.from(objectMap, ([_, value]) => value);
//  }

// Com método - Filter

function removerFeedbacksDuplicados(feedbacks) {
  const found = {};
  return feedbacks.filter(feedback => found.hasOwnProperty(feedback) ? false : (found[feedback] = true));
 }
 console.log(
  removerFeedbacksDuplicados(feedbacks)
)