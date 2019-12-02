// from data.js
var $tbody      = document.querySelector("tbody");
var $Input      = document.querySelector("#search");
var $searchBtn1 = document.querySelector("#datetime");
var $searchBtn2 = document.querySelector("#city");
var $searchBtn3 = document.querySelector("#state");
var $searchBtn4 = document.querySelector("#country");
var $searchBtn5 = document.querySelector("#shape");
var $searchBtn0 = document.querySelector("#reset");

$searchBtn0.addEventListener("click", reset);
$searchBtn1.addEventListener("click", datetime);
$searchBtn2.addEventListener("click", city);
$searchBtn3.addEventListener("click", state);
$searchBtn4.addEventListener("click", country);
$searchBtn5.addEventListener("click", shape);

var tableData = data;
renderTable();

function reset() {
    $Input.value = "";
    renderTable();
}

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var address = data[i];
        var fields  = Object.keys(address);
        var $row    = $tbody.insertRow(i);
        for (var j  = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = address[field];
        }
    }
}

function datetime() {
    var filteritem     = $Input.value.trim().toLowerCase();
    data = data.filter(function(address) {
      var addressState = address.datetime.toLowerCase();
      return addressState === filteritem;
    });
    renderTable();
  }

  function city() {
    var filteritem     = $Input.value.trim().toLowerCase();
    data = data.filter(function(address) {
      var addressState = address.city.toLowerCase();
      return addressState === filteritem;
    });
    renderTable();
  }

  function state() {
    var filteritem     = $Input.value.trim().toLowerCase();
    data = data.filter(function(address) {
      var addressState = address.state.toLowerCase();
      return addressState === filteritem;
    });
    renderTable();
  }

  function country() {
    var filteritem     = $Input.value.trim().toLowerCase();
    data = data.filter(function(address) {
      var addressState = address.country.toLowerCase();
      return addressState === filteritem;
    });
    renderTable();
  }

  function shape() {
    var filteritem     = $Input.value.trim().toLowerCase();
    data = data.filter(function(address) {
      var addressState = address.shape.toLowerCase();
      return addressState === filteritem;
    });
    renderTable();
  }
