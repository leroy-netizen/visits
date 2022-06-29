# Frontend Coding Challenge

Using the assets provided, your task is to build a simple e-commerce application. 

Please, read all sections within this document carefully.

Points marked as optional are entirely up to you. They are not required.

With the ["Guidelines"](#Guidelines) section in mind, you should complete the following main goals and, for extra credits, the extra goals.



## Main Goals

* Develop a simple build system for the application

* work on client side only

* Develop a product listing pagination with 6 products per page. /*Work in progress*/



## Run this project
To run this project on your machine, clon this repository to your loacal environment. ie cd to your projects directory and run 
```
git clone git@github.com:leroy-netizen/visits.git

```




## API Docs

- This is the basic curl to retrieve a product listing. You'll have to implement client API calls to get paginated response
```
  curl -X GET \
    'https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0' \
    -H 'accept-language: it' \
    -H 'content-type: application/json' \
    -H 'x-musement-currency: EUR' \
    -H 'x-musement-version: 3.4.0'
```
- From the call above, consider these response props:
```
  * cover_image_url => is a URL string where you have to append this query string to make a responsive image ?q=60&fit=crop&w=[image_width_in_px]&h=[image_height_in_px]
  * title => product title
  * description => product description
  * net_price or retail_price => if discount prop is greather than 0, full price is net_price.formatted_value (to be shown as striked) and final price will be retail_price.formatted_value
```

If you need any other endpoint, feal free to check the documentation: https://api-docs.musement.com/



## Delivery

The project was to be delivered as a hosted project. This was done on github pages and the live link to the working application is in the project description. 




## What it does
Fetch sites data from the musement API and render it to the UI.