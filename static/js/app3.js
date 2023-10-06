// Get the samples data
const bbbiodiversity = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it to confirm connection
// d3.json(bbbiodiversity).then(data => console.log(data));

// initial state of the webpage and setting up from user selection of ID from dropdown
//   (note change of plots is handled in html code)

// 1st define functions  (1) creation of bar chart (2) creation of bubble plot (3) display metadata

// Fetch the JSON data and console log it
d3.json(bbbiodiversity).then(function(data) {
  console.log(data)});  // confirms data was accesss

// Setting up the page for the initial condition
function init () {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    d3.json(bbbiodiversity).then((data) => {

        // define a variable for sample names (which will be based on id)
        let names = data.names;
        names.forEach ((id) => {
            console.log(id);
            dropdownMenu.append("option").text(id).property("value",id)});

        // fill the dropdown with the first sample (ID = 940 index of 0)
        let sampleInitial = names[0];

        // confirm that 940 was accessed
        console.log(sampleInitial);

        // Populate the page with the information
        plotBarchart(sampleInitial);
        plotBubbleplot(sampleInitial);
//        fillMetadata(sampleInitial);
    });
}

// creation of barchart for top 10 bacteria in subject
function plotBarchart(sample) {
    d3.json(bbbiodiversity).then((data) => {

        let sampleData = data.samples;

        // filter to select one set of data
        let value = sampleData.filter(result => result.id == sample);

        // fill with the first sample
        let valueData = value[0];

        // Get the sample values, otu_ids, and labels
        let sampleValues = valueData.sample_values;
        let otuIds = valueData.otu_ids;
        let otuLabels = valueData.otu_labels;

        // use slice to select top ten items to display in descending order
        let top10Samplevalues = sampleValues.slice(0,10).reverse();
        let top10Otuids = otuIds.slice(0,10).map(id => `OTU ${id}`).reverse();
        let labels = otuLabels.slice(0,10).reverse();
       
        let bartrace = {
            x: top10Samplevalues,
            y: top10Otuids,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        // layout
        let layout = {
            title: "Most Common Bacteria for Subject", // revisit f string print
            xaxis: {title: "Sample Values"}
        };

        // Generate the bar chart
        Plotly.newPlot("bar", [bartrace], layout)
    });
};

// create bubble plot of all bacteria identified for subject
function plotBubbleplot(sample) {
    d3.json(bbbiodiversity).then((data) => {

        let sampleData = data.samples;

        // filter to select one set of data
        let value = sampleData.filter(result => result.id == sample);

        // fill with the first sample
        let valueData = value[0];

        // Get the sample values, otu_ids, and labels
        let sampleValues = valueData.sample_values;
        let otuIds = valueData.otu_ids;
        let otuLabels = valueData.otu_labels;

        let bubbletrace = {
            x: otuIds,
            y: sampleValues,
            text: otuLabels,
            mode: "markers",
            marker: {
                size: sampleValues,
                color: otuIds,
                colorscale: "Portland"}
        };

                // layout
                let layout = {
                    title: "bubble plot of all bacteria identified for subject",
                    xaxis: {title: "OTU ID"}
                };

        // Generate the bubble plot
        Plotly.newPlot("bubble", [bubbletrace], layout)
    });
};

// fill in the metadata


// module for changing values based on dropdown selection
function optionChanged (value) {

    // call the plot and metadata with the new value
    plotBarchart(value);
    plotBubbleplot(value);
//      fillMetadata(value);
};
// it is  (value)  see 14.3.9 example change filteredData to value

// initialize the page and start this
init();