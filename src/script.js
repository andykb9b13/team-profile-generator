

const outerDiv = document.createElement('div');
document.body.appendChild(outerDiv)

function makeDiv() {
    let h2 = document.createElement('h2');
    let ul = document.createElement('ul');
    let managerName = document.createElement('li');
    let employeeId = document.createElement('li');
    let employeeEmail = document.createElement('li');
    let github = document.createElement('li');
    outerDiv.appendChild(h2);
    outerDiv.appendChild(ul);
    ul.appendChild(managerName);
    ul.appendChild(employeeId);
    ul.appendChild(employeeEmail);
    ul.appendChild(github);
}



