// 1. Create your own resume data in JSON format
let myResume = {
  basics: {
    name: "PREM KUMAR PATHAK",
    email: "nsprem114@gmail.com",
    phone: 9931418942,
    degree: "B.E",
    location: {
      address: "D-131 NEAR SOHRAI BHAWAN HARMU",
      postalCode: 834002,
      city: "RANCHI",
      state: "JHARKHAND",
      country: "India",
    },
    profiles: [
      {
        github: "https://github.com/nsprem114/",
      },
    ],
  },
  work: [
    {
      company: "WEB DESIGN",
      position: "WEB DEVELOPER",
      startDate: "2020-11-04",
      summary: "i am the web designer as a wordpress designer and developer",
    },
  ],
  education: [
    {
      institution: "Himalyan University Itanagar",
      department: "Computer Application",
      studyType: "fulltime",
      "batch start year": 2015,
      "batch end year": 2018,
      gpa: 6.6,
    },
  ],
  skills: [
    {
      name: "HTML, CSS, JAVASCRIPT",
      level: "beginer",
      project: ["School Management System", "Weather App"],
    },
  ],
  languages: [
    {
      language: "Hindi,Enlish",
    },
  ],
  interests: [
    {
      name: "Playing Game,Watching Movies,",
    },
  ],
};
console.log(myResume);

// 2.For the given JSON iterate over all for loops (for, for in, for of, for Each)

var data = [
  {
    id: "prem1",
    msg: "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    task: "zen portal task",
    mail: "nsprem114@gmail.com",
  },
  {
    id: "prem2",
    msg: "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    task: "zen portal task",
    mail: "nsprem114@gmail.com",
  },
];
//for loop
for (var i = 0; i < data.length; i++) {
  var obj = data[i];

  console.log(obj.id);
  console.log(obj.msg);
  console.log(obj.task);
  console.log(obj.mail);
}
//for Each
data.forEach(function (obj) {
  console.log(obj.msg);
});

//for In
for (var key in data) {
  if (data.hasOwnProperty(key)) {
    console.log(data[key].id);
    //console.log(data[key].msg);
  }
}
//for Of
let text = "";
for (let x of data[key].id) {
  text += x;
}
console.log(text);
