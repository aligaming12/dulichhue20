window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 900); // Giả lập loading 0.9s
}); 

// Popup đăng nhập/đăng ký
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');

if (loginBtn && registerBtn) {
  loginBtn.onclick = () => { loginModal.style.display = 'flex'; };
  registerBtn.onclick = () => { registerModal.style.display = 'flex'; };
  closeLogin.onclick = () => { loginModal.style.display = 'none'; };
  closeRegister.onclick = () => { registerModal.style.display = 'none'; };
  window.onclick = function(event) {
    if (event.target === loginModal) loginModal.style.display = 'none';
    if (event.target === registerModal) registerModal.style.display = 'none';
  };
} 

// Popup đăng nhập/đăng ký dạng tab
const memberBtn = document.getElementById('memberBtn');
const memberModal = document.getElementById('memberModal');
const closeMember = document.getElementById('closeMember');
const tabLogin = document.getElementById('tabLogin');
const tabRegister = document.getElementById('tabRegister');
const tabLoginContent = document.getElementById('tabLoginContent');
const tabRegisterContent = document.getElementById('tabRegisterContent');

if (memberBtn && memberModal) {
  memberBtn.onclick = () => { memberModal.style.display = 'flex'; };
  closeMember.onclick = () => { memberModal.style.display = 'none'; };
  window.onclick = function(event) {
    if (event.target === memberModal) memberModal.style.display = 'none';
  };
  tabLogin.onclick = () => {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    tabLoginContent.classList.add('active');
    tabRegisterContent.classList.remove('active');
  };
  tabRegister.onclick = () => {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    tabRegisterContent.classList.add('active');
    tabLoginContent.classList.remove('active');
  };
} 