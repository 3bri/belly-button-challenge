# belly-button-challenge

Brian Guenther
Briefly, accessing the biodiversity data from a study of bacteria found in belly buttons of humans, which is stored in a JSON format.  This information was used to create an interactive website that allows the user to scroll through a summary of the bacterial diversity found by subject id.  The resulting app was also successfully deployed to Github pages, follow link (https://3bri.github.io/belly-button-challenge/).

Regarding my progression through this project.  I started with the supplied index.html file.  Reading the html code indicates that the webpage needs information from Static/js/app.js, so I started work on editing that completely blank file.  I initially commented out the bonus section with the hope to return to this but that has not happened yet.  Next the goal was to create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.  A bubbleplot of the bacterial diversity and supply relevant metadata on a given subject.  Ultimately, the information displayed will be determined by selection of subject number via a dropdown menu.

I initially worked out displaying the barchart for the first individual (ID=940) but was realizing the larger scope of this project when I started my tutoring session.  Working with the tutor, I realized that I needed to work out both the initial population of data for the page and then have the values accept what was selected by the dropdown menu.  This was key for how I reformatted the javascript file and in working through the project.  The plots have been generated and populate based on selections in the dropdown menu.  While I utilized several web-based materials, listed below, I also had many helpful suggestions from my tutor, Matthew Werth, and also from my friend, Cameron Williams, who works in IT.  Unfortunately, I had limited time to work on this assignment this week due to a funeral and then the closure of LaGuardia, due to flooding, resulted in relatives extending their visit.  I am still confused about the key-value pair in the metadata and have not successfully coded that part at this time.  

Web Resources utilized for this project
https://www.w3schools.com/Js/js_json_objects.asp 
https://stackoverflow.com/questions/10059472/how-to-get-the-key-value-of-a-json-object-matching-another-given-value 
Guidance for bubble plots:
https://plotly.com/python/bubble-charts/ 
https://www.geeksforgeeks.org/bubble-chart-using-plotly-in-python/ 
https://plotly.com/javascript/colorscales/ 
