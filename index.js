class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo(){
        return `Type: ${this.type}, Brand: ${this.brand}`;
    }
    getPrice(){
        return `Price: ${this.price}`;
    }
}

class Car extends Transport{
    constructor(type, price, brand, doors){
        super(type, price, brand);
        this.doors = doors;
    }
    getDoorsCount() {
        return `Doors: ${this.doors}`;
    }
}

class Bike extends Transport{
    constructor(type, price, brand, maxSpeed){
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return `MaxSpeed: ${this.maxSpeed} km/h`;
    }
}

const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

  const transportInfoDiv = document.getElementById('transportInfo');
  const transports = data.map(item => {
    const transportDiv = document.createElement('div');
    transportDiv.classList.add('transport-item');

    const transportType = document.createElement('p');
    transportType.textContent = `Type: ${item.type}`;

    const transportBrand = document.createElement('p');
    transportBrand.textContent = `Brand: ${item.brand}`;

    const transportPrice = document.createElement('p');
    transportPrice.textContent = `Price: ${item.price}`;

    const transportImage = document.createElement('img');
    transportImage.src = item.image;
    transportImage.alt = `${item.brand} ${item.type}`;

    transportDiv.appendChild(transportType);
    transportDiv.appendChild(transportBrand);
    transportDiv.appendChild(transportPrice);
    transportDiv.appendChild(transportImage);

    transportInfoDiv.appendChild(transportDiv);
});