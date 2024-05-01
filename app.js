const miliSecInYear = 31557600000;
const miliSecondInMonth = 2629800000;
const miliSecondInDay = 86400000;

let intervalId1 = undefined;
let intervalId2 = undefined;

let dateFunction = () => {
  let today = new Date();
  let inptDate = new Date(document.querySelector("#birthDate".value));

  if (inptDate == "" || inptDate == "Enter Valid Date") {
    alert("Enter a Date");
    return;
  }

  if (inptDate > today) {
    alert("Enter Correct Dated");
    return;
  }

  if (
    today.getMonth() == inptDate.getMonth() &&
    today.getDate() == inptDate.getDate()
  ) {
    alert("Happy Birthday To You");
  }

  if (intervalId1 !== undefined) clearInterval(intervalId1);
  getTimeLeft();
  intervalId1 = setInterval(() => {
    getTimeLeft();
  }, 1000);

  if (intervalId2 !== undefined) clearInterval(intervalId2);
  yeaOld();
  intervalId2 = setInterval(() => {
    yeaOld();
  }, 1000);
};

let getTimeLeft = () => {
  let today = new Date();

  const inptDate = new Date(
    document.querySelector("#birthDate").value + "00:00:00"
  );

  let birthdayDate = inptDate;
  birthdayDate.setFullYear(today.getFullYear());

  if (today.getMonth() > inptDate.getMonth()) {
    birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
  }

  let nextBirthdayDate = birthdayDate - today;

  let nextBirthdayInDays = Math.floor(nextBirthdayDate / miliSecondInDay);
  let nextBirthdayInDaysReminder = nextBirthdayDate % miliSecondInDay;

  let nextBirthdayInHour = Math.floor(
    nextBirthdayInDaysReminder / (1000 * 60 * 60)
  );
  let nextBirthdayInHourReminder =
    nextBirthdayInDaysReminder % (1000 * 60 * 60);

  let nextBirthdayInMinutes = Math.floor(
    nextBirthdayInHourReminder / (1000 * 60 * 60)
  );
  let nextBirthdayInMinutesReminder =
    nextBirthdayInHourReminder % (1000 * 60 * 60);

  let nextBirthdayInSeconds = Math.floor(nextBirthdayInMinutesReminder / 1000);

  document.querySelector("#daysLeft").innerHTML =
    "Your Next Birthday is in " + "<br>";
  document.querySelector("#days").innerHTML = nextBirthdayInDays + " D";
  document.querySelector("#hour").innerHTML = nextBirthdayInHour + " H";
  document.querySelector("#min").innerHTML = nextBirthdayInMinutes + " M";
  document.querySelector("#sec").innerHTML = nextBirthdayInSeconds + " S";

  birthdayDate.setSeconds(birthdayDate.getSeconds() - 1);
};
