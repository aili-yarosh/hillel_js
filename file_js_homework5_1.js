var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Функція для додавання нової послуги
function addService(name, price) {
    services[name] = price;
}

// Функція для видалення послуги
function removeService(name) {
    if (services.hasOwnProperty(name)) {
        delete services[name];
        console.log(`Послуга '${name}' видалена.`);
    } else {
        console.log(`Послуга '${name}' не знайдена.`);
    }
}

// Функція для зміни вартості послуги
function updateServicePrice(name, newPrice) {
    if (services.hasOwnProperty(name)) {
        services[name] = newPrice;
        console.log(`Вартість послуги '${name}' змінена на ${newPrice}.`);
    } else {
        console.log(`Послуга '${name}' не знайдена.`);
    }
}

// Перебір та вивід усіх послуг
function displayServices() {
    console.log("Усі доступні послуги та їх вартість:");
    for (var service in services) {
        console.log(`${service}: ${services[service]}`);
    }
}

// Використання функцій
addService('Розбити скло', '200 грн');
updateServicePrice('стрижка', '65 грн');
removeService('гоління');
displayServices();
