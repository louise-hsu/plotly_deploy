# plotly_deploy

## Project Overview 
Roza is a biological researcher researching biological species. She is interested in bacterial species that can synthesize proteins that taste like beef. She believes that she can find this in human belly buttons. She will now build a dashboard where you can find the inifidivual and what species of bacteria is found. 

This module has taught me the following:

1. Plotly
2. Transform Data with Java Script
3. Retrieve External Data
4. JavaScript Events
5. JavaScript for Loops 
6. Deployment

        
## Documents

- plots.js : the javascript code with all the functions to get the dashboard to populate and provide the correct information
- index.html : the html code where the dashboard is (visualization)
- samples.json: the data 

## Summary

The code in plot.js allows the correct information to be called on from the data file to be shown in the browser. The visualization and formmating of the dashboard is created by the index. html. 

From the dashboard, you can pick the test subject ID, and the demographic information will pop up with ID, ethnicity, gender, location, BBType, and wash frequency. 

# Module 12 Challenge 

## Challenge overview

1. When an individual’s ID is selected, the top 10 bacterial species (OTUs) should be visualized with a bar chart. Create a horizontal bar chart to display the top 10 OTUs found in that individual.

2. reate a bubble chart that displays each sample:

Use otu_ids for the x-axis values.
Use sample_values for the y-axis values.
Use sample_values for the marker size.
Use otu_ids for the marker colors.
Use otu_labels for the text values.


## Summary 
***Please note the code/information can be found in plots.js and the html formatting can be found in index.html

The purpose of the challenge is to be able to filter and pick a indivual's data, which gives you the overview: ID, ethnicity, gender, location, BBType, and wash frequency. 

Once you pick an individual, you can view a horizontal bar chart with the top 10 baterical species found. Moreover, you can view a bubble chart which will show the otu id and value according to x and y axis, and the size of the marker will depend on the sample value according to otud_id colors. 
