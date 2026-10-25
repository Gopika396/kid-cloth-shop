import newborn1 from "../assets/image/product_newborn1.jpg";
import newborn2 from "../assets/image/product_newborn2.jpg";
import mintBear from "../assets/image/product_new_extra_mint_bear_romper.png";
import creamKnit from "../assets/image/product_new_extra_cream_knit_set.png";

import toddler1 from "../assets/image/product_toddler1.jpg";
import toddler2 from "../assets/image/product_toddler2.jpg";
import blueDino from "../assets/image/product_new_extra_blue_dinosaur_pajamas.png";
import pinkParty from "../assets/image/product_new_extra_pink_floral_party_dress.png";

import kids1 from "../assets/image/product_kids1.jpg";
import kids2 from "../assets/image/product_kids2.jpg";

import preteen1 from "../assets/image/product_preteen1.jpg";
import preteen2 from "../assets/image/product_preteen2.jpg";
import lilacBag from "../assets/image/product_new_extra_lilac_butterfly_bag_set.png";

// Age groups match the banner images: 0-12 Months, 1-3 Years, 4-7 Years, 8-12 Years
const products = [
  { id: 1, name: "Teddy Bear Romper", category: "Rompers", age: "0-12 Months", price: 599, oldPrice: 799, brand: "LittleSteps", image: newborn1, tag: "Bestseller" },
  { id: 2, name: "Blush Ruffle Baby Dress", category: "Dresses", age: "0-12 Months", price: 699, oldPrice: 899, brand: "LittleSteps", image: newborn2, tag: "New" },
  { id: 3, name: "Mint Bear Hooded Romper", category: "Rompers", age: "0-12 Months", price: 649, oldPrice: 849, brand: "LittleSteps", image: mintBear, tag: "Soft Cotton" },
  { id: 4, name: "Cream Knit Set", category: "Sets", age: "0-12 Months", price: 749, oldPrice: 949, brand: "LittleSteps", image: creamKnit, tag: "Cozy Pick" },

  { id: 5, name: "Floral Bow Dress", category: "Dresses", age: "1-3 Years", price: 799, oldPrice: 999, brand: "LittleSteps", image: toddler1, tag: "Popular" },
  { id: 6, name: "Bunny Sweatshirt Set", category: "Sets", age: "1-3 Years", price: 849, oldPrice: 1099, brand: "LittleSteps", image: toddler2, tag: "Bestseller" },
  { id: 7, name: "Blue Dino Pajamas", category: "Sleepwear", age: "1-3 Years", price: 549, oldPrice: 699, brand: "LittleSteps", image: blueDino, tag: "Everyday" },
  { id: 8, name: "Pink Floral Party Dress", category: "Dresses", age: "1-3 Years", price: 999, oldPrice: 1299, brand: "LittleSteps", image: pinkParty, tag: "Party" },

  { id: 9, name: "Denim Jacket Set", category: "Jackets", age: "4-7 Years", price: 1299, oldPrice: 1599, brand: "LittleSteps", image: kids1, tag: "Trending" },
  { id: 10, name: "Dino Roar Hoodie Set", category: "Hoodies", age: "4-7 Years", price: 999, oldPrice: 1299, brand: "LittleSteps", image: kids2, tag: "Bestseller" },

  { id: 11, name: "Purple Bloom Party Dress", category: "Dresses", age: "8-12 Years", price: 1199, oldPrice: 1499, brand: "LittleSteps", image: preteen1, tag: "Popular" },
  { id: 12, name: "Tie-Dye Hoodie Set", category: "Hoodies", age: "8-12 Years", price: 1099, oldPrice: 1399, brand: "LittleSteps", image: preteen2, tag: "New" },
  { id: 13, name: "Lilac Butterfly Bag Set", category: "Sets", age: "8-12 Years", price: 1399, oldPrice: 1699, brand: "LittleSteps", image: lilacBag, tag: "Trending" }
];

export default products;