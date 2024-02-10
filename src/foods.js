import { defineStore } from "pinia";
const useFoodStore = defineStore("FoodStore", {
  state: () => {
    return {
      foods: [
        {
          id: 1,
          name: "Kaniva Lamb,Tuna and Rice Cat Food-380g",
          price: "9,900 Ks",
          imgUrl: "../public/foods/1.png",
        },
        {
          id: 2,
          name: "Me-O Adult Cat Food 1.2kg",
          price: "14,100 Ks",
          imgUrl: "../public/foods/2.png",
        },
        {
          id: 3,
          name: "Me-O Canned Seafood Platter in Prawn Jelly 400G",
          price: "4,700 Ks",
          imgUrl: "../public/foods/3.png",
        },
        {
          id: 4,
          name: "Royal Canin Sensible Cats 400g",
          price: "18,100 Ks",
          imgUrl: "../public/foods/4.jpg",
        },
        {
          id: 5,
          name: "Ostech Gourmet Cat - 400g",
          price: "3,300 Ks",
          imgUrl: "../public/foods/5.jpg",
        },
        {
          id: 6,
          name: "Kaniva Cat Food 9Kg",
          price: "178,300 Ks",
          imgUrl: "../public/foods/6.jpeg",
        },
        {
          id: 7,
          name: "Cherman Cream Treat -12g*5pcs",
          price: "4,800 Ks",
          imgUrl: "../public/foods/7.jpg",
        },
        {
          id: 8,
          name: "Royal Canin Hairball Care 400g",
          price: "18,900 Ks",
          imgUrl: "../public/foods/8.jpg",
        },
        {
          id: 9,
          name: "Royal Canin Mother & Baby Cat 2kg",
          price: "74,000 Ks",
          imgUrl: "../public/foods/9.jpg",
        },
        {
          id: 10,
          name: "Kaniva Indoor Formula(For Healthier Skin And Coat)-370g",
          price: "9,900 Ks",
          imgUrl: "../public/foods/10.png",
        },
        {
          id: 11,
          name: "Kaniva Lamb,Tuna & Rice Cat Food-1.4Kg",
          price: "30,400 Ks",
          imgUrl: "../public/foods/11.jpg",
        },
        {
          id: 12,
          name: "Moochie Cat MEATY Pouches 70g",
          price: "1,700 Ks",
          imgUrl: "../public/foods/12.png",
        },
        {
          id: 13,
          name: "Purina Pro Plan Adult Cat Fussy Beauty Stomach Pouch 85g",
          price: "3,800 Ks",
          imgUrl: "../public/foods/13.png",
        },
        {
          id: 14,
          name: "Kaniva Wet Food (Mother Cat & Kitten ) 170g",
          price: "6,500 Ks",
          imgUrl: "../public/foods/14.jpg",
        },
        {
          id: 15,
          name: "Moochie Cat Creamy Broths Pouches 40g",
          price: "1,400 Ks",
          imgUrl: "../public/foods/15.png",
        },
        {
          id: 16,
          name: "Petsimo Cat Food 85g Can",
          price: "3,000 Ks",
          imgUrl: "../public/foods/16.png",
        },
        {
          id: 17,
          name: "Kaniva Wet Food 70g",
          price: "2,500 Ks",
          imgUrl: "../public/foods/17.jpg",
        },
        {
          id: 18,
          name: "Kit Cat Purr Puree PLUS+ (Joint Care)-4*15g",
          price: "5,400 Ks",
          imgUrl: "../public/foods/18.jpg",
        },
        {
          id: 19,
          name: "Jinny Canned 85g",
          price: "2,400 Ks",
          imgUrl: "../public/foods/19.jpg",
        },
        {
          id: 20,
          name: "Kaniva Indoor Cat Wet Food 70g",
          price: "2,700 Ks",
          imgUrl: "../public/foods/20.jpg",
        },
      ],
    };
  },

  actions: {},
});

export default useFoodStore;
