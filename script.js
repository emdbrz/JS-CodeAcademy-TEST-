/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const output = document.getElementById('output');
const countKg = document.getElementById('submit-btn');

countKg.addEventListener('click', function (e) {
  e.preventDefault();
  output.innerHTML = '';
  const input = document.getElementById('search').value;
  const pounds = input * 2.2046;
  const grams = input / 0.001;
  const ounce = input * 35.274;

  output.append(` Pounds: ${pounds}(lb),
     Grams: ${grams}(g), 
      Ounces: ${ounce}(oz)`);
});
