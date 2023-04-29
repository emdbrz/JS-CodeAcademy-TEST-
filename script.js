/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const carsOutput = document.getElementById('output');

const cars = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    createCars(data);
  } catch (err) {
    console.log(err);
  }
};
cars();

const createCars = (cars) => {
  cars.forEach((car) => {
    const carsDiv = document.createElement('div');
    const brandDiv = document.createElement('div');
    const brandEl = document.createElement('h3');
    const modelsDiv = document.createElement('div');
    const modelEl = document.createElement('span');

    carsDiv.classList.add('cars-container');
    brandDiv.classList.add('brand');
    modelsDiv.classList.add('all-models');

    brandEl.textContent = car.brand;

    const models = car.models.join(', ');
    modelEl.textContent = models;

    brandDiv.append(brandEl);
    modelsDiv.append(modelEl);
    carsDiv.append(brandDiv, modelEl);
    carsOutput.append(carsDiv);
  });
};
