const form = document.querySelector('form');
const unameInput = document.querySelector('input[name="uname"]');
const pswInput = document.querySelector('input[name="psw"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const uname = unameInput.value.trim();
  const psw = pswInput.value.trim();

  if (uname === '' || psw === '') {
    alert('Please fill in all fields');
    return;
  }

  // Implement authentication logic here
  // For example, you can send a request to a server-side script to verify the credentials
  // ...
});