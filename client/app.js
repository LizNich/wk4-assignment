const messageForm = document.getElementById("messageForm");

async function handleSubmit(event) {
  event.preventDefault();
  // GET
  const formData = new FormData(messageForm);
  const body = Object.fromEntries(formData);
  //POST request
  const response = await fetch("https://wk4-assignment.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  console.log(response);
}

messageForm.addEventListener("submit", handleSubmit);
