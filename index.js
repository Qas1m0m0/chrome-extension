let myLeads = [];
let oldLeads = [];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
const deleteBtn = document.querySelector('#delete-btn');
const leadsFromLocalStorage = JSON.parse( localStorage.getItem('myLeads'));
const tabBtn = document.querySelector('#tab-btn');

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

tabBtn.addEventListener('click', function() {
    //console.log(tabs[0].url)

    //Access chrome object (tabs) with the query method(query)- grabbing a hold of tabs(querying them). Specify that by wanting ACTIVE tab(the one currently open, Alongside cureent window(could have multiple broswer windows open, so specify which window(active).Then write function, which will be triggered when chrome finds the tab function- when triggers it'll run tab variable;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
    })
});
   

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

