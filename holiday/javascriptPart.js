var imageArray =[
   "https://cbsdallas.files.wordpress.com/2012/11/the-rockefeller-center-christmas-tree-new-york-ny.jpg?w=600&h=360&crop=1", "http://25.media.tumblr.com/710f752495613bf94569626f79e6124f/tumblr_mxzf3v2blM1r5k9koo5_r3_250.gif",
    "http://image.mogoroom.com/mogoroom/2016-07/cms/2/2/37772/37772_1467774066082.gif",    "http://68.media.tumblr.com/31108c682ca373f80ba3add88b0f7618/tumblr_meqktelMu31qj8xp7o6_250.gif",
    "https://cdn-media-2.lifehack.org/wp-content/files/2014/12/xmass-tree.jpg",
    "https://thefw.com/files/2012/12/tumblr_lwqnl2Nhw51qzc6foo1_500.gif",
    "snowflake1.jpg", 
    "tenor.gif",
 "santaa.gif",    
    "santa.gif",
"http://thefw.com/files/2012/12/tumblr_md1n9hUPPN1rewv0co1_500.gif",
    "fail.gif",
    "http://www.savvygirltravel.com/wp-content/uploads/2016/10/a-christmas-gift.jpg",
    "sled.gif",
    "snowtree.jpg","http://bestanimations.com/Holidays/Christmas/merrychristmas/merry-christmas-greeting-gif-6.gif", "ornaments.jpg","https://45.media.tumblr.com/b31727c72d392947b42705859bdb0993/tumblr_nyjz3jDNlq1r76to2o1_500.gif",  ];
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
