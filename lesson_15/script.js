const heading = document.getElementById("heading");
const shipTitle = document.getElementById("ship-title");
const canonNumber = document.getElementById("canon-number");
const weaponList = document.getElementById("weapon-list");

// Promise <Response> -json --> Promise<Pirate>
fetch("https://cryweb2025.github.io/pirate-api/jack-sparrow.json") // Promise<Response>
  .then((res) => res.json()) // Превращаем формат json в javascript
  .then((pirate) => {
    // Promise пирата
    console.log(pirate);
    heading.textContent = pirate.name;
    shipTitle.textContent += pirate.ship.title;
    canonNumber.textContent += pirate.ship.numberOfCanons;

    pirate.weapons.forEach((weapon) => {
      const li = document.createElement("li");
      li.textContent = weapon;
      weaponList.appendChild(li);
    });
  })
  .catch((e) => {
    console.log(e);
  });
