const recipes = [
  {
    name: "Garlic Maggie",
    image: "https://i.imgur.com/W8ZQ2Pt.jpg",
    recipe: `1. Heat oil, add chopped garlic.\n2. Add vegetables of your choice.\n3. Add water, maggie noodles, and tastemaker.\n4. Cook for 2-3 minutes. Serve hot.`
  },
  {
    name: "Butter Paneer",
    image: "https://i.imgur.com/X9HkZfH.jpg",
    recipe: `1. Heat butter, sauté onions and tomatoes.\n2. Add spices (turmeric, chili, garam masala).\n3. Blend into smooth paste.\n4. Add paneer cubes, simmer with cream.\n5. Garnish with coriander.`
  },
  {
    name: "Chole Bhature",
    image: "https://i.imgur.com/f8t8s5U.jpg",
    recipe: `1. Soak and boil chole (chickpeas).\n2. Cook with onion, tomato, ginger, and spices.\n3. For bhature: Make dough with maida, curd, and baking soda.\n4. Deep fry and serve hot with chole.`
  },
  {
    name: "Pizza",
    image: "https://i.imgur.com/lID1OTF.jpg",
    recipe: `1. Use pizza base, spread sauce.\n2. Add toppings (veggies, cheese).\n3. Bake at 200°C for 10-15 minutes.\n4. Serve hot with oregano and chili flakes.`
  },
  {
    name: "Burger",
    image: "https://i.imgur.com/yZd9xCu.jpg",
    recipe: `1. Prepare patties (veg or meat).\n2. Grill or shallow fry.\n3. Toast buns, apply mayo/sauce.\n4. Add patty, lettuce, tomato, cheese.\n5. Close and serve.`
  },
  {
    name: "Chilly Potato",
    image: "https://i.imgur.com/fbQvA7s.jpg",
    recipe: `1. Fry potato fingers till crispy.\n2. Toss in garlic, capsicum, and sauces (soya, chili, vinegar).\n3. Garnish with spring onion.`
  },
  {
    name: "Mojito",
    image: "https://i.imgur.com/98TQbMo.jpg",
    recipe: `1. Muddle mint leaves, lemon juice, and sugar.\n2. Add ice, soda, and stir well.\n3. Garnish with mint sprig and lemon slice.`
  },
  {
    name: "Paneer Tikka",
    image: "https://i.imgur.com/URFXG3G.jpg",
    recipe: `1. Marinate paneer in yogurt, spices, and lemon.\n2. Skewer with capsicum and onion.\n3. Grill or bake till golden.`
  },
  {
    name: "Aloo Paratha",
    image: "https://i.imgur.com/5Xzhc1n.jpg",
    recipe: `1. Make dough with wheat flour.\n2. Prepare spicy potato filling.\n3. Stuff and roll into flatbread.\n4. Cook on tawa with ghee till golden.`
  }
];

const container = document.getElementById("recipe-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalRecipe = document.getElementById("modal-recipe");
const closeBtn = document.getElementById("close-btn");

// Render recipe cards with image
recipes.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="card-image" />
    <h3>${item.name}</h3>
  `;
  card.onclick = () => {
    modalTitle.textContent = item.name;
    modalRecipe.textContent = item.recipe;
    modal.style.display = "block";
  };
  container.appendChild(card);
});

// Modal close functionality
closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
