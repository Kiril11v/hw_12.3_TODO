const tasks = document.getElementById('taskList');
const newTask = document.getElementById('addTask');
const text = document.getElementById('taskText');

tasks.addEventListener('click', function ({ target }){ // delete element
    if (target.tagName === 'BUTTON') {
       const wrapper = target.closest('.item'); // go up
        wrapper.remove(); // remove element .item
    }
})

newTask.addEventListener('submit', function(event) { // create element
    event.preventDefault(); // не перезавантажує сторінку при відправленні
    const txt = text.value.trim(); // прибирає лишні пробіли

    if (txt !== '') { // if field is not empty
        const li = document.createElement('li'); // create li
        li.classList.add('item'); // add class

        const p = document.createElement('p'); // create p
        p.textContent = txt; // add text
        li.appendChild(p); // add in li

        const btnDel = document.createElement('button');
        btnDel.textContent = 'delete';
        li.appendChild(btnDel); // add button in item
        btnDel.classList.add('button');
        tasks.appendChild(li); // add item in list
        text.value = ''; // clear after click
    };
});
