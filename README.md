# CookBook App
Application allows user to create and update recipe.
Homepage displays list of recipes which are sorted by date (newest first).
Also, user can view history of updates for selected recipe.

### Demo
<a target="_blank" href="https://thawing-lake-27685.herokuapp.com/">Demo Link</a>

### Scripts
- **npm run start** - run webpack in production mode and start server;
- **npm run dev** - run webpack in development mode;
- **npm run prod** - run webpack in production mode;
- **npm run clean** - remove all files from public folder;
- **npm run ctest** - run client tests;
- **npm run stest** - run server tests;


### Features
- Server
    - **GET "/"** - sends back index.html;
    - **GET "/recipes"** - sends back array of recipes;
    - **GET "/recipes/:id"** - sends back recipe;
    - **GET "/:id/history"** - sends back history for specific recipe;
    - **POST "/recipes** - creates new recipe;
    - **PUT "/recipes/:id** - update recipe;
- Client
    - **"/"** - display list of available recipes;
    - **"/new** - display form to create new recipe;
    - **"/:id** - display specific recipe;
    - **"/:id/edit"** - display form to update recipe;

App is deployed on [Heroku]

### Technologies:
- React.js/Redux.js
- [ReactRouter v4][rr]
- [ReduxForm v6][rf]
- [Bootstrap v3][bts]
- [webpack v2][wp]
- [NodeJS]
- [Express.js]
- [MongoDB][mongo]
- [karma]
- [mocha]
- [expect.js]
- ES6




[heroku]: <https://www.heroku.com/>
[rf]: http://redux-form.com/6.6.3/
[rr]: <https://reacttraining.com/react-router/>
[nodejs]: <http://nodejs.org>
[express.js]: <http://expressjs.com>
[bts]: http://getbootstrap.com/
[wp]: https://webpack.js.org/
[karma]: https://karma-runner.github.io/1.0/index.html
[mocha]: https://mochajs.org/
[expect.js]: https://github.com/mjackson/expect
[mongo]: https://www.mongodb.com/




