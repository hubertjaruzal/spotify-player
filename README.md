# Spotify Player

**Start**

`yarn run start`

## Configure ENV variables

1. Create `.env.development` file int the root of the project
2. Add `REACT_APP_CLIENT_ID` variable - You can find it in your Spotify Application Dashboard
3. Add `REACT_APP_CLIENT_SECRET` variable - You can find it in your Spotify Application Dashboard
4. Add `REACT_APP_REDIRECT_URI` variable - You can find it or set it in your Spotify Application Dashboard

**Example:**

`REACT_APP_CLIENT_ID=1234`\
`REACT_APP_CLIENT_SECRET=1234`\
`REACT_APP_REDIRECT_URI=http://localhost:3000/`

## Tests

1. run `yarn run test --watchAll --coverage` to run tests with coverage
