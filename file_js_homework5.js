
let obj = {
    name: "Анна",
    favoriteColor: "Синій",
    hobby: "Гра на гітарі",

    getInfo: function() {
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

obj.getInfo();

obj.newProperty = "Нова властивість!";

obj.getInfo();
