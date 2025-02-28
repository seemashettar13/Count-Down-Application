document.addEventListener("DOMContentLoaded", function() {
    let countdownInterval;

     //set the minimum selectable date to the current date and time
    document.getElementById("userDate").setAttribute("min", new Date().toISOString().slice(0, 16));


    document.getElementById("startCountdown").addEventListener("click", function() {
        clearInterval(countdownInterval); // Clear previous countdown (if any)

        const userDate = document.getElementById("userDate").value;
        if (!userDate) {
            alert("Please enter a valid date!");
            return;
        }

        const endDate = new Date(userDate).getTime();     //convert user-selected date to milliseconds
        startCountdown(endDate);
    });

    function startCountdown(endDate) {
        countdownInterval = setInterval(function() {
            const now = new Date().getTime();  //current time in milliseconds
            const timeLeft = endDate - now;   //calculate the remaining time in milliseconds

            if (timeLeft <= 0) {            
                clearInterval(countdownInterval);   //stop the countdown when time is up
              document.getElementById("days").value = 0;    
                document.getElementById("hrs").value = 0;
                document.getElementById("min").value = 0;
                document.getElementById("sec").value = 0;
                return;
            }
 

            //converting remaining time into days, hours, minutes, and seconds
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));                      
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));   
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));          
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);                      


              //updating the countdown display
            document.getElementById("days").value = days;
            document.getElementById("hrs").value = hours;
            document.getElementById("min").value = minutes;
            document.getElementById("sec").value = seconds;
        }, 1000);
    }
});
