import "./styles.css";

const list = document.getElementsByClassName("list");
const [...arr1] = list;

arr1.map((value) => (value.style = "color:red"));
