//! task 1

// const fs = require('fs').promises;

// async function main() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   const parseData = data.filter((el) => {
//     if (el.title.length <= 30) {
//       return el;
//     }
//   });
//   await fs.writeFile('posts.json', JSON.stringify(parseData));
// }

// main();

//! task 2

// const fs = require('fs').promises;

// async function main() {
//   const [, , option, email, name, age] = process.argv;

//   let res = await fs.readFile('users.json', 'utf-8');

//   let data = JSON.parse(res);

//   if (option === 'CREATE') {
//     const check = data.filter((el) => {
//       return el.email === email;
//     });

//     if (check.length == 0) {
//       data.push({ email, name, age });
//       await fs.writeFile('users.json', JSON.stringify(data));
//     }
//   } else if (option === 'DELETE') {
//     let newData = data.filter((el) => !el.email === email);
//     await fs.writeFile('users.json', JSON.stringify(newData));
//   }
// }

// main();

//! task 3

const fs = require('fs').promises;

async function main() {
  const [, , option] = process.argv;

  let res = await fs.readFile('products.json', 'utf-8');
  let data = await JSON.parse(res);
  let sort;
  if (option === 'ASC') {
    sort = data.sort((a, b) => a.price - b.price);
  } else if (option === 'DESC') {
    sort = data.sort((a, b) => b.price - a.price);
  } else {
    sort = 'araswori option';
  }
  console.log(sort);
}

main();
