let myLeads = ['dummy data', 'also dummy data'];
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn');
const ulEL = document.querySelector('#ul-el')


inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
    ulEL.innerHTML += '<li>' + myLeads[i] + '</li>'
};
