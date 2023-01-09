// 1. Programing Basics 

const dishes = [
    'Spaghetti',
    'Lasagne',
    'Beans on toast',
    'Porridge',
    'Tomato soup',
    'Salmon'
];

for (let i = 0; i < dishes.length; i++) {
    console.log(dishes[i]);
}


//2. Dom manipulation 

const btn = document.createElement('button');
btn.innerText = 'Click me';
document.body.appendChild(btn);

btn.addEventListener('click', (e) => {
    const header = document.createElement('h1')
    header.innerHTML = 'Js Test';
    document.body.appendChild(header);
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(18)}`
});


//3.  Async API Calls 

const body = document.querySelector("body");

fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 3; i++) {
      const h1 = document.createElement("h1");
      h1.innerHTML = data.data[i].first_name;
      body.appendChild(h1);
      console.log(data.data[i].first_name);
    }
  });