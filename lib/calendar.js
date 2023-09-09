


const getDayOfWeek = () => {

    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    return daysOfWeek[new Date().getDay()];

}





module.exports = {
    getDayOfWeek,

};