# Boxigo | Movers and Packers Application

This is a React application designed to manage and display moving details. The application features several components and utilizes a Context API for state management. This README file provides an overview of the application's structure and usage.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Context API](#context-api)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/dilsah786/Projects/tree/main/Boxigo/boxigo
   ```

2. **Navigate to the project directory**:
   ```
   cd boxigo
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Start the application**:
   ```
   npm run dev
   ```

The application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can navigate through different pages to view moving details, manage inventory, and access additional information.

### Viewing Moves

- The main page (`Moves`) displays a list of all moves with brief details.
- Clicking on "View move details" will navigate to the `DetailsPage` where you can see detailed information about the selected move.

### Detailed Move Information

- `DetailsPage` shows comprehensive details about the move, including house details, inventory details, and additional information.
- Inventory items can be expanded to view specific categories and their items.

## Components

### Moves

The `Moves` component is the main page that lists all moves. It uses the `DataContext` to fetch and display data.

### DetailsPage

The `DetailsPage` component provides detailed information about a specific move. It uses the `DataContext` to get the details of the selected move.

### SideBar

The `SideBar` component provides navigation options within the application.

### Loader

The `Loader` component displays a loading spinner while data is being fetched.

## Context API

The application uses React's Context API for state management. The `DataContext` provides global state management for the application.

### DataContext

The `DataContext` provides data about moves and handles the logic for fetching and updating the data.

- **Provider**: `DataProvider`
  - `data`: Array of all moves data.
  - `singleData`: Data of the selected move.
  - `getIndexForSingleData`: Function to set the index for the selected move.
  - `loading`: Boolean indicating whether data is being loaded.
  - `toggle`: Boolean for toggle state.

### Data Fetching

Data is fetched from a sample API endpoint and stored in the context. It is also cached in `localStorage` for quick access.

## Dependencies

The application uses several npm packages:

- `react`: Core React library
- `react-dom`: React DOM library
- `react-router-dom`: For routing
- `react-icons`: For icons
- `react-loader-spinner`: For loading spinners
- `aos`: For animations on scroll
- `lucide-react`: For additional icons
- `tailwindcss`: For styling 

To install these dependencies, run `npm install`.

## Contributing

Contributions are welcome! Please create an issue first to discuss any changes or features you'd like to add. Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

By following this README, you should be able to set up and run the Moves Application locally, as well as understand its structure and functionality. If you encounter any issues or have questions, please open an issue on GitHub.