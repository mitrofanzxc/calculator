# Deploy: [Link](https://mitrofanzxc.github.io/calculator/)

### `npm i`

Install all dependencies.

### `npm run start`

Run the app in the development mode.

### `npm run watch`

Keep track of all changes.

### `npm run cypress:open`

Start testing the app.

## Requirements of the project:

- [x] Need to implement a calculator application. The application must provide basic arithmetic operations, an expression builder, and a complete history of all expressions;
- [x] Mandatory Component Model:
  - Header - should display the application title as well as links to other pages;
  - Calculator - root element for calculator data management (logic for storing history, operations, current state, etc.);
  - Display - displays calculator input, expressions and history;
  - History - displays a list of previously performed operations;
  - ControlPanel - used to manage calculator interactions that are not related to settlement transactions. For example, it provides functionality to open/hide history;
  - Keypad - used to enter operands, as well as perform various operations on these operands;
- [x] Required functionality:
  - Addition;
  - Subtraction;
  - Multiplication;
  - Division;
  - Switch sign;
  - Expression builder;
  - Operations history;
  - Show full history;
  - Clearing history;
  - Clearing a Computed Value and an Expression;
  - Clearing everything (history, computed value and expression);
  - Calculation accuracy - 3 symbols;
- [x] Additional functionality:
  - Real numbers can be written as 0.5 and .5;
  - Operation % - remainder of division;
- [x] To implement the application logic, it is necessary to use the "Command" behavioral programming pattern, which allows you to turn requests into objects, allowing you to pass them as arguments when calling methods, queue requests, log them, and also support the cancellation of operations (see the Command pattern for more details);
- [x] Implementation using both class and functional react components and using hooks. Divide all the functionality of the application into two pages, on one of which the implementation will be presented through class components, and on the second - through functional ones. For example, the header component should contain links to the following pages: home(FC) and home(CC);
- [x] Handling Errors with the "Error Boundaries" Pattern;
- [x] Light and dark theme implementation using styled-components;
- [x] Type checking in React components, passing parameters and similar objects;
- [x] Using aliases to import files;
- [x] Implement e2e testing with full coverage of application functionality:
  - Arithmetic operations;
  - History module;
  - Display module;
  - Keyboard module;
  - Navigation module;
  - Theme module.
