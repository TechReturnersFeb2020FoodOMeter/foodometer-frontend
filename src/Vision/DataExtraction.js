import React, { useState } from "react";
import "./VisionApi.css";
import DynamicSelect from "./DynamicSelect";

const DataExtraction = (props) => {
  const [product, setProduct] = useState("");
  const [date, setDate] = useState("2020-05-23");
  const [reminder, setReminder] = useState("");
  const foodlist = [
    "acorn squash",
    "alfalfa sprouts",
    "almond",
    "anchovy",
    "anise",
    "appetite",
    "appetizer",
    "apple",
    "apricot",
    "artichoke",
    "asparagus",
    "aspic",
    "ate",
    "avocado",
    "bacon",
    "bagel",
    "bake",
    "baked Alaska",
    "bamboo shoots",
    "banana",
    "barbecue",
    "barley",
    "basil",
    "batter",
    "beancurd",
    "beans",
    "beef",
    "beet",
    "bell pepper",
    "berry",
    "biscuit",
    "bitter",
    "black beans",
    "black tea",
    "black-eyed peas",
    "blackberry",
    "bland",
    "blood orange",
    "blueberry",
    "boil",
    "bowl",
    "boysenberry",
    "bran",
    "bread",
    "breadfruit",
    "breakfast",
    "brisket",
    "broccoli",
    "broil",
    "brown rice",
    "brownie",
    "brunch",
    "Brussels sprouts",
    "buckwheat",
    "buns",
    "burrito",
    "butter",
    "butter bean",
    "cake",
    "calorie",
    "candy",
    "candy apple",
    "cantaloupe",
    "capers",
    "caramel",
    "caramel apple",
    "carbohydrate",
    "carrot",
    "cashew",
    "cassava",
    "casserole",
    "cater",
    "cauliflower",
    "caviar",
    "cayenne pepper",
    "celery",
    "cereal",
    "chard",
    "cheddar",
    "cheese",
    "cheesecake",
    "chef",
    "cherry",
    "chew",
    "chick peas",
    "chicken",
    "chili",
    "chips",
    "chives",
    "chocolate",
    "chopsticks",
    "chow",
    "chutney",
    "cilantro",
    "cinnamon",
    "citron",
    "citrus",
    "clam",
    "cloves",
    "cobbler",
    "coconut",
    "cod",
    "coffee",
    "coleslaw",
    "collard greens",
    "comestibles",
    "cook",
    "cookbook",
    "cookie",
    "corn",
    "cornflakes",
    "cornmeal",
    "cottage cheese",
    "crab",
    "crackers",
    "cranberry",
    "cream",
    "cream cheese",
    "crepe",
    "crisp",
    "crunch",
    "crust",
    "cucumber",
    "cuisine",
    "cupboard",
    "cupcake",
    "curds",
    "currants",
    "curry",
    "custard",
    "daikon",
    "daily bread",
    "dairy",
    "dandelion greens",
    "Danish pastry",
    "dates",
    "dessert",
    "diet",
    "digest",
    "digestive system",
    "dill",
    "dine",
    "diner",
    "dinner",
    "dip",
    "dish",
    "dough",
    "doughnut",
    "dragonfruit",
    "dressing",
    "dried",
    "drink",
    "dry",
    "durian",
    "eat",
    "Edam cheese",
    "edible",
    "egg",
    "eggplant",
    "elderberry",
    "endive",
    "entree",
    "fast",
    "fat",
    "fava beans",
    "feast",
    "fed",
    "feed",
    "fennel",
    "fig",
    "fillet",
    "fire",
    "fish",
    "flan",
    "flax",
    "flour",
    "food",
    "food pyramid",
    "foodstuffs",
    "fork",
    "freezer",
    "French fries",
    "fried",
    "fritter",
    "frosting",
    "fruit",
    "fry",
    "fusilli",
    "garlic",
    "gastronomy",
    "gelatin",
    "ginger",
    "ginger ale",
    "gingerbread",
    "glasses",
    "Gouda cheese",
    "grain",
    "granola",
    "grape",
    "grapefruit",
    "grated",
    "gravy",
    "green bean",
    "green tea",
    "greens",
    "grub",
    "guacamole",
    "guava",
    "gyro",
    "halibut",
    "ham",
    "hamburger",
    "hash",
    "hazelnut",
    "herbs",
    "honey",
    "honeydew",
    "horseradish",
    "hot",
    "hot dog",
    "hot sauce",
    "hummus",
    "hunger",
    "hungry",
    "ice",
    "ice cream",
    "ice cream cone",
    "iceberg lettuce",
    "iced tea",
    "icing",
    "jackfruit",
    "jalapeño",
    "jam",
    "jelly",
    "jellybeans",
    "jicama",
    "jimmies",
    "Jordan almonds",
    "jug",
    "juice",
    "julienne",
    "junk food",
    "kale",
    "kebab",
    "ketchup",
    "kettle",
    "kettle corn",
    "kidney beans",
    "kitchen",
    "kiwi",
    "knife",
    "kohlrabi",
    "kumquat",
    "ladle",
    "lamb",
    "lard",
    "lasagna",
    "legumes",
    "lemon",
    "lemonade",
    "lentils",
    "lettuce",
    "licorice",
    "lima beans",
    "lime",
    "liver",
    "loaf",
    "lobster",
    "lollipop",
    "loquat",
    "lox",
    "lunch",
    "lunch box",
    "lunchmeat",
    "lychee",
    "macaroni",
    "macaroon",
    "main course",
    "maize",
    "mandarin orange",
    "mango",
    "maple syrup",
    "margarine",
    "marionberry",
    "marmalade",
    "marshmallow",
    "mashed potatoes",
    "mayonnaise",
    "meat",
    "meatball",
    "meatloaf",
    "melon",
    "menu",
    "meringue",
    "micronutrient",
    "milk",
    "milkshake",
    "millet",
    "mincemeat",
    "minerals",
    "mint",
    "mints",
    "mochi",
    "molasses",
    "mole sauce",
    "mozzarella",
    "muffin",
    "mug",
    "munch",
    "mushroom",
    "mussels",
    "mustard",
    "mustard greens",
    "mutton",
    "napkin",
    "nectar",
    "nectarine",
    "nibble",
    "noodles",
    "nosh",
    "nourish",
    "nourishment",
    "nut",
    "nutmeg",
    "nutrient",
    "nutrition",
    "nutritious",
    "oatmeal",
    "oats",
    "oil",
    "okra",
    "oleo",
    "olive",
    "omelet",
    "omnivore",
    "onion",
    "orange",
    "order",
    "oregano",
    "oven",
    "oyster",
    "pan",
    "pancake",
    "papaya",
    "parsley",
    "parsnip",
    "pasta",
    "pastry",
    "pate",
    "patty",
    "pattypan squash",
    "pea",
    "pea pod",
    "peach",
    "peanut",
    "peanut butter",
    "pear",
    "pecan",
    "pepper",
    "pepperoni",
    "persimmon",
    "pickle",
    "picnic",
    "pie",
    "pilaf",
    "pineapple",
    "pita bread",
    "pitcher",
    "pizza",
    "plate",
    "platter",
    "plum",
    "poached",
    "pomegranate",
    "pomelo",
    "pop",
    "popcorn",
    "popovers",
    "popsicle",
    "pork",
    "pork chops",
    "pot",
    "pot roast",
    "potato",
    "preserves",
    "pretzel",
    "prime rib",
    "protein",
    "provisions",
    "prune",
    "pudding",
    "pumpernickel",
    "pumpkin",
    "punch",
    "quiche",
    "quinoa",
    "radish",
    "raisin",
    "raspberry",
    "rations",
    "ravioli",
    "recipe",
    "refreshments",
    "refrigerator",
    "relish",
    "restaurant",
    "rhubarb",
    "ribs",
    "rice",
    "roast",
    "roll",
    "rolling pin",
    "romaine",
    "rosemary",
    "rye",
    "saffron",
    "sage",
    "salad",
    "salami",
    "salmon",
    "salsa",
    "salt",
    "sandwich",
    "sauce",
    "sauerkraut",
    "sausage",
    "savory",
    "scallops",
    "scrambled",
    "seaweed",
    "seeds",
    "sesame seed",
    "shallots",
    "sherbet",
    "shish kebab",
    "shrimp",
    "slaw",
    "slice",
    "smoked",
    "snack",
    "soda",
    "soda bread",
    "sole",
    "sorbet",
    "sorghum",
    "sorrel",
    "soup",
    "sour",
    "sour cream",
    "soy",
    "soy sauce",
    "soybeans",
    "spaghetti",
    "spareribs",
    "spatula",
    "spices",
    "spicy",
    "spinach",
    "split peas",
    "spoon",
    "spork",
    "sprinkles",
    "sprouts",
    "spuds",
    "squash",
    "squid",
    "steak",
    "stew",
    "stir-fry",
    "stomach",
    "stove",
    "straw",
    "strawberry",
    "string bean",
    "stringy",
    "strudel",
    "sub sandwich",
    "submarine sandwich",
    "succotash",
    "suet",
    "sugar",
    "summer squash",
    "sundae",
    "sunflower",
    "supper",
    "sushi",
    "sustenance",
    "sweet",
    "sweet potato",
    "Swiss chard",
    "syrup",
    "taco",
    "take-out",
    "tamale",
    "tangerine",
    "tapioca",
    "taro",
    "tarragon",
    "tart",
    "tea",
    "teapot",
    "teriyaki",
    "thyme",
    "toast",
    "toaster",
    "toffee",
    "tofu",
    "tomatillo",
    "tomato",
    "torte",
    "tortilla",
    "tuber",
    "tuna",
    "turkey",
    "turmeric",
    "turnip",
    "ugli fruit",
    "unleavened",
    "utensils",
    "vanilla",
    "veal",
    "vegetable",
    "venison",
    "vinegar",
    "vitamin",
    "wafer",
    "waffle",
    "walnut",
    "wasabi",
    "water",
    "water chestnut",
    "watercress",
    "watermelon",
    "wheat",
    "whey",
    "whipped cream",
    "wok",
    "yam",
    "yeast",
    "yogurt",
    "yolk",
    "zucchini",
  ];
  const textArr = props.arr;
  let selectedValue;
  console.log("props received" + props.arr);
  let retArr = [];
  retArr = foodlist.filter((b) =>
    textArr.some((a) => new RegExp(b, "i").test(a))
  );
  //     const myFunction = (event)=> {
  //         alert ("i am here");
  //         let ul = document.createElement('ul');

  //         document.getElementById('myItemList').appendChild(ul);

  //         retArr.forEach(function (item) {
  //             let li = document.createElement('li');

  //             ul.appendChild(li).className = "dropdown-item";
  //             alert(item);
  //             li.innerHTML += item;
  //         });
  //         var items = document.querySelectorAll("#myItemList li");

  //         for (let i = 0; i < items.length; i++) {
  //             items[i].onclick = () => {
  //                   console.log(items[i]);
  //                 document.getElementById("txt").value = items[i].innerHTML;

  //             };

  //     }
  //     event.preventDefault();
  // }

  const handleSelectedValue = (value) => {
   
    selectedValue = value;
    if (selectedValue !== "None of the above") {
      document.getElementById("product").value = selectedValue;
    } else {
      document.getElementById("product").value = "";
      document.getElementById("product").placeholder = "Enter Item Name";
    }
  };

  const handleProdChange = (event) => {
    setProduct(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleReminderChange = (event) => {
    setReminder(event.target.value);
  };

  const handleAddTask = () => {
    props.handleAdd(product, date, reminder);
  };

  return (
    <div className="dataextraction">
      {console.log("props is" + props.arr)}
      

      <form >
     {props.file==='true'? <DynamicSelect array={retArr} onSelectChange={handleSelectedValue} /> :null}
         <div className="row addprod">

          <div className="col col-md-4 my-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Product_Name"
              onChange={handleProdChange}
              value={selectedValue}
              id="product"
            />
          </div>
          <div className="col col-md-3">
            <input
              type="date"
              className="form-control"
              placeholder="Last name"
              onChange={handleDateChange}
              value={date}
            />
          </div>
          <div className="col col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Reminder"
              onChange={handleReminderChange}
              value={reminder}
            />
          </div>
          <div class="col-md-3 input-group">
          
            <select class="custom-select" id="category">
              <option selected>Category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables_Meat">Vegetables and Meat</option>
              <option value="Cooked_Food">Cooked Food</option>
              <option value="Food_Cupboard">Food Cupboard</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center my-3">
          <button
            class="btn btn-info"
            type="button"
            id="additembtn"
            data-dismiss="modal"
            onClick={handleAddTask}
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataExtraction;
