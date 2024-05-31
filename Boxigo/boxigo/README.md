# Boxigo | Movers and Packers Application

<h3>Live Demo : https://boxigo-ten.vercel.app/ </h3>

This is a React application designed to manage and display moving details. The application features several components and utilizes a Context API for state management. This README file provides an overview of the application's structure and usage. 

## Backend
  For backend it is deployed on vercel because original api was not working after app deployment so I kept origial api in <span>.env<span> file. After deployment our new api is ready to use.
  
##

![laptop](https://github.com/dilsah786/Projects/assets/120841935/ecc8c238-83eb-4643-93db-59e51592e78b)


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
![DetailsPages](https://github.com/dilsah786/Projects/assets/120841935/adf4e7be-1721-4fcc-bba5-7a362488ced1)

![detailsPage_small](https://github.com/dilsah786/Projects/assets/120841935/5436368c-6e57-4cb4-b7a9-65fd1121de13)


## Components

### Moves

The `Moves` component is the main page that lists all moves. It uses the `DataContext` to fetch and display data.
![laptop](https://github.com/dilsah786/Projects/assets/120841935/3fcc8f63-e40a-4a7a-8f2f-cef4a8cba68d)
![Moves_small_img](https://github.com/dilsah786/Projects/assets/120841935/8b6fcf27-d425-4158-ad1d-b3645e08b3a2)



### DetailsPage

The `DetailsPage` component provides detailed information about a specific move. It uses the `DataContext` to get the details of the selected move.
![detailsPage_small](https://github.com/dilsah786/Projects/assets/120841935/cc5225a3-eb68-4884-8704-d0e11664db61)



### SideBar

The `SideBar` component provides navigation options within the application.

### Loader

The `Loader` component displays a loading spinner while data is being fetched.
![loaderPage](https://github.com/dilsah786/Projects/assets/120841935/32afbf67-7976-4ab9-8ea2-10fa24d9ed48)

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
