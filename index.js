// // I am going to make a loop that will print out objects that have the following categories:
//  Name, Occupation, Starting Price (Objects)

// const items = [
//     { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
//     { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
//     { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
//     { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
//     { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
//     { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
//     { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
//     { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
//   ];

// function calculateAllInventoryPrice() {
//     return items.reduce(
//       (accumulator, item) => accumulator + item.price * item.inventory,
//       0
//     );

// sum() {
//     return this.data.reduce((accumulator, value) => accumulator + value, 0);
//     //return the sum of the numbers
//   }

// function getSum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum;
//   }

//   function getMean(numbers) {
//     return getSum(numbers) / numbers.length;
//   }

// Create a loop to go through each array in the object

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Dr.Impulse",
  "Prof Spark",
];
const prices = [25, 51, 43, 81, 43, 76, 47, 72];
const occupations = ["teacher", "programmer", "driver", "gardener"];

const calculateAveragePrice = () => {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  // You forgot to return the total
  return total;
};

function random(limit) {
  return Math.round(Math.random() * (limit - 1));
}

function getRandomElement(array) {
  return array[random(array.length)];
}

function generateRandomFreelancer() {
  return {
    name: getRandomElement(names),
    price: getRandomElement(prices),
    occupation: getRandomElement(occupations),
  };
}

function renderJobs() {
  const table = document.getElementById("table1");
  table.innerHTML = "";

  freelancers.forEach((member) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${member.name}</td>
    <td>${member.price}</td>
    <td>${member.occupation}</td>`;
    table.appendChild(row);
  
  });
}
renderJobs();

function addFreelancer() {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderJobs();
}

const addFreelancersIntervalId = setInterval(addFreelancer, 5000);

// What element in your html document is this referencing?
// Make sure to add a proper class or id to specify
const average = document.querySelector("averages"); // double check your selector when the element exists!

// If you want to interpolate values into strings, you have to use backticks 👉🏽 ``
// You had used "" instead and that was throwing everything off


average.innerHTML = `The average starting prices is: ${calculateAveragePrice().toFixed(
    2
  )}
  `;
  


