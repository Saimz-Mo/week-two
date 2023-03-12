const MALE_NAMES = ("Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame");
const FEMALE_NAMES = ("Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama");
let userAkanName = null;
let gender = null;

function fetchUserInfo(){
    let birthYear = prompt("Enter your year of birth");
    let cc = parseInt(birthYear.slice(0,2));
    let yy = parseInt(birthYear.slice(2, ));
    let mm = parseInt(prompt("Enter your month of birth"));
    let dd = parseInt(prompt("Enter your date of birth"));
    gender = prompt("Enter your gender");

    let indexOfDay = Math.floor((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7)
    return indexOfDay;
}

function calculateDayIndex(cc, yy, mm, dd){
    let indexOfDay = Math.floor((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7)
    return indexOfDay;
}

function getAkanName(){
    let indexOfDay = calculateDayIndex();
    if (gender == "male"){
        userAkanName = MALE_NAMES[indexOfDay];
    } else if (gender == "female"){
        userAkanName = FEMALE_NAMES[indexOfDay];
    } else {
        console.log("Gender Is Invalid");
    }
}

function main(){
    let indexOfDay = fetchUserInfo();
    getAkanName(indexOfDay);
    console.log(getAkanName);
}