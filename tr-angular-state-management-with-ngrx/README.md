# TR Angular State Management with NgRx

This repository demonstrates how to implement state management in an Angular application using NgRx.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 12 or above)
- Angular CLI (version 12 or above)

### Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/angular-ngrx-state-management.git

2. Install the dependencies:
    cd angular-ngrx-state-management
    npm install 

### Usage

1. Start the development server:
    ng serve
    
2.  Open your browser and navigate to http://localhost:4200 to see  the application.

### State Management
In this example, we're using NgRx to manage the state of the counter feature.

The app.component.ts file contains the implementation for the main component. It interacts with the state by dispatching actions and subscribing to the state changes.

### Here's an overview of the code structure:

store folder: Contains the NgRx store configuration and related files.

app.state.ts: Defines the application state interface.

counter.actions.ts: Contains the action definitions.

counter.reducer.ts: Implements the reducer function to handle state changes.

index.ts: Exports the store-related entities for easier imports.

### Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please submit an issue or a pull request.