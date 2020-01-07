let addEmail = document.getElementById("addEmail");
let emailAddresses = [];

function addEmailAddress() {
  let emailList = document.getElementById("");
  let li = document.createElement("li");
  let inputvalue = document.getElementById("add-input-value").value;
  let textNode = document.createTextNode(inputvalue);
  li.appendChild(textNode);
  // emailAddresses.push(inputvalue);
  if (!emailAddresses.includes(inputvalue)) {
    emailAddresses.push(inputvalue);
    let valueToAppend = ` <div class="parent-element hide"><li class="email-list__item">
      <input type="checkbox" onclick="emailCheckboxState(this)">
    </li>
    <li class="email-list__item email-address-value">
      ${inputvalue}
    </li>
    <li class="email-list__item">
    <img src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="" onclick="deleteAddress(this)">
    </li> </div>`;
    document.getElementById("a").insertAdjacentHTML("beforeend", valueToAppend);
  } else {
    alert("exists");
  }
}

function ValidateEmail() {
  let inputvalue = document.getElementById("add-input-value").value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputvalue)) {
    addEmailAddress();
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
  // return (false)
}
addEmail.addEventListener("click", ValidateEmail);

let isChecked = false;

function checkboxState() {
  let hideElements = document.querySelectorAll(".hide");
  if (document.getElementById("show-checkbox").checked) {
    isChecked = true;
    hideElements.forEach(a => {
      a.style.display = "none";
    });
    // hideElements.classList.add("none");
  } else {
    isChecked = false;
    hideElements.forEach(a => {
      a.style.display = "flex";
    });
  }
}

function emailCheckboxState(thisCheckbox) {
  let parentElement = thisCheckbox.closest(".parent-element");
  if (thisCheckbox.checked) {
    parentElement.classList.remove("hide");
    parentElement.classList.add("show");
  } else {
    parentElement.classList.remove("show");
    parentElement.classList.add("hide");
    if (isChecked) {
      parentElement.style.display = "none";
    }
  }
}

function deleteAddress(thisValue) {
  let parentElement = thisValue.closest(".parent-element");
  let inputValue =
    thisValue.parentNode.previousSibling.previousElementSibling.textContent;

  let index = emailAddresses.indexOf(inputValue);
  emailAddresses.splice(index, 1);
  parentElement.remove();
}
