import "./styles.css";

// const lists = document.getElementsByClassName("list");
// const [...newArr] = lists;

const nameArr = ["やまだ", "さとう", "立川", "うんこ"];

const newNameArr = nameArr.map((name) => {
  if (name === "うんこ") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);
