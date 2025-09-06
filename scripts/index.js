const cardsContainer = document.getElementById("cards-container");

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategories(data.categories);
    });
};
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories-container");
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.className =
      "menu bg-[#f0fdf4] rounded-box w-56 mx-auto lg:mx-0 text-center lg:text-left";
    div.innerHTML = `
           
            
              <a  class="hover:bg-[#15803d] hover:text-white p-2 hover:rounded-sm cursor-pointer"> ${category.category_name} </a>
            
          
  `;
    categoryContainer.appendChild(div);
  });
};
loadCategories();
