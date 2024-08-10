document.querySelector("#btn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  const requestURL = "https://api.github.com/users/megha20april";
  console.log(xhr);

  xhr.open("GET", requestURL, true);
  xhr.onload = function () {
    const data = JSON.parse(this.responseText);
    const card = document.getElementById("card");
    card.classList.remove("hidden");
    card.classList.add("flex");
    
    // Create img element
    const img = document.createElement("img");
    img.src = data["avatar_url"];
    img.alt = `${data["name"]}'s avatar`;
    img.classList.add("rounded-full", "w-24", "h-24", "mb-4");

    // Create h2 element
    const h2 = document.createElement("h2");
    h2.textContent = data["name"];
    h2.classList.add("text-2xl", "font-bold", "text-gray-800", "mb-2");

    // Create p element
    const p = document.createElement("p");
    p.textContent = data["bio"];
    p.classList.add("text-gray-600", "text-center");

    // Append elements to card
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
  };
  xhr.send();
});
