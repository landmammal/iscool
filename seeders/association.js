const pry = require("pryjs");
const models = require("./models");
const User = models.User;
const Course = models.Course;
const CourseRegistration = models.CourseRegistration;

// creating User
// User.create({
//   id: "46fff529-0164-4896-a628-ab369dad4888",
//   fullname: "dev ops",
//   DOB: "04/03/1990",
//   organization: "JustBreath&code",
//   email: "live2create@male.com",
//   password: "gianinna"
// });

// ****** creating a course
// Course.create({
//   id: "b7bce2f4-1c49-4a14-8c1a-32ad1233b02f",
//   title: "Remember Water",
//   UserId: "46fff529-0164-4896-a628-ab369dad4888"
// });

////// ******geting courses from user******
// User.findByPk("46fff529-0164-4896-a628-ab369dad4887", {
//   include: ["courses"]
// })
//   .then(function(user) {
//     // Get the Company with Users (employes) datas included
//     console.log("user courses: " + "");
//     eval(pry.it);
//     // Get the Users (employes) records only
//     // console.log(company.get().employes)
//   })
//   .catch(err => {
//     console.log("Error while find company : ", err);
//   });

////// ******geting students and creator from a course******
Course.findByPk("b7bce2f4-1c49-4a14-8c1a-32ad1233b02e", {
  include: ["creator", "students"]
})
  .then(function(course) {
    // Get the Company with Users (employes) datas included
    console.log("Students: ");
    eval(pry.it);
    // Get the Users (employes) records only
    // console.log(company.get().employes)
  })
  .catch(err => {
    console.log("Error while find company : ", err);
  });

// **********register a student to a course
// CourseRegistration.create({
//   status: false,
//   UserId: "46fff529-0164-4896-a628-ab369dad4887",
//   CourseId: "b7bce2f4-1c49-4a14-8c1a-32ad1233b02e"
// }).then(function(registration) {
//   eval(pry.it);
// });
//   .catch(err => console.log("Error while Users search : ", err));

// User.findByPk("b90fe645-45f4-42b4-96b6-7b7f1dbf0c5c", {
//   include: ["courses"]
// })
//   .then(function(course) {
//     // Get the Company with Users (employes) datas included
//     console.log("course ");
//     eval(pry.it);
//     // Get the Users (employes) records only
//     // console.log(company.get().employes)
//   })
//   .catch(err => {
//     console.log("Error while find company : ", err);
//   });
