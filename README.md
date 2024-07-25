# Front End Developer Interview Task: Tic Tac Toe Application with Next.js CSR and Unit Testing
Objective

Build a Tic Tac Toe application using Next.js. The application should be fully functional and cover all essential unit test cases.

## Requirements
1. Functional Requirements:
  - [X] The game should have a 3x3 grid.
  - [X] Players should be able to click on a cell to mark it with "X" or "O".
  - [X] The game should alternate turns between the two players.
  - [X] The game should detect a win or a draw and display an appropriate message.
  - [X] There should be a "Reset" button to start a new game.
2. Technical Requirements:
  - [X] Use Next.js for the application framework.
  - [X] Use React for the frontend components.
  - [X] State management should be handled using React's useState or useReducer.
  - [X] Styling can be done using CSS modules or styled-components.
  - [X] Implement unit tests using a testing framework like Jest with React Testing Library.
3. Unit Testing Requirements:
  - [X] Test the rendering of the Tic Tac Toe grid.
  - [X] Test the functionality of marking cells with "X" and "O".
  - [X] Test the win conditions (rows, columns, and diagonals).
  - [X] Test the draw condition.
  - [X] Test the "Reset" button functionality.

### Bonus Points
  - [X] Use TypeScript for type safety.
  - [X] Implement a simple AI to play against the user.
  - [X] Add animations for a better user experience.

## Technology Stack

- React
- Next.js - Pages Router
- Jest
- TypeScript
- CSS Modules

## Getting Started

### Prerequisites

- Node.js
- yarn

### Installation

To install and run the application, you can use the following commands:

1. Clone the Github repository to your local machine:

```bash
git clone https://github.com/b3am-dev/tic-tac-toe.git
```

2. Navigate to the project directory:

```bash
cd tic-tac-toe
```

3. Install NPM packages

```bash
yarn install
```

### Running the application
1. Start the development server
```bash
yarn dev
```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to play the game.

### Running the tests

```bash
yarn test
```

To generate coverage report for the unit tests, use the following command:

```bash
yarn test --coverage
```

## Design Decisions

- **React Hooks**: The application uses React's functional component style and hooks (useState, useEffect, useCallback) for managing state and side effects.
- **Game Logic Separation**: The gameLogic module encapsulates the core game rules, keeping the Board component focused on UI and interaction.
- **Client-Side Rendering ('use client')**: Indicates the components are rendered on the client-side for better interactivity.

## Possible improvements

- UI Enhancements: Consider adding more visual flair or animations to the game interface.
- Difficulty Levels: Allow the user to adjust the AI's difficulty level.