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
  loadTreeCards(categories);
};
const loadTreeCards = () => {
  fetch(`https://openapi.programming-hero.com/api/plants`)
    .then((res) => res.json())
    .then((data) => displayTreeCards(data));
};
const displayTreeCards = (treeDetails) => {
  console.log(treeDetails);
  const cardGrid = document.getElementById("card-grid");
  treeDetails.plants.forEach((plant) => {
    const div = document.createElement("div");
    div.className = "card bg-base-100 lg:w-80 shadow-sm mx-auto";
    div.innerHTML = `      <figure class="px-5 py-5"><img class="rounded-[8px] w-[311px] h-[186px] " src="${plant.image}" alt="" /></figure>
            <div class="card body px-5 py-5">
              <h2 class="card title text-[14px] font-semibold">${plant.name}</h2>
              <p class="text-[12px] lg:h-[78px]">
               ${plant.description}
              </p>
              <div class="flex justify-between items-center">
                <div class="badge bg-[#dcfce7] text-[#15803D] text-xs mt-[10px]">
                  ${plant.category}
                </div>
                <div class="mt-[10px] font-bold"><p>৳${plant.price}</p></div>
              </div>
              <div class="card actions mt-[10px]">
                <button class="btn btn-primary rounded-3xl bg-[#15803D]">
                  Add To Cart
                </button>
              </div>
            </div>`;
    cardGrid.appendChild(div);
  });
};

loadCategories();
