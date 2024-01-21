
// Sidebar Toggle

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
  if(!sidebarOpen){
  sidebar.classList.add("sidebar-responsive");
  sidebarOpen = true;  
  }
}

function closeSidebar(){
  if(sidebarOpen){
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// ----------------Charts --------------------

//BAR CHART

var barChartOptions = {
  series: [{
    data: [10, 8, 6, 4, 2]
  }],
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1",
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["Laptop", "Phone", "Mobile", "Calculator", "iPad"],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();



//----------------- AREA CHART ----------------------------


var areaChartoptions = {
  series: [
    {
  name: 'Purchase Orders',
  data: [31, 40, 28, 28, 51, 42, 109, 100]
}, 
{
  name: 'Seles Orders',
  type: 'line',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area',
  toolbar: {
    show: false,
  },
},
colors: ["#4f35a1", "#246dec"],
dataLabels: {
  enabled: false,
},
stroke: {
  curve: 'smooth'
},
labels: ['Jan 01', 'Jan 02','Jan 03','Jan 04','Jan 05','Jan 06','Jan 07'],
markers: {
  size: 0
},
yaxis: [
  {
    title: {
      text: 'Purchase Orders',
    },
  },
  {
    opposite: true,
    title: {
      text: 'Seles Orders',
    },
  },
],
tooltip: {
  shared: true,
  intersect: false,
}
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartoptions);
areaChart.render();



















