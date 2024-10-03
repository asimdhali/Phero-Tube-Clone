// const isVerified = true;

// if(isVerified === true){
//     console.log('user is verified');
// } else{
//     console.log("user is not verified");
// }

function getTimeString(time){
    // get hour and rest seconds
    const hour = parseInt(time / 3600);
    let remaingSecond = time % 3600;
    const minute = parseInt(remaingSecond / 60);
    remaingSecond = remaingSecond % 60;
    return `${hour} hour ${minute} minute ${remaingSecond} second ago`
}

console.log(getTimeString(7865))