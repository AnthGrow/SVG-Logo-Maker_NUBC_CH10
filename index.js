const inquirer = require("inquirer");

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
