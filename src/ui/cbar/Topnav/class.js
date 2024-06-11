const result = [
  {
    level1: { level2: { name: "David", parts: ["head", "shoulders"] } },
  },
  { level1: { level2: { face: "meh", parts: ["knees", "toes"] } } },
  { level1: { level2: { eyes: "more meh", parts: ["eyes"] } } },
];

const fruits = ["apple", "banana"];
const iteratorobject = fruits.keys();
console.log(iteratorobject);
for (let key of iteratorobject) {
  console.log(key);
}
console.log(typeof result);
console.log(typeof fruits);
