console.log('Lets get this going!');

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  $('#addEmployeebtn').on('click', addEmployee);
  $('body').on('click', '.removeEmployeeBtn', removeEmployee);

  //document readynow can now use jquery
  //add submit button
  //add delete button
 
}

let employee = []; // empty array to capture all employees plus object literal information


function addEmployee(){
    console.log('in the addEmploee function');
    //should capture employee object
      
    const submitFirstName = $('#firstNameInput').val();
    const submitLastName = $('#lastNameInput').val();
    const submitIdNumber = $('#employeeIdInput').val();
    const submitJobTitle = $('#employeeIdInput').val();
    const submitAnuualSalary = $('#annualSalaryInput').val();

    const NewEmployee = {
        firstName: submitFirstName,
        lastName: submitLastName,
        employeeId: submitIdNumber,
        jobTitle: submitJobTitle,
        annualSalary: submitAnuualSalary
    };

    if(submitFirstName && submitLastName && submitIdNumber && submitJobTitle && submitAnuualSalary) {
        console.log(true);
        //if truthy, then run function
       employee.push(NewEmployee);
       console.log('Welcome aboard!', NewEmployee);
}else{
console.log('Error Bitch!')
alert('Your submission is missing inputs');

render();
}
}


//adding a function to delete employee when hit

function removeEmployee(){
console.log('In the removeEmployee function');

}

function render(){
console.log('In the render function');

$('#workplace').empty();

for(person of employee ){

    $('#workplace').append(`
     
    <ul>
        <li>${person.firstName}</li>
        <li>${person.lastName}</li>
        <li>${person.employeeId}</li>
        <li>${person.jobTitle}</li>
        <li>${person.annualSalary}</li>
        <li>
            <button class="removeCarBtn">
            Delete
            </button>
        </li>
    </ul>
   
    `)


}
}

