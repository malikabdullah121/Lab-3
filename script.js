 const form = document.getElementById("contact-form");
const nameInput = document.getElementById("Full Name");
const ageInput = document.getElementById("Age");
const dobInput = document.getElementById("Date of Birth");
const emailInput = document.getElementById("Email Address");
const passwordInput = document.getElementById("Password");
const cnicInput = document.getElementById("CNIC Number");
const phoneInput = document.getElementById("Phone Number");
const addressInput = document.getElementById("Address");
const clearBtn = document.getElementById("clear-btn");
const genderSelect = document.getElementsByName("Gender");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selectedGender = document.querySelector('input[name="Gender"]:checked');
  const genderValue = selectedGender ? selectedGender.value : "";
  localStorage.setItem("visitorName", nameInput.value);
  localStorage.setItem("visitorAge", ageInput.value);
  localStorage.setItem("visitorDob", dobInput.value);
  localStorage.setItem("visitorGender", genderSelect.value);
  localStorage.setItem("visitorEmail", emailInput.value);
  localStorage.setItem("visitorPassword", passwordInput.value);
  localStorage.setItem("visitorCnic", cnicInput.value);
  localStorage.setItem("visitorPhone", phoneInput.value);
  localStorage.setItem("visitorAddress", addressInput.value);
  alert("Thanks, " + nameInput.value + "! Saved locally.");
});

window.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("visitorName");
  const savedAge = localStorage.getItem("visitorAge");
  const savedDob = localStorage.getItem("visitorDob");
  const savedGender = localStorage.getItem("visitorGender");
  const savedEmail = localStorage.getItem("visitorEmail");
  const savedPassword = localStorage.getItem("visitorPassword");
  const savedCnic = localStorage.getItem("visitorCnic");
  const savedPhone = localStorage.getItem("visitorPhone");
  const savedAddress = localStorage.getItem("visitorAddress");

  if (savedName) {
    nameInput.value = savedName;
  }
  if (savedAge) {
    ageInput.value = savedAge;
  }
  if (savedDob) {
    dobInput.value = savedDob;
  }
  if (savedEmail) {
    emailInput.value = savedEmail;
  }
  if (savedPassword) {
    passwordInput.value = savedPassword;
  }
  if (savedCnic) {
    cnicInput.value = savedCnic;
  }
  if (savedPhone) {
    phoneInput.value = savedPhone;
  }
  if (savedAddress) {
    addressInput.value = savedAddress;
  }
  if (savedGender) {
    const genderRadio = document.querySelector(`input[name="Gender"][value="${savedGender}"]`);
    if (genderRadio) genderRadio.checked = true;
  }
});

document.getElementById("clear-btn").addEventListener("click", function () {
  localStorage.removeItem("visitorName");
  localStorage.removeItem("visitorAge");
  localStorage.removeItem("visitorDob");
  localStorage.removeItem("visitorGender");
  localStorage.removeItem("visitorEmail");
  localStorage.removeItem("visitorPassword");
  localStorage.removeItem("visitorCnic");
  localStorage.removeItem("visitorPhone");
  localStorage.removeItem("visitorAddress");
  form.reset();
  alert("Saved data cleared.");
});

