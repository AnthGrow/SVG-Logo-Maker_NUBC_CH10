const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("lib/shapes");

//require write file
//require render

//prompt from user generate object
//object creates svg file

//user input creates shape
//svg lands in examples

//order of operation - prompt user - create shape - create svg - create text - write .svg

//prompt for text

inquirer
  .prompt([
    {
      name: "text",
      message: "Please, enter up to three characters",
    },

    {
      name: "textColor",
      message: "Please select a text color",
    },

    {
      //   type: "list",
      name: "shape",
      message: "Select a shape",
      choices: ["circle", "triangle", "square"],
    },

    {
      name: "bgcolor",
      message: "select a background color",
    },
  ])
  .then(
    (answers) => {
      console.info("text", answers.text);
    }

    //   .catch((error) => {
    //     if (error.isTtyError) {

    //     }
    //   },
  );
