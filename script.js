const form = document.querySelector('.login-form');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const eyeIcon = document.querySelector('.eye-icon');
const sectionLogin = document.querySelector('#section-login')
const btnLogin = document.querySelector('.btn-login');
const sectionOrder = document.querySelector('#section-order')

function togglePassword() {
  if (password.type === 'password') {
    eyeIcon.src = '../assets/view.png';
    password.type = 'text';
  }
  else {
    eyeIcon.src = '../assets/hide.png';
    password.type = 'password';
  }
}

function submitData() {
  sectionLogin.classList.add("hidden");
  sectionOrder.classList.remove("hidden");
  console.log("entrouuuu")
}

eyeIcon.addEventListener('click', togglePassword);





const orders = document.querySelectorAll('tbody tr');
const modal = document.querySelector('.order-modal');
const modalContent = document.querySelector('.modal-content');
const titleModal = document.querySelector('.modal-content h1');
const btnModal = document.querySelector('.btn-tracking');

function showModal(e) {
  console.log(e.target);
  titleModal.textContent = `Pedido nº ${e.target.id}`;
  modal.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
}

function redirectTracking() {
  window.location.href = "../final/final.html"
}

orders.forEach(order => order.addEventListener('click', e => showModal(e)));
modal.addEventListener('click', closeModal);
modalContent.addEventListener('click', e => e.stopPropagation());
btnModal.addEventListener('click', redirectTracking);