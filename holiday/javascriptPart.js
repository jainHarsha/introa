var imageArray =[
   "rockefeller.jpg", "jetsboy.gif",
    "HA.gif", "falling.gif",
    "xmass-tree.jpg",
 "mickey.gif",
    "snowflake1.jpg", 
    "tenor.gif",
 "santaa.gif",    
    "santa.gif",
"Home.gif",
    "fail.gif",
    "present.jpg",
    "sled.gif",
 "snowtree.jpg","fire.gif", "ornaments.jpg","home2.gif",  ];
var currentIndex = 0

function renderImage(){
    if(currentIndex<0){
    currentIndex = imageArray.length - 1;
    } else if(currentIndex>=imageArray.length) {
        currentIndex = 0;}
    $('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

function forwardImage(){
    currentIndex++;
    renderImage();
}
function backImage(){
    currentIndex--;
    renderImage();
}
    $('#forwardButton').on('click', forwardImage);
    $('#backButton').on('click', backImage);

    var name = prompt("what is your name?");
    var outputString = ("Happy Holidays, " + name + "!")
    $('h1').html(outputString);

 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Best parts of Christmas', 'How much I love it!'],
          ['Presents',     7],
          ['Snow',      10],
          ['Vacation',  9],
          ['Food', 7],
          ['Lights',    8]
        ]);
        var chartWidth= $('body').width()*0.5;
        var options = {
          title: 'My Favorite parts of Christmas',
            backgroundColor:'#E5E2DD',
            width: chartWidth,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
