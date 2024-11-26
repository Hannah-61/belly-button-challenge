// Build the metadata panel
function buildMetadata(sample) {
  // Fetch the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the metadata for the selected sample
    var metadata = data.metadata.filter(sampleObj => sampleObj.id == sample)[0];

    // Select the metadata panel
    var panel = d3.select("#sample-metadata");

    // Clear any existing metadata
    panel.html("");

    // Add each key-value pair to the metadata panel
    Object.entries(metadata).forEach(([key, value]) => {
      panel.append("h5").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// Function to build both charts
function buildCharts(sample) {
  // Fetch the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the sample data for the selected sample
    var samples = data.samples.filter(sampleObj => sampleObj.id == sample)[0];

    // Extract data for the charts
    var otu_ids = samples.otu_ids;
    var otu_labels = samples.otu_labels;
    var sample_values = samples.sample_values;

    // Build a Bubble Chart
    var bubbleTrace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    };

    var bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: { title: 'OTU ID' },
      hovermode: 'closest'
    };

    Plotly.newPlot('bubble', [bubbleTrace], bubbleLayout);

    // Build a Bar Chart
    var yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();

    var barTrace = {
      type: 'bar',
      x: sample_values.slice(0, 10).reverse(),
      y: yticks,
      text: otu_labels.slice(0, 10).reverse(),
      orientation: 'h'
    };

    var barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      margin: { t: 30, l: 150 }
    };

    Plotly.newPlot('bar', [barTrace], barLayout);
  });
}

// Function to initialize the dashboard
function init() {
  // Select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");

  // Fetch the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the sample names
    var names = data.names;

    // Populate the dropdown menu with sample names
    names.forEach((sample) => {
      dropdownMenu.append("option").text(sample).property("value", sample);
    });

    // Build the initial charts and metadata panel
    const firstSample = names[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Update the charts and metadata panel with the new sample
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
