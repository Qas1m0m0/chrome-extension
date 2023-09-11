let myLeads = [];
let oldLeads = [];
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem('myLeads'));

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

function render(leads) {
    let listItems = ''
    for (let i = 0; i < leads.length; i++) {
       listItems += 
       `<li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = [];
    render(myLeads)
})

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    //Removes text from search after button pressed
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
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

