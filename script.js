/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const button = document.getElementById('btn');
const output = document.getElementById('output');

const userList = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    createUsers(data);
  } catch (err) {
    console.log(err);
  }
};
button.addEventListener('click', () => {
  button.setAttribute('disabled', true);

  userList();
});
const createUsers = (users) => {
  output.innerHTML = '';
  users.forEach((users) => {
    const containerEl = document.createElement('div');
    const imageEl = document.createElement('img');
    const contentEl = document.createElement('div');
    const loginEl = document.createElement('h2');

    containerEl.classList.add('user');
    imageEl.src = users.avatar_url;
    imageEl.alt = 'user Image';
    contentEl.classList.add('content');
    loginEl.textContent = users.login;

    containerEl.append(imageEl, loginEl);
    output.append(containerEl);
  });
};
