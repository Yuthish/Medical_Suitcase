
const random_num=(k) => {
  let arr = [];
  for(let i=1; i<=k; i++){
    arr.push(Math.floor(1000 + Math.random() * 9000))
  }
  return arr
}
const random_mon=(k) => {
  let arr = [];
  let mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  for(let i=1; i<=k; i++){
    arr.push(mon[Math.floor(Math.random() * (11 - 0) + 0)])
  }
  return arr
}

const random_N=()=>{
  return Math.floor(Math.random() * (11- 3) + 3)
}

const random_dis = (k) => {
  let arr = [];
  let dis = ['Dengue', 'Typhoid', 'Hepatitis', 'Jaundice', 'Covid-19', 'Diarrhoeal Diseases', 'Cholera', 'Cancer', 'Flu', 'Tuberculosis']
  for(let i=1; i<=k; i++){
    arr.push(dis[Math.floor(Math.random() * (9 - 0) + 0)])
  }
  return arr
  console.log(arr);
}

const random_N_mon=()=>{
  return Math.floor(Math.random() * (11- 3) + 3)
}
const random_N_dis=()=>{
  return Math.floor(Math.random() * (9- 3) + 3)
}
const random_N_dis_bar=()=>{
  return Math.floor(Math.random() * (9- 5) + 5)
}
const random_color =(k)=>{
  let arr = [];
  let col = [
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
  ]
  for(let i=1; i<=k; i++){
    arr.push(col[Math.floor(Math.random() * (9 - 0) + 0)])
  }
  return arr
}

var ctx = document.getElementById('Chart1').getContext('2d');
let r = random_N();
const data = {
  labels: random_mon(r),
  datasets: [{
      label: 'Mumbai',
      data: random_num(r),
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Hyderabad',
      data: random_num(r),
      fill: false,
      borderColor: 'rgb(255, 205, 86)',
    },
    {
      label: 'Bangalore',
      data: random_num(r),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Chennai',
      data: random_num(r),
      fill: false,
      borderColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Delhi',
      data: random_num(r),
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
        max: 15000,
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
let a = random_N_dis()
const data1 = {
  labels: random_dis(a),
  datasets: [{
      label: 'Chennai',
      data: random_num(a),
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Hyderabad',
      data: random_num(a),
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
      data: random_num(a),
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
let b = random_N_dis_bar()
var ctx2 = document.getElementById('Chart3').getContext('2d');
const labels = random_dis(b)
const data3 = {
  labels: labels,
  datasets: [{
      label: 'August',
      data: random_num(b)
    },
    {
      label: 'October',
      data: random_num(b)
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
let c = random_N_dis_bar()
const data4 = {
  labels: random_dis(c),
  datasets: [{
    label: 'Cases count',
    data: random_num(c),
    backgroundColor: random_color(c),
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
let d = random_N_dis_bar();
const data5 = {
  labels: random_dis(d),
  datasets: [{
    label: 'Cases count',
    data: random_num(d),
    backgroundColor: random_color(d),
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