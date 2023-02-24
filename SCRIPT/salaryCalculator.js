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
      
    let employee = {
        firstname: firstName,
        lastName: lastName,
        idNumber: idNumber,
        jobTitle: jobTitle,
        annualSalary: annualSalary
    }

}

//adding a function to delete employee when hit

function removeEmployee(){
console.log('In the removeEmployee function');

}