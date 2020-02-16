function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        
        });
        optionChanged(sampleNames[0]);
    })}


  
init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
};

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
  
        PANEL.html("");
        PANEL.append("h6").text('ID: '+result.id);
        PANEL.append("h6").text('ETHNICITY: '+result.ethnicity);
        PANEL.append("h6").text('GENDER: '+result.gender);
        PANEL.append("h6").text('AGE: ' +result.age);
        PANEL.append("h6").text('LOCATION: ' + result.location);
        PANEL.append("h6").text('BBTYPE: '+result.bbtype);
        PANEL.append("h6").text('WFREQ: '+result.wfreq);
    });
}

function buildCharts(sample){

    
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == sample)
        

        
        var sortedresult= resultArray.sort((a,b)=> a.sample_values - b.sample_values).reverse();
        var result = sortedresult[0];
        var otu_ids = result.otu_ids;
        
        var sample_values = result.sample_values;
        var otu_labels = result.otu_labels;
        otu_ids_string = otu_ids.map(otu_ids => `OTU ${otu_ids}`);
        
        // parsing through metadata for wfreq

        var metadata = data.metadata;
        var resultArrayMeta = metadata.filter(sampleObj => sampleObj.id == sample);
        var resultMeta = resultArrayMeta[0];
        var wfreq = resultMeta.wfreq;
        // console.log(wfreq);

        // bar horizontal 
        var trace = {
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids_string.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
          };

        //console.log(otu_ids.slice(0,10));
        //console.log(sample_values.slice(0,10));
        var data = [trace];
        var layout = {
          title: "Top 10 bacterial species (OTUs)",
        // xaxis: { title: "" },
        // yaxis: { title: ""},
          margin: {t:50, l:150}
        };
        Plotly.newPlot("bar", data, layout);
        
        // Gauge

        var level = parseFloat(wfreq) * 20
      

        // Trig to calc meter point
        var degrees = 180 - level,
        radius = .5;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);

        // Path: may have to change to create a better triangle
        var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
        var path = mainPath.concat(pathX,space,pathY,pathEnd);
        var data = [{ type: 'scatter',
            x: [0], y:[0],
            marker: {size: 12, color:'850000'},
            showlegend: false,
            name: 'wash frequency',
            text: wfreq,
            hoverinfo: 'text+name'},
          { values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9 ,50/9 , 50/9, 50/9, 50],
          rotation: 90,
          text: ['8-9', '7-8', '6-7', '5-6',
                    '4-5', '3-4', '2-3', '1-2', '0-1', ' '],
          textinfo: 'text',
          textposition:'inside',
          marker: {colors:['rgba(55, 98, 66, 0.75)', 'rgba(82, 135, 94, 0.75)', 'rgba(96, 165, 112, 0.75)', 'rgba(93, 130, 50, 0.50)', 'rgba(188, 221, 126, 0.75)', 'rgba(192, 209, 158, 0.75)', 'rgba(210, 206, 145, .5)',
          'rgba(210, 206, 145, .25)', 'rgba(232, 226, 202, .25)', 'rgba(255, 255, 255, 0)']},
          labels: ['8-9', '7-8', '6-7', '5-6','4-5', '3-4', '2-3', '1-2', '0-1',' '],
          hoverinfo: 'label',
          hole: .5,
          type: 'pie',
          showlegend: false
        }];
        var layout = {
          shapes:[{
              type: 'path',
              path: path,
              fillcolor: '850000',
              line: {
                color: '850000'
              }
            }],
          title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per week',
          height: 500,
          width: 500,
          xaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
          yaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]}
        };

        Plotly.newPlot('gauge', data, layout);



        // bubble d
        var trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
              color: otu_ids,
              colorscale: 'Earth',
              size: sample_values
            }
          };
          
          var data = [trace1];
          
          var layout = {
            title: '',
            xaxis: {title: "OTU ID"},
            showlegend: false,
            height: 600,
            width: 1200,
            margin: {t:50, l:150}
          };
          
          Plotly.newPlot("bubble", data, layout);

        });

}


