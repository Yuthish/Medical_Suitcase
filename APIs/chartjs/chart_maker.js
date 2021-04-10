var ctx = document.getElementById('Chart1').getContext('2d');
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
      label: 'Mumbai',
      data: [
        2953, 3130, 7360,
        2769, 6933, 7747,
        9265, 8725, 8539,
        7770, 5769, 9537
      ],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Hyderabad',
      data: [
        6086, 4157, 7215,
        9481, 7653, 3932,
        3130, 5986, 3494,
        2919, 8103, 6523
      ],
      fill: false,
      borderColor: 'rgb(255, 205, 86)',
    },
    {
      label: 'Bangalore',
      data: [
        6055, 6745, 6205,
        5803, 3687, 6474,
        5277, 7544, 3134,
        3800, 4657, 9039
      ],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Chennai',
      data: [
        5196, 7665, 5598,
        6925, 5191, 6577,
        7600, 9070, 8052,
        4273, 8208, 7361
      ],
      fill: false,
      borderColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Delhi',
      data: [
        5338, 5848, 4845,
        7273, 5237, 6924,
        4151, 6942, 6900,
        5654, 3515, 6014
      ],
      fill: false,
      borderColor: 'rgb(153, 102, 255)',
    }
  ]
};
const config = {
  type: 'line',
  data: data,
  options: {
    interaction: {
      intersect: false,
      mode: 'index',
    },
    
   
    pointRadius: 5,
    plugins: {
      title: {
        display: true,
        text: 'Dengue cases recorded for major cities',
        color:'white'
        
      },
      

    },
    
    responsive: false,
    maintainAspectRatio: false,
    animations: {
      tension: {
        duration: 300,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: false
      }
    },
    scales: {
      y: {
        min: 0,
        max: 10000,
        title: {
          display: true,
          text: "Cases Count",
          color:'white'
        },
        ticks:{
          color:'white'
        }
      },
      x: {
        title: {
          display: true,
          text: "Months",
          color:'white'
        },
        ticks:{
          color:'white'
        }
      }
    }
  }
};
var myChart1 = new Chart(ctx, config);
// =====================================================================================================================================================

var ctx1 = document.getElementById('Chart2').getContext('2d');

const data1 = {
  labels: [
    'Dengue',
    'Typhoid',
    'Hepatitis',
    'Jaundice',
    'Covid-19',
    'Diarrhoeal Diseases',
    'Cholera',
    'Cancer',
    'Flu',
    'Tuberculosis'
  ],
  datasets: [{
      label: 'Chennai',
      data: [
        5196, 4493, 4476,
        6328, 2715, 3151,
        8278, 4785, 5745,
        5815
      ],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Hyderabad',
      data: [
        6086, 6537, 5597,
        4951, 7806, 4828,
        7408, 6646, 4893,
        5777
      ],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    },
    {
      label: 'Bangalore',
      data: [
        6055, 4069, 6978,
        3769, 6248, 5593,
        8392, 6136, 7472,
        5389
      ],
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      pointBackgroundColor: 'rgb(75, 192, 192)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(75, 192, 192)'
    
    }
  ]
};

const config1 = {
  type: 'radar',
  data: data1,
  options: {
    
    scale: {
      
      
      min: 0,
      max: 10000
    },
    
    interaction: {
      intersect: false,
      mode: 'index',
    },
    pointRadius: 5,
    
    plugins: {
      title: {
        display: true,
        text: 'January report',
        color:'white'
      },
      
    },
    
    responsive: false,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 3,
        
      }
    }
  },
};

var myChart2 = new Chart(ctx1, config1);

// ==========================================================================================================================================================

function colorize(opaque) {
  return (ctx) => {
    var v = ctx.parsed.y;
    var c = v > 8000 ? '#D60000' :
      v > 6200 ? '#F46300' :
      v > 4200 ? '#44DE28' :
      '#0358B6';

    return opaque ? c : c + "77";
  };
}

var ctx2 = document.getElementById('Chart3').getContext('2d');
const labels = ['Dengue', 'Typhoid', 'Hepatitis',
  'Jaundice', 'Covid-19', 'Diarrhoeal Diseases',
  'Cholera', 'Cancer', 'Flu', 'Tuberculosis'
]
const data3 = {
  labels: labels,
  datasets: [{
      label: 'August',
      data: [
        8725, 7988, 9726,
        5935, 6765, 6519,
        8260, 8450, 5673,
        4059
      ]
    },
    {
      label: 'October',
      data: [
        7770, 4763, 3194,
        4640, 7854, 7827,
        4623, 5171, 2528,
        6352
      ]
    }
  ]
};

const config2 = {
  type: 'bar',
  data: data3,
  
  options: {
    hoverBorderRadius:25,
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: 'Disease report MUMBAI for AUG and OCT',
        color:'white'
      }
    },
    scales: {
     
      y: {
        title: {
          display: true,
          text: "Cases Count",
          color:'white'
        },
        ticks:{
          color:'white'
        }
        
      },
      x: {
        title: {
          display: true,
          text: "Diseases",
          color:'white'
        },
        ticks:{
          color:'white'
        }
      }
    },
    elements: {
      bar: {
        backgroundColor: colorize(false),
        borderColor: colorize(true),
        borderWidth: 2
      }
    }
  }
};



var myChart3 = new Chart(ctx2, config2);

// ===============================================================================================================================================================

var ctx3 = document.getElementById('Chart4').getContext('2d');
const data4 = {
  labels: ['Dengue', 'Typhoid', 'Hepatitis',
  'Jaundice', 'Covid-19', 'Diarrhoeal Diseases',
  'Cholera', 'Cancer', 'Flu', 'Tuberculosis'
],
  datasets: [{
    label: 'Cases count',
    data: [
      2298, 4504, 1240,
      1786, 3612, 2620,
      2671, 3711, 1534,
      2790
    ],
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 205, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(201, 203, 227, 1)',
      'rgba(201, 225, 207, 1)',
      'rgba(251, 203, 100, 1)',
      'rgba(80, 223, 207, 1)'
    ],
    hoverOffset: 26
  }]
};
let config3 = {
  type: 'doughnut',
  data: data4,
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: true,
      legend:{
        labels:{
          color:'white',
        }
      },
      title: {
        display: true,
        text: 'Case count for diseases for WOMEN in Hyderabad for the month of June',
        color:'white'
      }
    },
  }
};
var myChart4 = new Chart(ctx3, config3);
// =========================================================================================================================================================================

var ctx4 = document.getElementById('Chart5').getContext('2d');
const data5 = {
  labels: ['Dengue', 'Typhoid', 'Hepatitis',
  'Jaundice', 'Covid-19', 'Diarrhoeal Diseases',
  'Cholera', 'Cancer', 'Flu', 'Tuberculosis'
],
  datasets: [{
    label: 'Cases count',
    data: [
      1634, 3985, 4941,
      3639, 1734, 1893,
      1582, 4796, 3615,
      1329
    ],
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 205, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(201, 203, 227, 1)',
      'rgba(201, 225, 207, 1)',
      'rgba(251, 203, 100, 1)',
      'rgba(80, 223, 207, 1)'
    ],
    hoverOffset: 26
  }]
};
let config4 = {
  type: 'pie',
  data: data5,
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: true,
      legend:{
        labels:{
          color:'white',
        }
      },
      title: {
        display: true,
        text: 'Case count for diseases for MEN in Hyderabad for the month of June',
        color:'white'
      },
      
    },
  }
};
var myChart5 = new Chart(ctx4, config4);