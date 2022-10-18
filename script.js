
// set variable to current date and desired format 
var today = moment();
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");

//set time to appear on jumbotron
var interval = setInterval (function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                        );
});

// add event listener to save text from each hour input slot 
$('.saveBtn').on('click', function () {
    
    var textValue = $(this).siblings('.description').val();
    var timeKey = $(this).siblings('.description').attr('id');
    console.log(timeKey);

  
    // save in local storage
    localStorage.setItem(timeKey, textValue);
  });

 // create variables to pull each hour from html text  
 const nine = $('#9')
const ten = $('#10')
const eleven = $('#11')
const twelve = $('#12')
const thirteen = $('#13')
const fourteen = $('#14')
const fifteen = $('#15')
const sixteen = $('#16')
const seventeen = $('#17')


// create function to loop through each hour and recognize if past, present, or future 
function checkTime () {

var currentHour = moment().hours()


$('.description').each(function () {
    var timeBlock = parseInt($(this).attr('id'));

    
    if (timeBlock < currentHour) {
      $(this).addClass('past');
    } // if the timeBlock attribute is equal to the current hour, remove the past and future classes and add the present class
    else if (timeBlock === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } // if timeBlock attribute is greater than the current time, remove the past and present classes and add the future class
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }

})

};

// create interval to run code every 15 minutes to update current hour

myInterval = setInterval(checkTime, 900000);




 


