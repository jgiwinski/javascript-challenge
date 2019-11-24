// from data.js

// table_data = data; 
// var tbody = d3.select("tbody"); 

// function display_data(table_data){
//     tbody.text("")
//     table_data.forEach(function(sighting){
//     new_row = tbody.append("tr")
//     Object.entries(sighting).forEach(function([key, value]){ 
//         new_td = new_row.append("td").text(value)
//     })
// })}

// display_data(table_data)

// var date_input      = d3.select("#datetime")
// var filter_button   = d3.select("#filter-btn")
// var reset_button    = d3.select("#reset-btn")

// function click_select(){
//     d3.event.preventDefault();
//     new_table = table_data.filter(sighting => sighting.datetime===date_input.property("value"))
//     display_data(new_table);

// }; 

// function reset_table(){ 
//     d3.event.preventDefault(); 
//     display_data(table_data); 
// }

// filter_button.on("click", click_select)
// reset_button.on("click", reset_table); 


// --------- the one that works vvv

table_data = data; 
var tbody = d3.select("tbody"); 

function display_data(table_data){
    tbody.text("")
    table_data.forEach(function(sighting){
    new_row = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){ 
        new_td = new_row.append("td").text(value)
    })
})}

display_data(table_data)

var date_input      = d3.select("#datetime")
var filter_button   = d3.select("#filter-btn")
var reset_button    = d3.select("#reset-btn")

function click_select(){
    d3.event.preventDefault();
    new_table = table_data.filter(sighting => sighting.datetime===date_input.property("value"))
    display_data(new_table);

}; 

function reset_table(){ 
    d3.event.preventDefault(); 
    display_data(table_data); 
}

filter_button.on("click", click_select)
reset_button.on("click", reset_table);


// ---------

// table_data = data; 
// var tbody = d3.select("tbody"); 

// function display_data(table_data){
//     tbody.text("")
//     table_data.forEach(function(sighting){
//     new_row = tbody.append("tr")
//     Object.entries(sighting).forEach(function([key, value]){ 
//         new_td = new_row.append("td").text(value)
//     })
// })}

// display_data(table_data)


// var date_input      = d3.select("#datetime")
// var city_input      = d3.select("#city")
// var state_input     = d3.select("#state")
// var country_input   = d3.select("#country")
// var shape_input     = d3.select("#shape")
// var filter_button   = d3.select("#filter-btn")
// var reset_button    = d3.select("#reset-btn")

// function filtered_table(){
//     d3.event.preventDefault();

//     var new_table = []; 
 
//     if (date_input !== "") { 
//         new_table = sighting.filter(sighting => sighting.datetime===date_input.property("value")); 
//     }; 
//         else if (city_input !== "") {
//             new_table = sighting.filter(sighting => sighting.city===city_input.property("value")); 
//     }; 
//         else if (state_input !== "") {
//             new_table = sighting.filter(sighting => sighting.state===state_input.property("value"));
//     }; 
//         else if (country_input !== "") { 
//             new_table = sighting.filter(sighting => sighting.country===country_input.property("value"));
//     }; 
//         else if (shape_input !== "") { 
//             new_table = sighting.filter(sighting => sighting.shape===shape_input.property("value"));
//     };
//         else filtered_table(new_table);
//     }; 


// function reset_table(){ 
//     d3.event.preventDefault(); 
//     display_data(table_data); 
// }


// filter_button.on("click", filtered_table)
// reset_button.on("click", reset_table); 
