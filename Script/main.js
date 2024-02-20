const Calculate__btn = document.getElementById("Calculate__btn");
const outputYear = document.querySelector(".result__year");
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

const dayError = document.querySelector(".day__valid");
const monthError = document.querySelector(".month__valid");
const yearError = document.querySelector(".year__valid");


const calcolateAge = (year, month, day) => {
  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  let monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const onBtnClick = () => {
  outputYear.textContent = calcolateAge(
    inputYear.value,
    inputMonth.value,
    inputDay.value
  );
  isDayValeuValid();
  isMonthValeuValid();
  isYearValeuValid();
};

const isDayValeuValid = () => {
  if (inputDay.value > 31 || inputDay.value <= 0 || inputDay === "") {
    dayError.style.left = "0";
    inputDay.style.border = "1px solid red";
    outputYear.innerHTML = "--";
  } else {
    inputDay.style.border = "1px solid var(--color-light-gray)";
    dayError.style.left = "-100%";
  }
};

const isMonthValeuValid = () => {
  if (inputMonth.value > 12 || inputMonth.value <= 0 || inputMonth === "") {
    monthError.style.left = "0";
    inputMonth.style.border = "1px solid red";
    outputYear.innerHTML = "--";
  } else {
    inputMonth.style.border = "1px solid var(--color-light-gray)";
    monthError.style.left = "-100%";
  }
};

const isYearValeuValid = () => {
  if (
    inputYear.value > new Date().getFullYear() ||
    inputYear.value == 0 ||
    inputYear === ""
  ) {
    yearError.style.left = "0";
    inputYear.style.border = "1px solid red";
    outputYear.innerHTML = "--";
  } else {
    inputYear.style.border = "1px solid var(--color-light-gray)";
    yearError.style.left = "-100%";
  }
};

const inputsElemnts = document.querySelectorAll(".card__input");
inputsElemnts.forEach((item) => {
  item.addEventListener("keydown",(event) => event.key === "Enter" && onBtnClick());});

  Calculate__btn.addEventListener("click", onBtnClick);
