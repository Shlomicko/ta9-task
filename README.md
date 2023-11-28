Angular Application README
==========================

Description
-----------

This is an Angular application that provides a user interface for managing a list of items. The items are retrieved from a JSON file using an HTTP service. The application allows users to create, read, and update, items. It also provides features like tile view and list view, filtering the list of items by typing in the search field.

Table of Contents
-----------------

-   [Installation](#installation)
-   [Usage](#usage)
-   [Features](#features)

Installation
------------

1.  Clone the repository to your local machine.
2.  Navigate to the project directory.
3.  Run `npm install` to install all the dependencies.
4.  Run `ng serve` to start the application.

Usage
-----

The application can be accessed through the browser at `http://localhost:4200`.

-   To create a new item, click the plus button to receal the create form, fill out the form and click the submit button.
-   To edit an existing item, click on it to reveal the edit form. Fill out the form and click the submit button.
-   To filter the list of items, type in the search field.
-   To adjust the list layout (list/grid), click one of the buttons showing layout style.

Features
--------

-   Retrieve items from a JSON file: The list of items is retrieved from a JSON file using an HTTP service.
-   Create new items: Users can create a new item by filling out a form and submitting it.
-   Edit existing items: Users can edit an existing item by clicking on it and filling out a form to update the item's details.
-   Tile view and switching: The application supports a tile view and switching between different views.
-   Search functionality: Users can filter the list of items by typing in the search field.
-   Pagination: The application supports pagination and allows adjusting the page size(Not implemented).
