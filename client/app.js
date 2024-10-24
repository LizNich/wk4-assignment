const h1 = document.querySelector("h1");

async function updateh1() {
  const response = await fetch("https://wk4-assignment.onrender.com");
  const data = await response.json();
  h1.textContent = data;
}

updateh1();
