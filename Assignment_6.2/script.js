var recipeName,
    preparationTime,
    recipeBy,
    isVegetarian,
    calories;

function list() {
    recipeName = 'Creamy squash linguine';
    preparationTime = 45;
    recipeBy = 'Jimmy Cutter';
    isVegetarian = true;
    calories = 223.7;
    console.log('Recipe Details\n--------------------')
    printlist();
    updatedList();
}
function updatedList() { 
    console.log('Recipe Details after update\n------------------------------------')
    preparationTime = 60;
    recipeBy = 'Jimmy Cutter George';
    printlist();
}

function printlist() {     //Print the list details
    console.log('Recipe Name:' + recipeName);
    console.log('Preparation Time:' + preparationTime);
    console.log('Recipe By:' + recipeBy);
    console.log('is Vegetarian:' + isVegetarian);
    console.log('Calories:' + calories);
}
list();




