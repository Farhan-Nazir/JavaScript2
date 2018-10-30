"use strict";

const monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180
  },
  {
    name: "Some web development",
    duration: 120
  },
  {
    name: "Fix homework for class10",
    duration: 20
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  }
];

const tuesday = [
  {
    name: "Keep writing summary",
    duration: 240
  },
  {
    name: "Some more web development",
    duration: 180
  },
  {
    name: "Staring out the window",
    duration: 10
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  },
  {
    name: "Look at application assignments new students",
    duration: 40
  }
];

const tasks = monday.concat(tuesday);
//console.log(tasks);
// Add your code here
function minsToHours() {
  const durations = tasks.map(duration => {
    if (duration.duration >= 60) {
      return Math.floor(duration.duration / 60);
    } else {
      //return `${duration.duration % 60} mins`;
      return `${duration.duration % 60} mins`;
    }
  });
  console.log("durations are converted into Hours\n", durations);
}

function filterTwoHours() {
  const greaterThanTwo = tasks.filter(
    task => Math.floor(task.duration / 60) >= 2
  );
  console.log("Greater than two hours tasks\n", greaterThanTwo);
}

function paymentCalc() {
  const payment = tasks.map(task => (task.duration / 60) * 50);
  const total = payment.reduce((sum, pay) => sum + pay);
  console.log("Total payment: €", total.toFixed(2));
}
minsToHours();
filterTwoHours();
paymentCalc();
