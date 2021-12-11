

function getMyDate(localtime_epoch) {

    const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    const month = new Array(10);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
       // const localtime_epoch = tasks.location.localtime_epoch
        let fixedEpoch = (localtime_epoch * 1000)
        let timeTolop = new Date(fixedEpoch).getHours();
        let d = new Date(fixedEpoch).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let myMonth = month[new Date(fixedEpoch).getMonth()];
        let day = weekday[new Date(fixedEpoch).getDay()];
        let dayOfMonth = new Date(fixedEpoch).getDate();
       // console.log(d)

      
     
   


      //  console.log(day)
        return {
            day:day,
            timeTolop:timeTolop,
            d:d,
            myMonth:myMonth,
            dayOfMonth:dayOfMonth

        }
   

}

export default getMyDate