# Express App + Angular 7 + Parse Server App with Back4App

In this repository you will find an example app working with Back4App + Javascript SDK.

### Step 1 - Back4App

If it is your first time with Back4App, [create a account](https://www.back4app.com/docs/platform/get-started/new-parse-app).

#### Step 1.1 - Replace Keys

Don't forget to paste your Back4App App ID and Javascript Key in the `./backend/app.js` file.

#### Step 1.2 - Import template class

Go to Back4App Dashboard and import the `./Cars.json` file following the guide below:

[Back4App Import class](https://help.back4app.com/hc/en-us/articles/115003438951-How-can-I-import-to-my-Database-)

### Step 2 - Starting the Express server

1. Access the `backend/` folder;
2. Install the modules with `$npm i`;
3. The, you can run the command: `$ nodemon app.js`.

### Step 3 - Starting the Angular App

1. Access the `my-back4app-app/` folder;
2. Then, you can run the command: `$ng serve --open`.

### Ready! You can test your application now :)
