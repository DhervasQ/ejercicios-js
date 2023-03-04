const contandoOvejas = [
  "intentando dormir",
  "Intentando dormir",
  "Intentando dormir",
  "Intentando dormir",
  "Intentando dormir",
  "Intentando dormir",
  "Intentando dormir",
  "Intentando dormir",
  "Intentando dormir",
  "Intentando dormir",
  "Dormido!",
];
for (let index = 0; index <= 10; index++) {
  console.log(contandoOvejas[index]);
}
//otro metodo
for (let index = 0; index <= 10; index++) {
  if (index < 10) {
    console.log("Intentando dormir");
  } else {
    console.log("dormido!");
  }
}
