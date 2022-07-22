import "./styles.css";

const list = document.getElementsByTagName("li");
const [...arr1] = list;

const newArr = arr1.map((value) => {
  return value.textContent;
});

console.log(newArr);
