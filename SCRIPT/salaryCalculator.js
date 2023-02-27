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


function addEmployee() {
  //console.log('employee before newEmployee is added', employee);
  //should capture employee object
  //Get imnput values for employee
  const firstNameInput = $('#firstNameInput').val();
  const lastNameInput = $('#lastNameInput').val();
  const employeeIdInput = $('#employeeIdInput').val();
  const jobTitleInput = $('#employeeIdInput').val();
  const annualSalaryInput = $('#annualSalaryInput').val();

  //console.log to show that I can see the values of all inputs in array
  if (firstNameInput && lastNameInput && employeeIdInput && jobTitleInput && annualSalaryInput) {

    //if truthy, then run function
    console.log(true);

    //Capture employee values inside an object
    let NewEmployee = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      employeeId: employeeIdInput,
      jobTitle: jobTitleInput,
      annualSalary: annualSalaryInput
    };
    console.log('Welcome aboard!', NewEmployee.firstName);

    employee.push(NewEmployee);
    monthlyCosts();
    render();
    console.log(NewEmployee);
  } else {
    console.log('Please try again');
    alert('Your Submission is missing inputs');
  }
  //resetting the input fields
  resetInputFields();

};

//create a function to delete the input fields of the array
function resetInputFields() {

  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#employeeIdInput').val('');
  $('#jobTitleInput').val('');
  $('#annualSalaryInput').val('');

}

//adding a function to delete employee when hit

function removeEmployee() {
  console.log('In the removeEmployee function');

  //New array to replace employee
  let NewEmployee = [];

  const employeeToDeleteSalary = $(this).parent().siblings().last().text();
    console.log('Employee to fire', employeeToDeleteSalary);
  for (let person of employee) {
    if (person.annualSalary !== employeeToDeleteSalary) {
      console.log('This employee is ok.', person);
      NewEmployee.push(person);
    }
  }
  employee = NewEmployee;
  render();
}

function render() {
  console.log('In the render function');
  //Resetting the employeeList emptying before appending
  $('#employeeinfo').empty();

  //loop over garage array, append each to the employee
  for (person of employee) {
    console.log('Individual employee', employee);

    $('#employeeinfo').append(`


    <tr>     
      <th>First Name</th>
      <th>Last Name</th>
      <th>Employee ID</th>
      <th>Job Title</th>
      <th>Annual Salary</th>
    </tr>
  
    <tr>  
      <td>${person.firstName}</td> 
      <td>${person.lastName}</td>
      <td>${person.employeeId}</td>
      <td>${person.jobTitle}</td>
      <td>${person.annualSalary}</td>
    
      <td>
        <button class='removeEmployeeBtn'>
        Delete
        </button>
        </td>
    </tr>
    `);
  }
}

//Create a function to calculate the total Annual salary of all employees then divide that total by 12 to get the monthly income
//Ammend the total into the DOM and display it
//Create an if statement and if the monthly total is above 20,000 then make the monthly box turn red
function monthlyCosts() {
  console.log('In the monthlyCosts function');

  //Need to input logic to add the values of each object
  // annualSalary and divide it by 12 to get monthly salary

  let monthlyCosts = 0;
  let totalMonthlyCosts = 0;

  for (let i = 0; i < employee.length; i++) {
    monthlyCosts += Number(employee[i].annualSalary);
    console.log(' monthly costs total: ', monthlyCosts);



    console.log(totalMonthlyCosts);
  }
  totalMonthlyCosts = (monthlyCosts / 12);
  let el = $('#monthlyCostInput');
  //Make an if statement to state if total monthly costs is > 20000, turns that number red.
  if (Number(totalMonthlyCosts) > 20000) {
    $('#monthlyCostInput').css('background-color', 'red');

  }
  el.empty();
  el.append(totalMonthlyCosts);

}
