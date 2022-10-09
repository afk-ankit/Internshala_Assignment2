const convertDate = (date) => {
    //checking the format of the date in HH:MM:SSAM/PM with the help of regex
    if (/^((1[0-2]|0?[0-9]):[0-5]?[0-9]:[0-5][0-9]([AP][M]))$/.test(date)) {
        const newarr = date.split(':');
        const third = String(newarr[2]);
        //extracting the hour,minutes,seconds and Am/Pm from the string
        let hour = Number(newarr[0]);
        let minutes = Number(newarr[1]);
        let second = Number(third.substring(0, 2))
        let time = third.substring(2, 4);
        if (time == 'AM') {
            hour = (Number(hour) % 12)
            let remainder = 0;
            let carry = 0
            //seconds
            remainder = (second + 45) % 60;
            carry = Math.floor((second + 45) / 60);
            second = remainder;

            //minutes
            remainder = (carry + minutes + 45) % 60;
            carry = Math.floor((carry + minutes + 45) / 60);
            minutes = remainder;

            //hour
            hour = (carry + hour);
            console.log(hour + ":" + minutes + ":" + second);
        }
        else {
            hour = 12 + (hour % 12);
            let remainder = 0;
            let carry = 0
            //seconds
            remainder = (second + 45) % 60;
            carry = Math.floor((second + 45) / 60);
            second = remainder;

            //minutes
            remainder = (carry + minutes + 45) % 60;
            carry = Math.floor((carry + minutes + 45) / 60);
            minutes = remainder;

            //hour
            hour = (carry + hour);
            console.log(hour + ":" + minutes + ":" + second);
        }

    }
    else {
        console.log("Please enter the time in the format HH:MM:SSAM/PM")
    }
}

convertDate('12:59:59AM')