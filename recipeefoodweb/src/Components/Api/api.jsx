import React, { useState, useEffect } from "react";
import video from "../../assets/video/video1.mp4";

// Datos nutricionales simulados (valores por 100 gramos)
const datosNutricionales = {
  "Chicken": { calorias: 165, proteinas: 31, grasas: 3.6, carbohidratos: 0 },
  "Salmon": { calorias: 208, proteinas: 20, grasas: 13, carbohidratos: 0 },
  "Beef": { calorias: 250, proteinas: 26, grasas: 17, carbohidratos: 0 },
  "Pork": { calorias: 242, proteinas: 25, grasas: 14, carbohidratos: 0 },
  "Avocado": { calorias: 160, proteinas: 2, grasas: 15, carbohidratos: 9 },
  "Apple Cider Vinegar": { calorias: 3, proteinas: 0, grasas: 0, carbohidratos: 1 },
  "Asparagus": { calorias: 20, proteinas: 2.2, grasas: 0.2, carbohidratos: 3.7 },
  "Aubergine": { calorias: 25, proteinas: 1, grasas: 0.2, carbohidratos: 5.9 },
  "Baby Plum Tomatoes": { calorias: 18, proteinas: 1, grasas: 0.2, carbohidratos: 4 },
  "Bacon": { calorias: 42, proteinas: 3, grasas: 3.3, carbohidratos: 0 },
  "Baking Powder": { calorias: 5, proteinas: 0, grasas: 0, carbohidratos: 1 },
  "Balsamic Vinegar": { calorias: 14, proteinas: 0, grasas: 0, carbohidratos: 3.5 },
  "Basil": { calorias: 22, proteinas: 2.5, grasas: 0.6, carbohidratos: 4.3 },
  "Basil Leaves": { calorias: 22, proteinas: 2.5, grasas: 0.6, carbohidratos: 4.3 },
  "Basmati Rice": { calorias: 130, proteinas: 2.7, grasas: 0.3, carbohidratos: 28 },
  "Bay Leaf": { calorias: 6, proteinas: 0.1, grasas: 0.1, carbohidratos: 1.5 },
  "Bay Leaves": { calorias: 6, proteinas: 0.1, grasas: 0.1, carbohidratos: 1.5 },
  "Beef Brisket": { calorias: 250, proteinas: 22, grasas: 17, carbohidratos: 0 },
  "Beef Fillet": { calorias: 271, proteinas: 26, grasas: 18, carbohidratos: 0 },
  "Beef Gravy": { calorias: 25, proteinas: 1, grasas: 1, carbohidratos: 4 },
  "Beef Stock": { calorias: 10, proteinas: 1, grasas: 0, carbohidratos: 1 },
  "Beef Stock Cube": { calorias: 10, proteinas: 1, grasas: 0, carbohidratos: 1 },
  "Bicarbonate Of Soda": { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
  "Biryani Masala": { calorias: 10, proteinas: 1, grasas: 0.5, carbohidratos: 2 },
  "Black Pepper": { calorias: 6, proteinas: 0.3, grasas: 0.1, carbohidratos: 1.3 },
  "Black Treacle": { calorias: 111, proteinas: 0, grasas: 0, carbohidratos: 27.9 },
  "Borlotti Beans": { calorias: 150, proteinas: 9, grasas: 0.8, carbohidratos: 27.8 },
  "Bowtie Pasta": { calorias: 220, proteinas: 7, grasas: 1, carbohidratos: 43 },
  "Bramley Apples": { calorias: 50, proteinas: 0.5, grasas: 0.2, carbohidratos: 14 },
  "Brandy": { calorias: 65, proteinas: 0, grasas: 0, carbohidratos: 1 },
  "Bread": { calorias: 80, proteinas: 2, grasas: 1, carbohidratos: 15 },
  "Breadcrumbs": { calorias: 130, proteinas: 4, grasas: 1, carbohidratos: 24 },
  "Broccoli": { calorias: 34, proteinas: 2.8, grasas: 0.4, carbohidratos: 6.6 },
  "Brown Lentils": { calorias: 116, proteinas: 9, grasas: 0.4, carbohidratos: 20 },
  "Brown Rice": { calorias: 111, proteinas: 2.6, grasas: 0.9, carbohidratos: 23 },
  "Brown Sugar": { calorias: 53, proteinas: 0, grasas: 0, carbohidratos: 14 },
  "Butter": { calorias: 102, proteinas: 0.1, grasas: 11.5, carbohidratos: 0.1 },
  "Cacao": { calorias: 80, proteinas: 3, grasas: 4.5, carbohidratos: 11 },
  "Cajun": { calorias: 6, proteinas: 0.3, grasas: 0.3, carbohidratos: 1 },
  "Canned Tomatoes": { calorias: 32, proteinas: 1.5, grasas: 0.2, carbohidratos: 7.5 },
  "Cannellini Beans": { calorias: 110, proteinas: 8, grasas: 0.5, carbohidratos: 19 },
  "Cardamom": { calorias: 6, proteinas: 0.3, grasas: 0.3, carbohidratos: 1.3 },
  "Carrots": { calorias: 41, proteinas: 0.9, grasas: 0.2, carbohidratos: 9.6 },
  "Cashew Nuts": { calorias: 553, proteinas: 18, grasas: 44, carbohidratos: 30 },
  "Cashews": { calorias: 553, proteinas: 18, grasas: 44, carbohidratos: 30 },
  "Caster Sugar": { calorias: 50, proteinas: 0, grasas: 0, carbohidratos: 13 },
  "Cayenne Pepper": { calorias: 17, proteinas: 0.9, grasas: 0.9, carbohidratos: 3.7 },
  "Celeriac": { calorias: 42, proteinas: 1.5, grasas: 0.3, carbohidratos: 9 },
  "Celery": { calorias: 16, proteinas: 0.7, grasas: 0.2, carbohidratos: 3.5 },
  "Celery Salt": { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
  "Challots": { calorias: 72, proteinas: 1.3, grasas: 0.1, carbohidratos: 16.5 },
  "Charlotte Potatoes": { calorias: 77, proteinas: 2, grasas: 0.1, carbohidratos: 17.6 },
  "Cheddar Cheese": { calorias: 400, proteinas: 25, grasas: 33, carbohidratos: 1.3 },
  "Cheese": { calorias: 402, proteinas: 25, grasas: 33, carbohidratos: 1.3 },
  "Cheese Curds": { calorias: 340, proteinas: 25, grasas: 25, carbohidratos: 3 },
  "Cherry Tomatoes": { calorias: 18, proteinas: 1, grasas: 0.2, carbohidratos: 4 },
  "Chestnut Mushroom": { calorias: 22, proteinas: 3, grasas: 0.3, carbohidratos: 3.3 },
  "Chicken Breast": { calorias: 165, proteinas: 31, grasas: 3.6, carbohidratos: 0 },
  "Chicken Breasts": { calorias: 165, proteinas: 31, grasas: 3.6, carbohidratos: 0 },
  "Chicken Legs": { calorias: 180, proteinas: 25, grasas: 7.6, carbohidratos: 0 },
  "Chicken Stock": { calorias: 10, proteinas: 1, grasas: 0, carbohidratos: 1 },
  "Chicken Thighs": { calorias: 209, proteinas: 26, grasas: 10, carbohidratos: 0 },
  "Chickpeas": { calorias: 164, proteinas: 8.9, grasas: 2.6, carbohidratos: 27.4 },
  "Chili Powder": { calorias: 17, proteinas: 0.9, grasas: 0.9, carbohidratos: 3.6 },
  "Chilled Butter": { calorias: 102, proteinas: 0.1, grasas: 11.5, carbohidratos: 0.1 },
  "Chilli": { calorias: 18, proteinas: 0.9, grasas: 0.9, carbohidratos: 3.7 },
  "Chilli Powder": { calorias: 17, proteinas: 0.9, grasas: 0.9, carbohidratos: 3.6 },
  "Chinese Broccoli": { calorias: 15, proteinas: 2.5, grasas: 0.3, carbohidratos: 2.9 },
  "Chocolate Chips": { calorias: 207, proteinas: 2.5, grasas: 12, carbohidratos: 26 },
  "Chopped Onion": { calorias: 40, proteinas: 1.1, grasas: 0.1, carbohidratos: 9.3 },
  "Chopped Parsley": { calorias: 22, proteinas: 2.5, grasas: 0.6, carbohidratos: 4.3 },
  "Chopped Tomatoes": { calorias: 32, proteinas: 1.5, grasas: 0.2, carbohidratos: 7.5 },
  "Chorizo": { calorias: 455, proteinas: 25, grasas: 40, carbohidratos: 1 },
  "Christmas Pudding": { calorias: 208, proteinas: 2.5, grasas: 7.3, carbohidratos: 32 },
  "Cilantro": { calorias: 23, proteinas: 2.1, grasas: 0.5, carbohidratos: 3.7 },
  "Cinnamon": { calorias: 6, proteinas: 0.1, grasas: 0.1, carbohidratos: 1.8 },
  "Cinnamon Stick": { calorias: 6, proteinas: 0.1, grasas: 0.1, carbohidratos: 1.8 },
  "Cloves": { calorias: 6, proteinas: 0.1, grasas: 0.3, carbohidratos: 1.4 },
  "Coco Sugar": { calorias: 35, proteinas: 0, grasas: 0, carbohidratos: 9 },
  "Cocoa": { calorias: 80, proteinas: 3, grasas: 4.5, carbohidratos: 11 },
  "Coconut Cream": { calorias: 445, proteinas: 4, grasas: 48, carbohidratos: 6.5 },
  "Coconut Milk": { calorias: 230, proteinas: 2, grasas: 24, carbohidratos: 6 },
  "Colby Jack Cheese": { calorias: 404, proteinas: 25, grasas: 33, carbohidratos: 1 },
  "Cold Water": { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
  "Condensed Milk": { calorias: 130, proteinas: 3, grasas: 4, carbohidratos: 21 },
  "Coriander": { calorias: 23, proteinas: 2.1, grasas: 0.5, carbohidratos: 3.7 },
  "Coriander Leaves": { calorias: 23, proteinas: 2.1, grasas: 0.5, carbohidratos: 3.7 },
  "Coriander Seeds": { calorias: 10, proteinas: 0.5, grasas: 0.5, carbohidratos: 2 },
  "Corn Tortillas": { calorias: 50, proteinas: 1, grasas: 1, carbohidratos: 10 },
  "Cornstarch": { calorias: 30, proteinas: 0, grasas: 0, carbohidratos: 7 },
  "Cream": { calorias: 52, proteinas: 0.3, grasas: 5.6, carbohidratos: 0.4 },
  "Creme Fraiche": { calorias: 130, proteinas: 2, grasas: 12, carbohidratos: 4 },
  "Cubed Feta Cheese": { calorias: 264, proteinas: 14, grasas: 21, carbohidratos: 4 },
  "Cucumber": { calorias: 15, proteinas: 0.6, grasas: 0.1, carbohidratos: 3.6 },
  "Cumin": { calorias: 22, proteinas: 1, grasas: 1.3, carbohidratos: 3.3 },
  "Cumin Seeds": { calorias: 22, proteinas: 1, grasas: 1.3, carbohidratos: 3.3 },
  "Curry Powder": { calorias: 17, proteinas: 0.9, grasas: 0.9, carbohidratos: 3.6 },
  "Dark Brown Sugar": { calorias: 54, proteinas: 0, grasas: 0, carbohidratos: 14 },
  "Dark Soft Brown Sugar": { calorias: 54, proteinas: 0, grasas: 0, carbohidratos: 14 },
  "Dark Soy Sauce": { calorias: 11, proteinas: 1, grasas: 0, carbohidratos: 1 },
  "Demerara Sugar": { calorias: 56, proteinas: 0, grasas: 0, carbohidratos: 15 },
  "Diced Tomatoes": { calorias: 32, proteinas: 1.5, grasas: 0.2, carbohidratos: 7.5 },
  "Digestive Biscuits": { calorias: 70, proteinas: 1, grasas: 2.5, carbohidratos: 11 },
  "Dill": { calorias: 4, proteinas: 0.3, grasas: 0.1, carbohidratos: 1 },
  "Doner Meat": { calorias: 200, proteinas: 22, grasas: 13, carbohidratos: 0 },
  "Double Cream": { calorias: 460, proteinas: 2, grasas: 48, carbohidratos: 3 },
  "Dried Oregano": { calorias: 6, proteinas: 0.2, grasas: 0.1, carbohidratos: 1.3 },
  "Dry White Wine": { calorias: 82, proteinas: 0, grasas: 0, carbohidratos: 1 },
  "Egg Plants": { calorias: 25, proteinas: 1, grasas: 0.2, carbohidratos: 5.9 },
  "Egg Rolls": { calorias: 150, proteinas: 4, grasas: 7, carbohidratos: 19 },
  "Egg White": { calorias: 17, proteinas: 3.6, grasas: 0, carbohidratos: 0.2 },
  "Egg Yolks": { calorias: 55, proteinas: 2.7, grasas: 4.5, carbohidratos: 0.6 },
  "Eggs": { calorias: 72, proteinas: 6, grasas: 5, carbohidratos: 1 },
  "Enchilada Sauce": { calorias: 15, proteinas: 0.5, grasas: 0.5, carbohidratos: 3 },
  "English Mustard": { calorias: 5, proteinas: 0.2, grasas: 0, carbohidratos: 1 },
  "Extra Virgin Olive Oil": { calorias: 119, proteinas: 0, grasas: 14, carbohidratos: 0 },
  "Fajita Seasoning": { calorias: 18, proteinas: 1, grasas: 0.7, carbohidratos: 3 },
  "Farfalle": { calorias: 220, proteinas: 7, grasas: 1, carbohidratos: 43 },
  "Fennel Bulb": { calorias: 31, proteinas: 1.2, grasas: 0.2, carbohidratos: 7.3 },
  "Fennel Seeds": { calorias: 20, proteinas: 1, grasas: 1.1, carbohidratos: 3.3 },
  "Fenugreek": { calorias: 12, proteinas: 0.7, grasas: 0.3, carbohidratos: 2},
  "Fish Sauce": { calorias: 10, proteinas: 2, grasas: 0, carbohidratos: 1 },
  "Fried Onions": { calorias: 170, proteinas: 2, grasas: 13, carbohidratos: 14 },
  "Fresh Basil": { calorias: 22, proteinas: 2.5, grasas: 0.6, carbohidratos: 4.3 },
  "Fresh Mint": { calorias: 23, proteinas: 2.1, grasas: 0.5, carbohidratos: 3.7 },
  "Frozen Peas": { calorias: 62, proteinas: 4, grasas: 0.4, carbohidratos: 11 },
  "Frozen Spinach": { calorias: 23, proteinas: 2.7, grasas: 0.4, carbohidratos: 3.7 },
  "Garlic": { calorias: 4, proteinas: 0.2, grasas: 0.02, carbohidratos: 1 },
  "Garlic Powder": { calorias: 16, proteinas: 0.7, grasas: 0.1, carbohidratos: 3.7 },
  "Garlic Salt": { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
  "Ginger": { calorias: 8, proteinas: 0.2, grasas: 0.1, carbohidratos: 1.8 },
  "Ginger Powder": { calorias: 17, proteinas: 0.9, grasas: 0.9, carbohidratos: 3.6 },
  "Gnocchi": { calorias: 130, proteinas: 3, grasas: 1, carbohidratos: 25 },
  "Goat Cheese": { calorias: 264, proteinas: 20, grasas: 21, carbohidratos: 4 },
  "Golden Syrup": { calorias: 70, proteinas: 0, grasas: 0, carbohidratos: 17 },
  "Ground Almonds": { calorias: 580, proteinas: 21, grasas: 49, carbohidratos: 22 },
  "Ground Beef": { calorias: 250, proteinas: 26, grasas: 17, carbohidratos: 0 },
  "Ground Chicken": { calorias: 165, proteinas: 31, grasas: 3.6, carbohidratos: 0 },
  "Ground Cinnamon": { calorias: 6, proteinas: 0.1, grasas: 0.1, carbohidratos: 1.8 },
  "Ground Coriander": { calorias: 6, proteinas: 0.3, grasas: 0.3, carbohidratos: 1.3 },
  "Ground Cumin": { calorias: 22, proteinas: 1, grasas: 1.3, carbohidratos: 3.3 },
  "Ground Ginger": { calorias: 8, proteinas: 0.2, grasas: 0.1, carbohidratos: 1.8 },
  "Ground Nutmeg": { calorias: 12, proteinas: 0.3, grasas: 0.5, carbohidratos: 1.5 },
  "Ground Pepper": { calorias: 6, proteinas: 0.3, grasas: 0.1, carbohidratos: 1.3 },
  "Ground Turmeric": { calorias: 9, proteinas: 0.3, grasas: 0.3, carbohidratos: 1.6 },
  "Guacamole": { calorias: 160, proteinas: 2, grasas: 15, carbohidratos: 9 },
  "Ham": { calorias: 145, proteinas: 21, grasas: 6, carbohidratos: 1 },
  "Hard Cheese": { calorias: 400, proteinas: 25, grasas: 33, carbohidratos: 1.3 },
  "Honey": { calorias: 64, proteinas: 0.1, grasas: 0, carbohidratos: 17 },
  "Horseradish": { calorias: 8, proteinas: 0.4, grasas: 0.2, carbohidratos: 1.8 },
  "Hot Sauce": { calorias: 1, proteinas: 0, grasas: 0, carbohidratos: 0.2 },
  "Hotdog Sausages": { calorias: 160, proteinas: 5, grasas: 14, carbohidratos: 1 },
  "Iceberg Lettuce": { calorias: 14, proteinas: 0.9, grasas: 0.1, carbohidratos: 2.9 },
  "Icing Sugar": { calorias: 50, proteinas: 0, grasas: 0, carbohidratos: 13 },
  "Indian Spices": { calorias: 16, proteinas: 0.7, grasas: 0.1, carbohidratos: 3.7 },
  "Instant Coffee": { calorias: 2, proteinas: 0, grasas: 0, carbohidratos: 0 },
  "Jalapenos": { calorias: 4, proteinas: 0.1, grasas: 0.1, carbohidratos: 1 },
  "Jasmine Rice": { calorias: 130, proteinas: 2.7, grasas: 0.3, carbohidratos: 28 },
  "Jelly": { calorias: 150, proteinas: 0, grasas: 0, carbohidratos: 39 },
  "Kale": { calorias: 33, proteinas: 2.9, grasas: 0.6, carbohidratos: 6 },
  "Ketchup": { calorias: 20, proteinas: 0.2, grasas: 0, carbohidratos: 5 },
  "King Prawns": { calorias: 106, proteinas: 24, grasas: 1, carbohidratos: 1 },
  "Korma Paste": { calorias: 60, proteinas: 1, grasas: 4, carbohidratos: 5 },
  "Lamb": { calorias: 294, proteinas: 25, grasas: 21, carbohidratos: 0 },
  "Lamb Chops": { calorias: 294, proteinas: 25, grasas: 21, carbohidratos: 0 },
  "Lamb Shank": { calorias: 350, proteinas: 36, grasas: 22, carbohidratos: 0 },
  "Lemon": { calorias: 17, proteinas: 0.6, grasas: 0.2, carbohidratos: 5 },
  "Lemon Juice": { calorias: 4, proteinas: 0.1, grasas: 0, carbohidratos: 1 },
  "Lemon Zest": { calorias: 4, proteinas: 0.1, grasas: 0, carbohidratos: 1 },
  "Lentils": { calorias: 116, proteinas: 9, grasas: 0.4, carbohidratos: 20 },
  "Lime": { calorias: 20, proteinas: 0.4, grasas: 0.1, carbohidratos: 7 },
  "Lime Juice": { calorias: 4, proteinas: 0.1, grasas: 0, carbohidratos: 1 },
  "Lime Zest": { calorias: 4, proteinas: 0.1, grasas: 0, carbohidratos: 1 },
  "Malt Vinegar": { calorias: 10, proteinas: 0, grasas: 0, carbohidratos: 2 },
  "Mango": { calorias: 60, proteinas: 0.8, grasas: 0.4, carbohidratos: 15 },
  "Maple Syrup": { calorias: 52, proteinas: 0, grasas: 0, carbohidratos: 13 },
  "Mayonnaise": { calorias: 94, proteinas: 0.1, grasas: 10, carbohidratos: 0.4 },
  "Mild Curry Powder": { calorias: 17, proteinas: 0.9, grasas: 0.9, carbohidratos: 3.6 },
  "Milk": { calorias: 42, proteinas: 3.4, grasas: 1, carbohidratos: 5 },
  "Mixed Berries": { calorias: 57, proteinas: 1, grasas: 0.3, carbohidratos: 14 },
  "Mixed Greens": { calorias: 12, proteinas: 1, grasas: 0.1, carbohidratos: 2.4 },
  "Miso Paste": { calorias: 33, proteinas: 2, grasas: 2, carbohidratos: 3 },
  "Mustard": { calorias: 5, proteinas: 0.2, grasas: 0, carbohidratos: 1 },
  "Mushrooms": { calorias: 22, proteinas: 3, grasas: 0.3, carbohidratos: 3.3 },
  "Naan Bread": { calorias: 274, proteinas: 9, grasas: 6, carbohidratos: 45 },
  "Noodles": { calorias: 140, proteinas: 4, grasas: 1, carbohidratos: 27 },
  "Olives": { calorias: 115, proteinas: 1, grasas: 10, carbohidratos: 6 },
  "Olive Oil": { calorias: 119, proteinas: 0, grasas: 14, carbohidratos: 0 },
  "Oregano": { calorias: 23, proteinas: 2.1, grasas: 0.5, carbohidratos: 3.7 },
  "Pasta": { calorias: 220, proteinas: 7, grasas: 1, carbohidratos: 43 },
  "Peas": { calorias: 62, proteinas: 4, grasas: 0.4, carbohidratos: 11 },
  "Pine Nuts": { calorias: 673, proteinas: 14, grasas: 68, carbohidratos: 13 },
  "Pistachios": { calorias: 559, proteinas: 21, grasas: 44, carbohidratos: 28 },
  "Plum Tomatoes": { calorias: 18, proteinas: 1, grasas: 0.2, carbohidratos: 4 },
  "Poppy Seeds": { calorias: 53, proteinas: 1.5, grasas: 4, carbohidratos: 4 },
  "Potatoes": { calorias: 77, proteinas: 2, grasas: 0.1, carbohidratos: 17.6 },
  "Prawns": { calorias: 99, proteinas: 24, grasas: 0.3, carbohidratos: 0.2 },
  "Puff Pastry": { calorias: 406, proteinas: 3, grasas: 29, carbohidratos: 34 },
  "Raisins": { calorias: 299, proteinas: 3, grasas: 0.5, carbohidratos: 79 },
  "Red Onion": { calorias: 40, proteinas: 1, grasas: 0.1, carbohidratos: 9 },
  "Red Pepper": { calorias: 25, proteinas: 1, grasas: 0.2, carbohidratos: 6 },
  "Rice": { calorias: 130, proteinas: 2.7, grasas: 0.3, carbohidratos: 28 },
  "Rice Vinegar": { calorias: 2, proteinas: 0, grasas: 0, carbohidratos: 0.5 },
  "Rosemary": { calorias: 1, proteinas: 0.1, grasas: 0.1, carbohidratos: 0.3 },
  "Salt": { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
  "Salsa": { calorias: 20, proteinas: 1, grasas: 0.2, carbohidratos: 5 },
  "Salsa Verde": { calorias: 25, proteinas: 1, grasas: 1, carbohidratos: 3 },
  "Sausage": { calorias: 250, proteinas: 12, grasas: 22, carbohidratos: 1 },
  "Sausage Meat": { calorias: 250, proteinas: 12, grasas: 22, carbohidratos: 1 },
  "Scallions": { calorias: 32, proteinas: 1.8, grasas: 0.1, carbohidratos: 7.3 },
  "Shallots": { calorias: 72, proteinas: 2, grasas: 0.1, carbohidratos: 16 },
  "Shrimp": { calorias: 85, proteinas: 20, grasas: 0.5, carbohidratos: 1 },
  "Soy Sauce": { calorias: 10, proteinas: 1, grasas: 0, carbohidratos: 1 },
  "Spinach": { calorias: 23, proteinas: 2.9, grasas: 0.4, carbohidratos: 3.6 },
  "Steak": { calorias: 271, proteinas: 28, grasas: 17, carbohidratos: 0 },
  "Sugar": { calorias: 39, proteinas: 0, grasas: 0, carbohidratos: 10 },
  "Sweet Potato": { calorias: 86, proteinas: 1.6, grasas: 0.1, carbohidratos: 20 },
  "Taco Sauce": { calorias: 20, proteinas: 0.3, grasas: 0, carbohidratos: 5 },
  "Tahini": { calorias: 89, proteinas: 2.6, grasas: 7.9, carbohidratos: 3.2 },
  "Tomato": { calorias: 22, proteinas: 1, grasas: 0.2, carbohidratos: 4.7 },
  "Tomato Paste": { calorias: 82, proteinas: 4.3, grasas: 0.4, carbohidratos: 18.9 },
  "Tomato Puree": { calorias: 40, proteinas: 2, grasas: 0.1, carbohidratos: 8 },
  "Tuna": { calorias: 132, proteinas: 28, grasas: 1, carbohidratos: 0 },
  "Turkey": { calorias: 135, proteinas: 30, grasas: 1, carbohidratos: 0 },
  "Vinegar": { calorias: 3, proteinas: 0, grasas: 0, carbohidratos: 0.9 },
  "Worcestershire Sauce": { calorias: 13, proteinas: 1, grasas: 0, carbohidratos: 3 },
  "Yogurt": { calorias: 59, proteinas: 3.5, grasas: 3.3, carbohidratos: 4.7 },
  "Zucchini": { calorias: 17, proteinas: 1.2, grasas: 0.3, carbohidratos: 3.1 },
  "Parmesan Cheese": { calorias: 431, proteinas: 38, grasas: 29, carbohidratos: 4.1 },
  "Peas": { calorias: 81, proteinas: 5.4, grasas: 0.4, carbohidratos: 14.5 },
  "Peanut Butter": { calorias: 588, proteinas: 25, grasas: 50, carbohidratos: 20 },
  "Peanuts": { calorias: 567, proteinas: 25.8, grasas: 49.2, carbohidratos: 16.1 },
  "Pecorino": { calorias: 387, proteinas: 25.0, grasas: 32.0, carbohidratos: 1.5 },
  "Penna Rigate": { calorias: 357, proteinas: 12.0, grasas: 1.5, carbohidratos: 71.0 },
  "Pepper": { calorias: 6, proteinas: 0.2, grasas: 0.1, carbohidratos: 1.5 },
  "Pine Nuts": { calorias: 673, proteinas: 13.7, grasas: 68.0, carbohidratos: 13.1 },
  "Pitted Black Olives": { calorias: 115, proteinas: 0.8, grasas: 10.7, carbohidratos: 6.0 },
  "Plain Flour": { calorias: 364, proteinas: 10.3, grasas: 1.0, carbohidratos: 76.3 },
  "Plum Tomatoes": { calorias: 18, proteinas: 0.9, grasas: 0.2, carbohidratos: 3.9 },
  "Potatoes": { calorias: 77, proteinas: 2.0, grasas: 0.1, carbohidratos: 17.5 },
  "Prawns": { calorias: 99, proteinas: 23.7, grasas: 0.3, carbohidratos: 0.2 },
  "Puff Pastry": { calorias: 320, proteinas: 4.2, grasas: 21.0, carbohidratos: 34.2 },
  "Raspberry Jam": { calorias: 263, proteinas: 0.3, grasas: 0.1, carbohidratos: 64.1 },
  "Raw King Prawns": { calorias: 75, proteinas: 18.0, grasas: 0.5, carbohidratos: 0.0 },
  "Red Chilli Flakes": { calorias: 318, proteinas: 12.0, grasas: 16.0, carbohidratos: 56.0 },
  "Red Chilli": { calorias: 40, proteinas: 1.9, grasas: 0.4, carbohidratos: 9.5 },
  "Red Chilli Powder": { calorias: 282, proteinas: 12.0, grasas: 12.0, carbohidratos: 56.0 },
  "Red Onions": { calorias: 40, proteinas: 1.1, grasas: 0.1, carbohidratos: 9.3 },
  "Red Pepper": { calorias: 31, proteinas: 1.0, grasas: 0.3, carbohidratos: 6.0 },
  "Red Pepper Flakes": { calorias: 318, proteinas: 12.0, grasas: 16.0, carbohidratos: 56.0 },
  "Red Wine": { calorias: 83, proteinas: 0.1, grasas: 0, carbohidratos: 2.6 },
  "Refried Beans": { calorias: 127, proteinas: 8.0, grasas: 4.0, carbohidratos: 20.0 },
  "Rice": { calorias: 130, proteinas: 2.7, grasas: 0.3, carbohidratos: 28.2 },
  "Rice Noodles": { calorias: 192, proteinas: 3.0, grasas: 0.5, carbohidratos: 43.5 },
  "Rice Stick Noodles": { calorias: 192, proteinas: 3.0, grasas: 0.5, carbohidratos: 43.5 },
  "Rice Vermicelli": { calorias: 192, proteinas: 3.0, grasas: 0.5, carbohidratos: 43.5 },
  "Rigatoni": { calorias: 357, proteinas: 12.0, grasas: 1.5, carbohidratos: 71.0 },
  "Rocket": { calorias: 25, proteinas: 2.6, grasas: 0.7, carbohidratos: 3.7 },
  "Rolled Oats": { calorias: 389, proteinas: 16.9, grasas: 6.9, carbohidratos: 66.3 },
  "Saffron": { calorias: 310, proteinas: 10.0, grasas: 5.0, carbohidratos: 65.0 },
  "Sage": { calorias: 315, proteinas: 10.6, grasas: 12.0, carbohidratos: 60.7 },
  "Sake": { calorias: 134, proteinas: 0.2, grasas: 0, carbohidratos: 3.5 },
  "Salsa": { calorias: 34, proteinas: 0.9, grasas: 0.2, carbohidratos: 7.4 },
  "Salt": { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
  "Salted Butter": { calorias: 717, proteinas: 0.9, grasas: 81.0, carbohidratos: 1.0 },
  "Sausages": { calorias: 300, proteinas: 12.0, grasas: 26.0, carbohidratos: 2.0 },
  "Sea Salt": { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 },
  "Self-raising Flour": { calorias: 364, proteinas: 9.7, grasas: 1.1, carbohidratos: 76.0 },
  "Semi-skimmed Milk": { calorias: 46, proteinas: 3.3, grasas: 1.6, carbohidratos: 4.8 },
  "Sesame Seed": { calorias: 573, proteinas: 17.0, grasas: 49.7, carbohidratos: 23.5 },
  "Shallots": { calorias: 72, proteinas: 2.4, grasas: 0.1, carbohidratos: 16.8 },
  "Shredded Mexican Cheese": { calorias: 360, proteinas: 21.0, grasas: 30.0, carbohidratos: 1.0 },
  "Shredded Monterey Jack Cheese": { calorias: 357, proteinas: 24.0, grasas: 28.0, carbohidratos: 3.0 },
  "Small Potatoes": { calorias: 77, proteinas: 2.0, grasas: 0.1, carbohidratos: 17.5 },
  "Smoked Paprika": { calorias: 282, proteinas: 14.0, grasas: 12.0, carbohidratos: 56.0 },
  "Tapioca": { calorias: 358, proteinas: 0.2, grasas: 0.1, carbohidratos: 88.6 },
  "Tartare Sauce": { calorias: 250, proteinas: 1, grasas: 22, carbohidratos: 6 },
  "Tequila": { calorias: 231, proteinas: 0, grasas: 0, carbohidratos: 0 },
  "Thyme": { calorias: 101, proteinas: 5.1, grasas: 1.7, carbohidratos: 24.6 },
  "Tomato Puree": { calorias: 82, proteinas: 3.9, grasas: 0.5, carbohidratos: 18.7 },
  "Tomato Sauce": { calorias: 74, proteinas: 1.3, grasas: 0.4, carbohidratos: 17.3 },
  "Tuna": { calorias: 132, proteinas: 28.3, grasas: 0.9, carbohidratos: 0 },
  "Turmeric": { calorias: 354, proteinas: 7.8, grasas: 9.9, carbohidratos: 64.9 },
  "Turnip": { calorias: 28, proteinas: 0.9, grasas: 0.1, carbohidratos: 6.4 },
  "Vanilla Extract": { calorias: 288, proteinas: 0.1, grasas: 0, carbohidratos: 13.7 },
  "Veal": { calorias: 172, proteinas: 31, grasas: 4.4, carbohidratos: 0 },
  "Vegetable Stock": { calorias: 10, proteinas: 0.4, grasas: 0, carbohidratos: 2 },
  "Vinegar": { calorias: 22, proteinas: 0, grasas: 0, carbohidratos: 5.1 },
  "Worcestershire Sauce": { calorias: 78, proteinas: 0.4, grasas: 0.1, carbohidratos: 19.3 },
  "Yogurt": { calorias: 59, proteinas: 3.5, grasas: 3.3, carbohidratos: 4.7 }


};

const Api = () => {
  const [ingredientes, setIngredientes] = useState([]);
  const [filteredIngredientes, setFilteredIngredientes] = useState([]);
  const [selectedIngredientes, setSelectedIngredientes] = useState([]);
  const [recetasGuardadas, setRecetasGuardadas] = useState([]);
  const [nombreReceta, setNombreReceta] = useState("");
  const [editandoReceta, setEditandoReceta] = useState(null);

  // Obtener lista de ingredientes
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data.meals) {
          setIngredientes(data.meals);
          setFilteredIngredientes(data.meals);
        }
      })
      .catch((error) => console.error("Error al obtener los ingredientes:", error));
  }, []);

  const handleAgregarIngrediente = (nombre) => {
    if (!nombre) return;

    const nuevoIngrediente = {
      nombre,
      cantidad: 0,
      unidad: "g",
      nutricion: null,
    };

    setSelectedIngredientes([...selectedIngredientes, nuevoIngrediente]);
  };

  const handleCantidadChange = (index, valor, tipo) => {
    const nuevosIngredientes = [...selectedIngredientes];
    nuevosIngredientes[index][tipo] = valor;

    const ingredienteInfo = datosNutricionales[nuevosIngredientes[index].nombre];
    if (ingredienteInfo && nuevosIngredientes[index].cantidad > 0) {
      const factor = nuevosIngredientes[index].cantidad / 100;
      nuevosIngredientes[index].nutricion = {
        calorias: (ingredienteInfo.calorias * factor).toFixed(2),
        proteinas: (ingredienteInfo.proteinas * factor).toFixed(2),
        grasas: (ingredienteInfo.grasas * factor).toFixed(2),
        carbohidratos: (ingredienteInfo.carbohidratos * factor).toFixed(2),
      };
    }

    setSelectedIngredientes(nuevosIngredientes);
  };

  const handleEliminarIngrediente = (index) => {
    setSelectedIngredientes(selectedIngredientes.filter((_, i) => i !== index));
  };

  const handleGuardarReceta = () => {
    if (!nombreReceta || selectedIngredientes.length === 0) {
      alert("Ingrese un nombre para la receta y al menos un ingrediente.");
      return;
    }

    const totalNutricion = selectedIngredientes.reduce(
      (totales, ingrediente) => {
        if (ingrediente.nutricion) {
          totales.calorias += parseFloat(ingrediente.nutricion.calorias);
          totales.proteinas += parseFloat(ingrediente.nutricion.proteinas);
          totales.grasas += parseFloat(ingrediente.nutricion.grasas);
          totales.carbohidratos += parseFloat(ingrediente.nutricion.carbohidratos);
        }
        return totales;
      },
      { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 }
    );

    const nuevaReceta = {
      id: editandoReceta ? editandoReceta.id : Date.now(),
      nombre: nombreReceta,
      ingredientes: selectedIngredientes,
      nutricion: totalNutricion,
    };

    if (editandoReceta) {
      setRecetasGuardadas(
        recetasGuardadas.map((receta) =>
          receta.id === editandoReceta.id ? nuevaReceta : receta
        )
      );
      setEditandoReceta(null);
    } else {
      setRecetasGuardadas([...recetasGuardadas, nuevaReceta]);
    }

    setNombreReceta("");
    setSelectedIngredientes([]);
  };

  const handleEditarReceta = (receta) => {
    setNombreReceta(receta.nombre);
    setSelectedIngredientes(receta.ingredientes);
    setEditandoReceta(receta);
  };

  const handleEliminarReceta = (id) => {
    setRecetasGuardadas(recetasGuardadas.filter((receta) => receta.id !== id));
  };

  

  return (
    
    <section id="Crear-recetas" className="secction-api">
      <div className="container-api">
        <h1>{editandoReceta ? "Edita tu receta" : "Crea una nueva receta"}</h1>

        <div className="nombre-receta">
          <label>Nombre de la receta:</label>
          <input
            type="text"
            value={nombreReceta}
            onChange={(e) => setNombreReceta(e.target.value)}
            placeholder="Ingresa el nombre de la receta"
          />
        </div>

        <div className="buscar-ingredientes">
          <label>Buscar ingredientes:</label>
          <select onChange={(e) => handleAgregarIngrediente(e.target.value)}>
            <option value="">Selecciona un ingrediente</option>
            {filteredIngredientes.map((ingrediente) => (
              <option key={ingrediente.idIngredient} value={ingrediente.strIngredient}>
                {ingrediente.strIngredient}
              </option>
              
            ))}
          </select>
        </div>

        {selectedIngredientes.map((ingrediente, index) => (
          <div key={index} className="ingredientes-seleccionados">
            
            <strong>{ingrediente.nombre}</strong>
  
            
            <input
              type="number"
              placeholder="Cantidad"
              value={ingrediente.cantidad}
              onChange={(e) => handleCantidadChange(index, e.target.value, "cantidad")}
            />
            
            <select
              value={ingrediente.unidad}
              onChange={(e) => handleCantidadChange(index, e.target.value, "unidad")}
            >
              <option value="g">g</option>
              <option value="ml">ml</option>
            </select>
            <button type="button" onClick={() => handleEliminarIngrediente(index)}>
              Eliminar
            </button>
          </div>



          
        ))}      


        

        

<div className="guardarreceta-container">
        <button className="button-guardar" type="button" onClick={handleGuardarReceta}>
          {editandoReceta ? "Guardar Cambios" : "Guardar Receta"}
        </button>
        </div>
        </div>

      <div className="recetas-guardadas-container">
        <div className="titulo-guardados">
        <h2>
      {recetasGuardadas.length === 0
        ? "No hay recetas guardadas"
        : "Recetas Guardadas"}
    </h2>
        </div>
        
    {recetasGuardadas.length > 0 &&
      recetasGuardadas.map((receta) => (
        
        <div className="receta-guardada-container-card">
                  <div key={receta.id} className="receta-guardada">
          <div className="receta-header">
            <h3>{receta.nombre}</h3>
            <div className="receta-button">
              <button onClick={() => handleEditarReceta(receta)}>Editar</button>
              <button onClick={() => handleEliminarReceta(receta.id)}>Eliminar</button>
            </div>
          </div>
          <ul className="receta-info">
            {receta.ingredientes.map((ingrediente, index) => (
              <li key={index}>
                {ingrediente.nombre} - {ingrediente.cantidad} {ingrediente.unidad} {" "}

              </li>
            ))}
          </ul>
          <div className="receta-nutricional">
            <strong>Información Nutricional Total:</strong>
            <p>
              Calorías: {receta.nutricion.calorias.toFixed(2)} kcal 
              <br />
              Proteínas:{" "}
              {receta.nutricion.proteinas.toFixed(2)} g  <br />Grasas:{" "}
              {receta.nutricion.grasas.toFixed(2)}  g <br />  Carbohidratos:{" "}
              {receta.nutricion.carbohidratos.toFixed(2)} g
            </p>
          </div>
        </div>
        </div>
      

      ))}
</div>
    </section>

    
    
  );
};

export default Api;































// import React, { useState, useEffect } from "react";

// // Datos nutricionales simulados (valores por 100 gramos)
// const datosNutricionales = {
//   Tomato: { calorias: 18, proteinas: 0.9, grasas: 0.2, carbohidratos: 3.9 },
//   Chicken: { calorias: 165, proteinas: 31, grasas: 3.6, carbohidratos: 0 },
//   Rice: { calorias: 130, proteinas: 2.7, grasas: 0.3, carbohidratos: 28.2 },
//   Potato: { calorias: 77, proteinas: 2, grasas: 0.1, carbohidratos: 17 },
// };

// const Api = () => {
//   const [ingredientes, setIngredientes] = useState([]);
//   const [filteredIngredientes, setFilteredIngredientes] = useState([]);
//   const [busqueda, setBusqueda] = useState("");
//   const [selectedIngredientes, setSelectedIngredientes] = useState([]);
//   const [recetaGuardada, setRecetaGuardada] = useState(null);
//   const [nombreReceta, setNombreReceta] = useState("");

//   // Obtener lista de ingredientes
//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
//       .then((respuesta) => respuesta.json())
//       .then((data) => {
//         if (data.meals) {
//           setIngredientes(data.meals);
//           setFilteredIngredientes(data.meals);
//         }
//       })
//       .catch((error) => console.error("Error al obtener los ingredientes:", error));
//   }, []);

//   // Filtrar ingredientes
//   const handleBusquedaChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setBusqueda(query);
//     setFilteredIngredientes(
//       ingredientes.filter((ingrediente) =>
//         ingrediente.strIngredient.toLowerCase().includes(query)
//       )
//     );
//   };

//   // Agregar ingrediente
//   const handleAgregarIngrediente = (nombre) => {
//     if (!nombre) return;

//     const nuevoIngrediente = {
//       nombre,
//       cantidad: 0,
//       unidad: "g",
//       nutricion: null,
//     };

//     setSelectedIngredientes([...selectedIngredientes, nuevoIngrediente]);
//   };

//   // Actualizar cantidad/unidad y calcular nutrición
//   const handleCantidadChange = (index, valor, tipo) => {
//     const nuevosIngredientes = [...selectedIngredientes];
//     nuevosIngredientes[index][tipo] = valor;

//     // Calcular nutrición
//     const ingredienteInfo = datosNutricionales[nuevosIngredientes[index].nombre];
//     if (ingredienteInfo && nuevosIngredientes[index].cantidad > 0) {
//       const factor = nuevosIngredientes[index].cantidad / 100;
//       nuevosIngredientes[index].nutricion = {
//         calorias: (ingredienteInfo.calorias * factor).toFixed(2),
//         proteinas: (ingredienteInfo.proteinas * factor).toFixed(2),
//         grasas: (ingredienteInfo.grasas * factor).toFixed(2),
//         carbohidratos: (ingredienteInfo.carbohidratos * factor).toFixed(2),
//       };
//     }

//     setSelectedIngredientes(nuevosIngredientes);
//   };

//   // Eliminar ingrediente
//   const handleEliminarIngrediente = (index) => {
//     setSelectedIngredientes(selectedIngredientes.filter((_, i) => i !== index));
//   };

//   // Guardar la receta
//   const handleGuardarReceta = () => {
//     if (!nombreReceta || selectedIngredientes.length === 0) {
//       alert("Por favor ingresa un nombre y al menos un ingrediente para la receta.");
//       return;
//     }
//     setRecetaGuardada({
//       nombre: nombreReceta,
//       ingredientes: selectedIngredientes,
//     });
//     setNombreReceta("");
//     setSelectedIngredientes([]);
//     alert("Receta guardada con éxito");
//   };

//   return (
//     <section className="container-api">
//       <div className="container">
//       <div>
//       <h1>Crea una nueva receta</h1>

//       {/* Nombre de la receta */}
//       <div className="nombre-receta">
//         <label>Nombre de la receta :</label>
//         <input
//           type="text"
//           value={nombreReceta}
//           onChange={(e) => setNombreReceta(e.target.value)}
//           placeholder="Ingresa el nombre de la receta"
//         />
//       </div>

//       {/* Búsqueda de ingredientes */}
//       <div className="buscar-ingredientes">
//         <label>Buscar ingredientes :</label>
//         <select onChange={(e) => handleAgregarIngrediente(e.target.value)}>
//           <option value="">Selecciona un ingrediente</option>
//           {filteredIngredientes.map((ingrediente) => (
//             <option key={ingrediente.idIngredient} value={ingrediente.strIngredient}>
//               {ingrediente.strIngredient}
//             </option>
//           ))}
//         </select>

//       </div>

//       {/* Ingredientes seleccionados */}
      
//       <h4>Ingredientes seleccionados :</h4>
//       {selectedIngredientes.map((ingrediente, index) => (
//         <div key={index} className="ingredientes-seleccionados">
//           <strong>{ingrediente.nombre}</strong>
//           <input
//             type="number"
//             placeholder="Cantidad"
//             value={ingrediente.cantidad}
//             onChange={(e) => handleCantidadChange(index, e.target.value, "cantidad")}
//             min="1"
//           />
          
//           <select
//             value={ingrediente.unidad}
//             onChange={(e) => handleCantidadChange(index, e.target.value, "unidad")}
//           >
//             <option value="g">g</option>
//             <option value="ml">ml</option>
//           </select>
//           <button type="button" onClick={() => handleEliminarIngrediente(index)}>
//             Eliminar
//           </button>
        
//           {/* Información nutricional */}
//           {ingrediente.nutricion && (
//             <div>
//               <em>Información Nutricional:</em>
//               <p>
//                 Calorías: {ingrediente.nutricion.calorias} kcal | Proteínas:{" "}
//                 {ingrediente.nutricion.proteinas} g | Grasas: {ingrediente.nutricion.grasas}{" "}
//                 g | Carbohidratos: {ingrediente.nutricion.carbohidratos} g
//               </p>
//             </div>
//           )}
          
//         </div>
//       ))}

//       {/* Botón para guardar receta */}
//       <button type="button" onClick={handleGuardarReceta}>
//         Guardar Receta
//       </button>
      
//       {/* Mostrar receta guardada */}
//       {recetaGuardada && (
//         <div>
//           <h2>Receta Guardada</h2>
//           <p>
//             <strong>Nombre:</strong> {recetaGuardada.nombre}
//           </p>
//           <h3>Ingredientes:</h3>
//           <ul>
//             {recetaGuardada.ingredientes.map((ingrediente, index) => (
//               <li key={index}>
//                 {ingrediente.nombre} - {ingrediente.cantidad} {ingrediente.unidad} | Calorías:{" "}
//                 {ingrediente.nutricion?.calorias || "N/A"} kcal
//               </li>
//             ))}
//           </ul>
//         </div>
      
//       )}
      
//     </div>
//     </div>
//     </section>
//   );
// };

// export default Api;






