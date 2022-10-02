
# MovieFinder

MovieFinder is a React Typescript app built with the OMDb REST API to find any movie, and it's detailed information. 

Dummy auth credentials used for now, login with:
- email: test@gmail.com | password: 12345678
- email: dummy@gmail.com | password: 12345678


Deployed in Vercel: https://movie-finder-orcin.vercel.app/


## Demo

![MovieFinderGif1](https://user-images.githubusercontent.com/49501058/193469201-55033e76-3c35-4b96-b9bd-32410abef631.gif)

![MovieFinderGif2](https://user-images.githubusercontent.com/49501058/193469528-a305a7d3-6e06-48a0-933e-e23497cbfd31.gif)

![MovieFinderGif3](https://user-images.githubusercontent.com/49501058/193469718-39715886-8a8c-4fdb-a1ab-8c4c935a7d5a.gif)

![MovieFinderGif6](https://user-images.githubusercontent.com/49501058/193473821-3eedf3c5-bcdb-420e-af65-1db2639f57e4.gif)

## Main Features

- Auth page (with dummy credentials for now), login and logout.
- List searched movies fetched from the OMDb API (https://www.omdbapi.com/), with server-side pagination.
- View movies information in detail, like the plot, director, main actors and ratings.
- Mark movies as favorite.
- View your favorite movies list.
- Unit testing with jest and react-testing-library of the main components: login form, search bar, movie cards and navigation bar.
- Responsive design.

## Running Locally

Install MovieFinder and run with npm

```bash
  npm install
  npm start
```

## Running Tests

Test MovieFinder with npm, jest and react-testing-library

```bash
  npm test
```
## Tech

**App:** React Typescript

**State Management:** React Context, React useReducer.

**Testing:** Jest, React testing library


## Author

- [@oteiza-a](https://www.github.com/Oteiza-a)

