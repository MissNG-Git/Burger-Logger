# 13 Node Express Handlebars: Eat-Da-Burger!

⋘ ──── ∗⋅◦∘◈\[[MissNG Burger-Logger](https://burglog-00.herokuapp.com)\]◈∘◦⋅∗ ──── ⋙

Burger-Logger is a restaurant app that lets users input the names of burgers they'd like to eat and track when a specific burger has been consumed.

Technologies utilised include...

- [Bootstrap CSS](https://getbootstrap.com/)
- Javascript
- [GitBash](https://gitforwindows.org/)
- [Node Environment](https://nodejs.org/en/about/)
- [Express.js Framework](https://expressjs.com/)
- [MySQL Database](https://www.mysql.com/)
- [Heroku Platform](https://www.heroku.com/)
- [Handlebars](https://handlebarsjs.com/)
- Homemade ORM

## ≫ ──── ≪•◦ Objectives ◦•≫ ──── ≪

```
+ Assist foodies to list the burgers they'd like to eat
+ Allow users to submit a burger to await devouring
+ Allow users to also track when a type of burger has been consumes

```

## Mock-Up

A <a href="https://youtu.be/msvdn95x9OM">DEMO YouTube Video</a> demonstrating how the web application will function.

An image showing the web application's appearance and functionality:

![Eat-Da-Burger](./public/assets/img/burglogDEMO.png)

### ≫ ──── ≪•◦ Overview of Code Functionality ◦•≫ ──── ≪

1. Application accepts user input for burger names & selecting whether burger has been devoured or is awaiting consumption.

2. Application accurately displays burger in the appropriate column depending on which 'STATUS' has been selected.

3. Application contains working buttons that will either move the burgers between the devoured or awaiting consumption columns, or delete burgers entirely.

4. Application successfully Creates, Reads, Updates & Deletes (CRUDs) from a database where burger data is stored.

5. Application has been successfully deployed to Heroku and can be experienced [here](https://burglog-00.herokuapp.com)!

### ≫ ──── ≪•◦ Usability ◦•≫ ──── ≪

- Navigate to deployed application page on [Heroku](https://burglog-00.herokuapp.com)
- Enter burger name in blank field under _~Burger 'Bucket List'~_
- Select desired burger "STATUS"
- Click on "Add Burger!"
- Burger will display either on the left (awaiting consumption) or the right (devoured) column depending on what "STATUS" was selected
- To move a burger from the left to right column, click on the "Devoured!" button
- To move a burger from the right to left column, click on the "To be consumed!" button
- To delete a burger from either list, click on the Trash Can icon (🗑️) at the end of each list item
