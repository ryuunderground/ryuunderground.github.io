const addPersonBTN = document.querySelector(".add_person");
const assignList = document.querySelector(".assign_list");

function delPerson(event) {
  const personContainer = event.target.parentNode;
  personContainer.parentNode.removeChild(personContainer);
}

function addPerson() {
  const personContainer = document.createElement("li");
  personContainer.className = "person-container";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  personContainer.appendChild(nameInput);

  const delPersonBTN = document.createElement("button");
  delPersonBTN.textContent = "❌";
  delPersonBTN.className = "del_person_btn";
  delPersonBTN.addEventListener("click", delPerson);
  personContainer.appendChild(delPersonBTN);

  assignList.appendChild(personContainer);
}

addPersonBTN.addEventListener("click", addPerson);
