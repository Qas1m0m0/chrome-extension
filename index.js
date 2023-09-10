let myLeads = [];
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el')


inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    //Removes text from search after button pressed
    inputEl.value = ''
    renderLeads()
});

//This: below is ONE way of doing it. Loops through the array and then uses the .innerText element to access the content and adds a list when the button is clicked.
// 1. Create element
// 2. setting text content
// 3. APPENDING
// for (let i = 0; i < myLeads.length; i++) {
//     ulEL.innerHTML += '<li>' + myLeads[i] + '</li>'


//This is ANOTHER WAY of doing it. 
// const li = document.createElement('li'); //Create element
// li.textContent = myLeads[i]; // Setting text content to
// ulEl.append(li)
// };

function renderLeads() {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
       listItems += 
       `<li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems;
}