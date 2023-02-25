console.log('Lets get this going!');

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  $('#addEmployeebtn').on('click', addEmployee);
  $('body').on('click', '#removeEmployeeBtn', removeEmployee);

  //document readynow can now use jquery
  //add submit button
  //add delete button
 
}

let employee = []; // empty array to capture all employees plus object literal information


function addEmployee(){
    console.log('in the addEmploee function');
    console.log('employee before newEmployee is added', employee);
    //should capture employee object
      //Get imnput values for employee
    const submitFirstName = $('#firstNameInput').val();
    const submitLastName = $('#lastNameInput').val();
    const submitIdNumber = $('#employeeIdInput').val();
    const submitJobTitle = $('#employeeIdInput').val();
    const submitAnuualSalary = $('#annualSalaryInput').val();

//Capture car values inside an object
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
       console.log('Welcome aboard!', NewEmployee.firstName);
}else{
console.log('Error Bitch!')
alert('Your submission is missing inputs');

//render the DOM after newEmployee is added
render();
MonthlyTotal();
}
}


//adding a function to delete employee when hit

function removeEmployee(){
console.log('In the removeEmployee function');

}

function render(){
console.log('In the render function');
//Resetting the workplacenby emptying before appending
$('#workplace').empty();

//loop over garage array, append each to the employee
 for(person of employee ){

    $('.workplace').append(`
    <table class="workPlace" style="border: 5px solid black">
  <tr>
    <td>${person.firstName}</td> 
    <td>${person.lastName}</td>
    <td>${person.employeeId}</td>
    <td>${person.jobTitle}</td>
    <td>${person.annualSalary}</td>
  </tr>
</table>
    <tr>
        <button class="removeEmployeeBtn">Delete</button>
    </tr>
</body>

</html>
    `); 
  }
}

//Create a function to calculate the total Annual salary of all employees then divide that total by 12 to get the monthly income
    //Ammend the total into the DOM and display it
        //Create an if statement and if the monthly total is above 20,000 then make the monthly box turn red
function MonthlyTotal(){
    console.log('In the monthlyTotal function');

}
