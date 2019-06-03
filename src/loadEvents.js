import { Service } from "./service";
let fs = require("fs");

const MONTHS = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];

const loadService = new Service();

const loadMonths = () => {
  let result = [];
  let list = [];
  MONTHS.map(async (month, index) => {
    let url = `./months/${month}.json`;
    result = await fetch(url)
      .then(res => res.json())
      .then(data => {
        return data;
      });
    result.forEach(element => {
      list.push(element);
    });
  });
  return list;
};

let lista = loadMonths();
console.log(lista);

export default loadMonths;
