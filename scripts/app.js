function saveTask() {
    console.log('saving...');

    // get values
    const title = $('#inputTitle').val();
    const description = $('#inputDescription').val();
    const startDate = $('#inputStartDate').val();
    const budget = $('#inputBudget').val();
    const status = $('#inputStatus').val();
    const color = $('#inputColor').val();
    console.log(title, description, startDate, budget, status, color);



    let task = new Task(title, description, startDate, budget, status, color);
    console.log(task);
}

function init() {
    console.log('this is the task manager');
    // load data
    


    // hook events
    $('#btnSave').click(saveTask)
}

window.onload = init;