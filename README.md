## Belly Button Biodiversity Dashboard
This project creates an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. Using the dataset, the dashboard visualizes the top 10 microbial species (OTUs) found in a sample, displays a bubble chart of the full data, and presents demographic information for each sample.

## Table of Contents
--Project Overview
--Features
--Technologies Used
--Setup Instructions
--Usage
--Live Demo
--Contributing

## Project Overview
The Belly Button Biodiversity Dashboard enables users to explore the types and frequencies of microbes present in belly buttons. The dataset reveals that only a few microbial species are present in over 70% of people, while others are relatively rare. The dashboard includes visualizations such as:

--A bar chart for the top 10 OTUs in each sample.
--A bubble chart displaying all OTUs with sample values and labels.
--A demographic information panel for each individual.
--The dashboard updates dynamically based on user selection.

## Features
Dynamic Bar Chart: Displays the top 10 OTUs for the selected sample, with OTU labels as hover text.
Interactive Bubble Chart: Shows the full microbial dataset for the selected sample, with color and size reflecting OTU values.
Demographic Information Panel: Presents metadata for the selected individual, including age, ethnicity, gender, and location.
Dropdown Menu: Allows users to select a sample ID and view corresponding data.
Responsive Design: Fully interactive and responsive dashboard.

## Technologies Used
HTML5: For structuring the webpage.
CSS3: For styling and layout.
JavaScript: For interactivity and data handling.
D3.js: For data fetching and manipulation.
Plotly.js: For creating bar and bubble charts.
GitHub Pages: For deployment.

## Setup Instructions
Follow these steps to run the project locally:

Prerequisites
Node.js (Optional, for setting up a local server)
Python (Optional, for serving the webpage locally)
A modern browser (e.g., Chrome, Edge, Firefox)

## Steps
--Clone the repository:

git clone https://github.com/Hannah-61/belly-button-challenge.git

--Navigate to the project directory:

cd belly-button-challenge

## Start a local server:
Using Python:

python -m http.server

Using Live Server (in Visual Studio Code):
Open index.html in VS Code.

Start Live Server.
Open the browser and navigate to:
http://127.0.0.1:8000

## Usage
Open the webpage in a browser.
Use the dropdown menu to select a sample ID.
View the following visualizations:
Top 10 OTUs Bar Chart: Highlights the most prominent microbial species in the selected sample.
Bubble Chart: Displays all microbial species in the sample with their values and labels.
Demographic Panel: Presents individual metadata like age, gender, and location.

## Live Demo
The project is deployed on GitHub Pages. Access the live dashboard here.

Contributing
Contributions are welcome! Follow these steps to contribute:

Fork the repository.

Create a new branch:
git checkout -b feature-name

Make your changes and commit:
git commit -m "Description of changes"

Push to your forked repository:
git push origin feature-name

Open a pull request.
