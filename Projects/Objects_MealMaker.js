const menu = {
    _meal : '',
    _price : 0,
    set meal(mealToCheck) {
        if ('string' === typeof mealToCheck) {
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if ('number' === typeof priceToCheck) {
            this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for ${this._price}`;
        }
        else {
            return `Meal or price was not set correctly!`;
        }
    }
}

console.log(menu._meal);
console.log(menu._price);

menu._meal = 'french fries';
menu._price = 44;

console.log(menu._meal);  // Prints french fries
console.log(menu._price); // Prints 44

menu.meal = 'Chicken Pot Pie';
menu.price = 18;

console.log(menu._meal);  // Prints Chicken Pot Pie
console.log(menu._price); // Prints 18

console.log(menu.todaysSpecial); // Prints 'Today's Special is Chicken Pot Pie for 18'