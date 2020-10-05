// Creating an object of arrays for the courses.  Properties are being created of the course category, course number, and course name are created.
let courses = [
  {
    courseCategory : "ITMS",
    courseNumber : 448,
    courseName : "Cyber Security Technologies",

    // Each object in the array has a function that utilizes the "this" keyword in order to concatenate the parts of each object in the array. 
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
  {
    courseCategory : "IPRO",
    courseNumber : 497,
    courseName : "Digital Service Design 2",
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
  {
    courseCategory : "ITMD",
    courseNumber : 362,
    courseName : "Human-Computer Interaction",
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
  {
    courseCategory : "ITMD",
    courseNumber : 469,
    courseName : "Web Real-Time Communications",
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
  {
    courseCategory : "ITMD",
    courseNumber : 462,
    courseName : "Web Site App Development",
    fullInfo : function(){
      return this.courseCategory + "-" + this.courseNumber + " " + this.courseName;
    }
  },
]

// Sorting through the courses array numerically
courses.sort(function(a, b)
{
  if (a.courseNumber > b.courseNumber)
  { return 1;}
  if (a.courseNumber < b.courseNumber)
  { return -1;}
});

// Creating the function that processes the button
// that sorts the courses array alphabetically
function sortName()
{
  text = "";
  courses.sort(function (a, b)
  {
    if (a.courseName > b.courseName)
    { return 1;}
    if (a.courseName < b.courseName)
    { return -1;}
  })

  // Creating a for loop that iterates the new alphabetical course list
  for (var i = 0; i < courses.length; i++)
  {
    text += ("Course " + (i + 1) + " is: " + courses[i].fullInfo() + "<br / >");
  }
  document.getElementById("one").innerHTML = text;
};

// Creating the function that processes the button
// that sorts the courses array numerically
function sortNumber()
{
  text = "";
  courses.sort(function (a, b)
  {
    if (a.courseNumber > b.courseNumber)
    { return 1;}
    if (a.courseNumber < b.courseNumber)
    { return -1;}
  })

  // Creating a for loop that iterates the new numerical course list
  for (var i = 0; i < courses.length; i++)
  {
    text += ("Course " + (i + 1) + " is: " + courses[i].fullInfo() + "<br / >");
  }
  document.getElementById("one").innerHTML = text;
};

// Creating a function where I am 'popping' the last course object that is contained within the courses array list
function removeCourse()
{
  text = "";

  // Creating a local variable to gather the info for the last course
  lastCourse = courses[courses.length - 1].courseCategory + "-" + courses[courses.length - 1].courseNumber;

  // alerting the user they deleted the course
  window.alert("Course " + this.lastCourse + " has been removed");

  document.getElementById("two").innerHTML = courses;

  // Displaying in the HTML file the course has been removed 
  document.getElementById("two").innerHTML = "Course " + this.lastCourse + " has been removed";

  // Removing the last object within the array
  courses.pop();

  // Now I preview what is left in my courses array list
  for (var i = 0; i < courses.length; i++)
  {
    text += ("Course " + (i + 1) + " is: " + courses[i].fullInfo() + "<br / >");
  }
  document.getElementById("one").innerHTML = text;
};

// Creating an array that will alert the web browser when first loaded, before displaying the class results on the webpage itself
var classCourses = ["ITMS-448 Cyber Security Technologies", "\nIPRO-497 Digital Service Design 2", "\nITMD-362 Human-Computer Interaction", "\nITMD-469 Web Real-Time Communications", "\nITMD-462 Web site App Development"];

// Print the course concatenations to the HTML file
text = "";

for (var i = 0; i < courses.length; i++)
{
  text += ("Course " + (i + 1) + " is: " + courses[i].fullInfo() + "<br / >");

  document.getElementById("one").innerHTML = text;
}

// Alert the webpage when its first loaded
alert(classCourses);