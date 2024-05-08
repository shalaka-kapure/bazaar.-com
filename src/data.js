import Iphone from "./images/iphone.jpg";
import Ipad from "./images/ipad.jpg";
import iphonepro from "./images/iphonepro.jpg";
import ipadpro from "./images/ipadpro.jpg";
import iphonepromax from "./images/iphonepromax.jpg";
import ethnic from "./images/ethnic.jpg";
import casual from "./images/casual.jpg";
import lounge from "./images/lounge.jpg";
import sandal from "./images/sandal.jpg";
import airfryer from "./images/airfryer.webp";
import coffee from "./images/coffee.webp";
import lamp from "./images/lamp.jpg";
import serum from "./images/serum.jpg"
import bathroom from "./images/bathroom.jpg";
import jacket from "./images/jacket.jpg";
import pillows from  "./images/pillows.webp"
import kitchen from "./images/kitchen.jpeg";
import clothes from "./images/women.jpeg";
import serum2 from "./images/serum2.jpg";
import cream from "./images/cream.jpg";
import shampoo from "./images/shampoo.jpg";
import blender from "./images/blender.jpg";
import shoes from "./images/shoes.jpg";
import heels from "./images/heels.jpg"
import { useEffect, useState } from "react";

export const sliderItems = [
  {
    id: 11,
    img: Iphone,
    name:"Iphone 14 Plus",
    title: "DIWALI BUMPER SALE!",
    desc: "FLAT 10% OFF ON iPhone 14 Plus!",
    bg: "#b2b2ce",
  },
  {
    id: 12,
    img: Ipad,
    name:"Ipad",
    title: "DIWALI BUMPER SALE!",
    desc: "FLAT 5% OFF ON iPad!",
    bg: "#b2b2ce",
  },
  {
    id: 9,
    img: iphonepro,
    name:"Iphone 14 Pro",
    title: "DIWALI BUMPER SALE!",
    desc: "FLAT 10% OFF ON iPhone 14 Pro!",
    bg: "#b2b2ce",
  },
  {
    id: 10,
    img: ipadpro,
    name:"Ipad Pro",
    title: "DIWALI BUMPER SALE!",
    desc: "FLAT 5% OFF ON iPad! Pro!",
    bg: "#b2b2ce",
  },
  {
    id: 13,
    img: iphonepromax,
    name:"Iphone 14 Pro Max",
    title: "DIWALI BUMPER SALE!",
    desc: "FLAT 10% OFF ON iPhone 14 Pro Max!",
    bg: "#b2b2ce",
  },
];

export const categories = [
  {
    id: 1,
    img: clothes,
    title: "Women's clothing!",
    cat: "clothes",
  },
  {
    id: 2,
    img: kitchen,
    title: "Kitchen accessroies!",
    cat: "kitchen",
  },
  {
    id: 3,
    img: serum2,
    title: "Beauty & Makeup!",
    cat: "beauty",
  },
  {
    id: 4,
    img: iphonepromax,
    title: "Electronic!",
    cat: "electronic",
  },
  {
    id: 5,
    img: shoes,
    title: "Ladies Footwear!",
    cat: "footwear",
  },  
  {
    id: 6,
    img: pillows,
    title: "Bedroom Accessories",
    cat: "bedroom",
  },
];

