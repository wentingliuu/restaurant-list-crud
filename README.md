# Restaurant List (CRUD)
A website for you to keep all your favorite restaurants with restaurant's name, address, phone, image, category, rating, and so on.

## Features
*  CREATE: write down the restaurant info at the create page 
*  READ: review the full restaurant list at the home page
*  READ: get the restaurant's detail info by clicking the detail button
*  Update: you may update the info whenever you want by clicking the edit button
*  Delete: you can remove the restaurant from your list by clicking the delete button
*  Search: there's a search bar at the home page for you to search the specific restaurants by keyword or location
*  Sort: sort the restaurant list in ascending or descending order by name or rating
*  Filter: filter the restaurant list by category and rating

## Installation and Execution
1.  Clone the files to your computer
```
git clone https://github.com/wentingliuu/restaurant-list-crud.git
```
2. Init: install the npm packages
```
cd restaurant-list-crud
```
```
npm install
```
3. Run MongoDB Server
```
cd ~/mongodb/bin/
```
```
./mongod --dbpath <path to mongodb-data directory>
```
- While the terminal shows `waiting for connections on port 27017`, MongoDB has started successfully.
4. Insert seeder
```
npm run seed
```
5. Run the project
```
npm run dev
```
- While the terminal returns `Express is listening on localhost:3000`, please go to http://localhost:3000 on your browser.

## Prerequisites
*  [Visual Studio Code](https://code.visualstudio.com/) - development environment
*  [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com/) - JavaScript runtime environment
*  [Express.js](https://expressjs.com/) - web application framework
*  [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - template engine
*  [MongoDB](https://www.mongodb.com/) - document-oriented database
*  [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool(OBM)
*  [body-parser](https://www.npmjs.com/package/body-parser) - middleware
*  [method-override](https://www.npmjs.com/package/method-override) - middleware
