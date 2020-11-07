const user = {
    changeName(str) {
        this.name = str}
};

user.name  = "John";
console.log(user.name);
user.surname = "Smith";
console.log(user.surname);
user.name = "Pete";
console.log(user.name);

user.changeName ("Auf");
console.log(user.name);
delete user.name ;
console.log(user.name);