export const popularProducts = [
  {
    id: 1,
    img: sandal,
    category:"footwear",
    name:"Multi Color Handmade Printed Fabric Punjabi Jutti for Women",
    desc: "Welcome to the world of handmade ladies juttis, where traditional craftsmanship meets modern style. Our juttis are crafted with care and precision, using only the finest materials to create a product that is both beautiful and comfortable. With a wide range of designs and styles to choose from, our handmade ladies juttis are perfect for any occasion. Whether you're dressing up for a wedding or just looking for something stylish and comfortable to wear around town, our juttis are the perfect choice.",
    price:"Rs. 1099"
  },
  {
    id: 2,
    img: airfryer,
    category:"kitchen",
    name:"Pigeon Healthifry Digital Air Fryer",
    desc:"Enjoy perfectly crispy and evenly cooked delicious snacks, thanks to the advanced 360° high-speed air circulation technology. USES 95% LESS OIL: Enjoy guilt-free indulgence with up to 95% less oil than traditional cooking methods.Bring your family together with the Pigeon HealthiFRY Digital Airfryer, the ultimate solution for healthier, faster, and more convenient cooking, creating delicious memories and fostering a love for wholesome cooking among all family members – enjoy guilt free healthy snacks!",
    price:"Rs. 3244"
  },
  {
    id: 3,
    img: coffee,
    category:"kitchen",
    name:"INALSA Espresso/Cappuccino 4Cup Coffee Maker",
    desc:"Brew hot coffee in minutes: Want to drink delicious and hot coffee within minutes? Inalsa Bonjour is here. With 800W of power, this coffee machine helps you brew your perfect cup every single time. Say goodbye to long waits! 3 in 1 coffee maker: Endless possibilities with this coffee maker. With multi-purpose control knob, make cappuccino, espresso or latte as per your convenience. Easy one-go knob for all your different tastes.",
    price:"Rs. 3995"
  },
  {
    id: 4,
    img:lamp,
    category:"bedroom",
    name:"Cute Bunny Night Light for Children's Room",
    desc:"The children's rabbit night light is a perfect gift for mom and baby. Kids love the cute bunny, kids can sleep with the rechargeable child night light which emits a beautiful glow and dispels their fear of dark monsters and helps your baby get a rest during the night, which means mom and dad can also sleep well. The baby bunny night light not only relaxes the sleeping environment and soothes the emotions of adults and babies, it also sparks endless imagination and creativity in children. A toy that helps children learn colors",
    price:"Rs.999"
  },
  {
    id: 5,
    img: serum,
    category:"beauty",
    name:"Lakme 9 to 5 Vitamin C+ Serum 15 ml",
    desc:"Inspired by the illuminate trend|| Lakme ’s Perfect Radiance range is now elevated to a new level of luxury and efficacy. The high-resolution clarity of a crystal is now captured in the New Lakme Absolute Perfect Radiance range. If you wish for skin that has a flawless and illuminating glow|| then this Lakme Absolute Perfect Radiance Skin Brightening Day Crème is formulated just for you. This Skin Brightening Day crème with precious micro-crystals and skin Brightening vitamins gives you a fair|| illuminated look. Moisture rich yet so ultra light this crème melts into your skin with a silky feel. This formulation gently polishes your skin to reveal that illuminated look. This Day Crème replenishes and moisturizes your skin giving it an instant fairer glow.",
    price:"Rs. 299"
  },
  {
    id: 6,
    img:bathroom,
    category:"bedroom",
    name:"Pigeon Healthifry Digital Air Fryer",
    desc:"",
    price:","
  },
  {
    id: 7,
    img:jacket,
    category:"clothes",
    name:"Pigeon Healthifry Digital Air Fryer",
    desc:"",
    price:","
  },
  {
    id: 8,
    img:pillows,
    category:"bedroom",
    name:"Pigeon Healthifry Digital Air Fryer",
    desc:"",
    price:","
  },
  {
    id: 9,
    img: iphonepro,
    category:"electronic",
    name:"Pigeon Healthifry Digital Air Fryer",
    desc:"",
    price:","
},
{
    id: 10,
    img: ipadpro,
    category:"electronic",
    name:"Ipad Pro",
    desc:"",
    price:","
  },
  {
    id: 11,
    img: Iphone,
    category:"electronic",
    name:"Pigeon Healthifry Digital Air Fryer",
    desc:"",
    price:""
  },
  {
    id: 12,
    img: Ipad,
    category:"electronic",
    name:"Pigeon Healthifry Digital Air Fryer",
    desc:"",
    price:","
  },
  {
    id: 13,
    img: iphonepromax,
    category:"electronic",
    name:"Pigeon Healthifry Digital Air Fryer",
    desc:"",
    price:","
  },
  {
    id: 14,
    img: ethnic,
    category:"clothes",
    name:"Pigeon Healthifry Digital Air Fryer",
    desc:"",
    price:","
  },
  {
    id: 15,
    img: casual,
    category:"clothes",
    name:"KOTTY Women's Fit and Flare Multicolor Dress",
    desc:"Be the epitome of class and grace while donning this multicolor dress from kotty. Crafted from crep .The Dress is also modeled with harf sleeves.",
    price:"Rs. 639"
  },
  {
    id: 16,
    img: lounge,
    category:"clothes",
    name:"Women Winter Pajama Set Long Sleeve Loungewear",
    desc:"We bring you the styling and fashion to women's Thermal Wear. It gives extra warm layer this winter with fashion conscious women of all ages. You will simply fall in love with superb piece, both comfortable as well as feminine making and easy to care fabric, It is perfect choice, very comfortable and beautiful looking. Selfcare bring you the styling and fashion to women Thermal Wear. It gives extra warm layer this winter with fashion conscious women of all ages. You will simply fall in love with superb piece. Made with a unique combination of polyfill sandwiched between layers of combed cotton, it keep you warm and comfortable. These quilted thermals are designed to give a contoured snug fit and can be worn both as innerwear or outwear.",
    price:"Rs. 899"
  },
  {
    id: 17,
    img: serum2,
    category:"beauty",
    name:"Minimalist 10% Vitamin C Face Serum ",
    desc:"A POTENT STABLE VITAMIN C FACE SERUM: Not all Vit C serums are made equal! This serum is is made with a stable Vitamin C derivative, 10% Ethyl Ascorbic Acid that is closest to pure Vitamin C (L-Ascorbic Acid) in molecular size and weight. With similar molecule size and 86% pure Vitamin C content it delivers maximum benefits of Vitamin C without getting bad or losing efficacy till the last drop (unlike other Vitamin C serums).",
    price:"Rs. 299"
  },
  {
    id: 18,
    img: cream,
    category:"beauty",
    name:"L'Oreal Paris Glycolic Bright Day Cream with SPF 17",
    desc:"he L’Oréal Paris brightening cream reduces dark spots in 2 weeks, hyper-pigmentation and reveales even skin tone by stimulating cell renewal. This dark spot treatment serum is formulated with glycolic acid that is used in dermatlogical peeling treatments. The brightening cream is highly effective yet gentle for daily use",
    price:"Rs. 487"
},
{
    id: 19,
    img: shampoo,
    category:"beauty",
    name:"Love Beauty & Planet Argan Oil and Lavender Natural Shampoo",
    desc:" Enjoy soft hair with the love beauty and planet shampoo for women. This hair shampoo is made from natural ingredients like argan oil and other essentials that give your hair the nutrition it needs and helps them stay firm on the scalp for a happy hair experience. The love beauty and planet shampoo lavender are made from natural elements. This shampoo works to make your hair healthier from the root. Relax in a soothing fragrance oozing out from the essential argon oil that have been used for creating this paraben-free shampoo.",
    price:"Rs. 279"
  },
  {
    id: 20,
    img: blender,
    category:"kitchen",
    name:"Portable Hand Blender",
    desc:"Fully integrated blending & cleaning functionality. Press & Hold power switch for 2 seconds to initiate blending. To clean, simply add 2/3rd water to the jar & blend one full cycle of 45 secs. The 6 sharp SS blades with rotation speed of 16500 rpm & battery capacity 3000mAh can power 7.4V powerful copper motor in order to whip up the desired juice and smoothies within 30 seconds.",
    price:"Rs. 2998"
  },
  {
    id: 21,
    img: shoes,
    category:"footwear",
    name:"Campus Women's Brownie Sneakers",
    desc: "These women's chunky sneakers feature a breathable mesh upper, providing air flow and keeping feet cool and cozy. They have a funky style that pairs well with casual outfits, and offer a comfortable fit and design for a springy step. Chunky sneakers are stylish and casual options for women. With a thick sole, they offer comfort, support, and a soft, cozy feel. Ideal for everyday wear, they add a bounce to your stride and are a trendy choice for your shoe collection.",
    price:"Rs. 1101"
  },
  {
    id: 22,
    img: heels,
    category:"footwear",
    name:"XE Looks slip-on sandals for women",
    desc: "Premium Quality Synthetic Leather & Stylish Design makes for Beautiful , Casual, Ethnic Wear Slippers Fashion Slippers. Soft Bottom & Inner Material Ensures Lasting Comfort. Style up your daily wardrobe with this pair of slip on slippers for women",
    price:"Rs. 598"
  },
];

