# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
*How did you approach this challenge? Did you work through the objectives in any particular order? If so, why? Did you utilize any external resources, such as tutorials, guides, or other materials?*

- Firstly I read through the material and started the server to make sure everything was working.
- Next, I created the sections to view medicines, create and delete medicines in the index.html file.
- After that I edited the script.js file to connect the frontend to the backend API points.
- Throughout the challenge I tested each feature as i developed them and did not leave all the debugging until the end. Thi helped me to spot issues and address them early on.


## Objectives - Innovative Solutions
*For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about.*

- For the challenge objective, I added a new backend route called 'average-price'. 
- The 'average-price' root loops through all the medicines in the json file and adds the prices and divides by the number of medicines in the json file to return an average price.
- I ensured that the backend root skipped over any medicine with null prices, as to not skew the average price.

## Problems Faced
*Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)*.

- at first my html page was not displaying correctly. To solve this problem I had to research how to correctly serve html, css and javaScript files using FastAPI. 

- Even after my html file loaded, it was not styled and there was no functionality. The issue was that my link and script tags did not contain the correct file paths. After adjusting the file paths, it worked as expected.

- I added a delete medicine function to the frontend, however it wasn't working. After some debugging, I realised that my fetch call was using "POST" instead of "DELETE".


## Evaluation
*How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?*

Overall i thought the challenge was very fun and engaging and a good way to demonstrate my skills.
Some parts went smoothly (building the front end html page and styles), while other parts required a bit more debugging before I could implement it coorectly such as the frontend delete function.
I didnt run out of time, however I did spend a bit of extra time fixing some small issues and ensuring the html page looked presentable.

If I were to do this again, I would focus on :

- Adding more advanced features, such as editing medicine names/prices or sorting and filtering
- Creating seperate html pages for each of the functionalities