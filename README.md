# Weather App

The Weather App is a modern web application that allows users to check the weather conditions by entering the name of the city. Users can get real-time weather data including temperature, weather condition, wind speed, and humidity.

## Key Features

- **City-based Weather:** Users can enter the name of the city to get the weather forecast.
- **Real-time Updates:** Utilizes modern APIs to provide real-time weather data.
- **Responsive Design:** Built with Bootstrap 5, ensuring a seamless experience across devices.
- **ES6 Functionality:** Utilizes modern JavaScript features for efficient development.
- **Debounce Functionality:** Implements debounce for input to improve performance.
- **Beautiful Interface:** Provides an intuitive and visually appealing interface for users.

## Technologies Used

- **Frontend:** Developed using React JS for building the user interface.
- **Styling:** Bootstrap 5 is used for styling to ensure responsiveness and a modern design.
- **State Management:** Utilizes React Hooks for managing state within components.
- **API Integration:** Fetches weather data from external APIs for accurate forecasts.
- **Debounce:** Implements lodash for debounce functionality to optimize performance.
- **ES6:** Utilizes ES6 features for cleaner and more concise code.
- **Form Handling:** Uses Formik and Yup for form control and validation.

### Installing

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Setting up API Key

To access weather data, you need to obtain an API key from a weather data provider (e.g., OpenWeatherMap, AccuWeather).

1. Create a `.env` file in the root directory of your project.

2. Add your API key to the `.env` file:

    ```
    REACT_APP_API_KEY=your_api_key_here
    ```

    Replace `your_api_key_here` with your actual API key.

### Running the Project

To run the project locally:

```bash
npm start
