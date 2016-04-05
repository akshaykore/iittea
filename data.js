//var hello = '<h1>hello wasup yo!!</h1> <p>KyA HAAL CHAAL</p>';

/*var info = function(){
    var h1 = document.createElement('DIV');
    var textelement = document.createTextNode(this.name);
    h1.appendChild(textelement);
    document.getElementById(map).appendChild(h1);
}*/

/*var createmarker = function(x){
    //y = '<h1>' + y.name + '</h1>';
    this.marker = L.marker(x.latlng).bindPopup('<h1>' + x.name + '</h1>');
    return this.marker;
}

var createcircle = function(x){
    this.circle = L.circle(x, circleradius, circle_options);
    return this.circle;
}*/

var ampmformat = function(x){
    
    var c = Math.floor(x/100);
    var hour = c%12;
    var minute = Math.round(((x/100) - c)*100);
    
    var timeformat;
    
    if(c==12){
        hour = 12;
        timeformat = "PM"; 
    }
    else if(c>12){
        timeformat = "PM"; 
    }
    else{
        timeformat = "AM";
    }
    
    if(hour<10){
        var temp = hour.toString();
        hour = "0" + temp;
    }
    else{
        hour;
    }
    
    if(minute<10){
        var temp = minute.toString();
        minute = "0" + temp;
    }
    else{
        minute;
    }
    
    var timevalue =  hour + ":" + minute + " " + timeformat;
    
    return timevalue;
}


var greenIcon = L.icon({
    iconUrl: 'chai.svg',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [40, 40], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var circleradius = 160;

// Define circle options
// http://leafletjs.com/reference.html#circle
var circle_options = {
    color: '#d17213',      // Stroke color
    opacity: 1,         // Stroke opacity
    weight: 0.2,         // Stroke weight
    fillColor: '#d17213',  // Fill color
    fillOpacity: 0.2    // Fill opacity
};

var refdata = [
    
  {
    "name": "Academic Parking Area Chai Tapri",
    "openhr": 1600,
    "closehr": 2000,
    "open": 57600,
    "close": 72000,
    "lat": 19.12994407653439,
    "lng": 72.916080057621
  },
  {
    "name": "Amul Canteen",
    "openhr": 1400,
    "closehr": 300,
    "open": 50400,
    "close": 10800,
    "lat": 19.13476891619435,
    "lng": 72.90555238723755
  },
  {
    "name": "Brewberrys",
    "openhr": 1000,
    "closehr": 200,
    "open": 36000,
    "close": 7200,
    "lat": 19.13379838466758,
    "lng": 72.91128158569335
  },
  {
    "name": "Campus Hub",
    "openhr": 1000,
    "closehr": 100,
    "open": 36000,
    "close": 3600,
    "lat": 19.13451044621443,
    "lng": 72.9101550579071
  },
  {
    "name": "Chemical Department Canteen",
    "openhr": 800,
    "closehr": 1700,
    "open": 28800,
    "close": 61200,
    "lat": 19.1301927,
    "lng": 72.9173029
  },
  {
    "name": "Electrical Department Canteen",
    "openhr": 800,
    "closehr": 1700,
    "open": 28800,
    "close": 61200,
    "lat": 19.1320385,
    "lng": 72.9169118
  },
  {
    "name": "Gulmohar Cafeteria",
    "openhr": 800,
    "closehr": 2000,
    "open": 28800,
    "close": 72000,
    "lat": 19.129793,
    "lng": 72.9151419
  },
  {
    "name": "H 12 Xerox Shop",
    "openhr": 1000,
    "closehr": 1800,
    "open": 36000,
    "close": 64800,
    "lat": 19.1353413,
    "lng": 72.9047265
  },
  {
    "name": "H 12-14",
    "openhr": 2200,
    "closehr": 400,
    "open": 79200,
    "close": 14400,
    "lat": 19.135047657876147,
    "lng": 72.90515005588531
  },
  {
    "name": "H 12-14 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1350586,
    "lng": 72.9051082
  },
  {
    "name": "H 12-14 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1350586,
    "lng": 72.9051082
  },
  {
    "name": "H1",
    "openhr": 1200,
    "closehr": 1400,
    "open": 43200,
    "close": 50400,
    "lat": 19.1362259697871,
    "lng": 72.91415959596634
  },
  {
    "name": "H1",
    "openhr": 1800,
    "closehr": 200,
    "open": 64800,
    "close": 7200,
    "lat": 19.1362259697871,
    "lng": 72.91415959596634
  },
  {
    "name": "H1 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1362571,
    "lng": 72.9139938
  },
  {
    "name": "H1 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1362571,
    "lng": 72.9139938
  },
  {
    "name": "H10",
    "openhr": 1200,
    "closehr": 1430,
    "open": 43200,
    "close": 52200,
    "lat": 19.12871757171624,
    "lng": 72.9155570268631
  },
  {
    "name": "H10",
    "openhr": 1830,
    "closehr": 300,
    "open": 66600,
    "close": 10800,
    "lat": 19.12871757171624,
    "lng": 72.9155570268631
  },
  {
    "name": "H10 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1290631,
    "lng": 72.9157813
  },
  {
    "name": "H10 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1290631,
    "lng": 72.9157813
  },
  {
    "name": "H11",
    "openhr": 1100,
    "closehr": 230,
    "open": 39600,
    "close": 9000,
    "lat": 19.1329738,
    "lng": 72.9117144
  },
  {
    "name": "H11 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.132892,
    "lng": 72.9118093
  },
  {
    "name": "H11 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.132892,
    "lng": 72.9118093
  },
  {
    "name": "H15",
    "openhr": 2200,
    "closehr": 300,
    "open": 79200,
    "close": 10800,
    "lat": 19.137992154903756,
    "lng": 72.91381359100342
  },
  {
    "name": "H15 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.13804283425523,
    "lng": 72.9138457775116
  },
  {
    "name": "H15 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.13804283425523,
    "lng": 72.9138457775116
  },
  {
    "name": "H15C Xerox Shop",
    "openhr": 1000,
    "closehr": 1800,
    "open": 36000,
    "close": 64800,
    "lat": 19.13805803805765,
    "lng": 72.91385114192963
  },
  {
    "name": "H16",
    "openhr": 1800,
    "closehr": 200,
    "open": 64800,
    "close": 7200,
    "lat": 0,
    "lng": 0
  },
  {
    "name": "H16 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.137992154903756,
    "lng": 72.91316986083984
  },
  {
    "name": "H16 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.137992154903756,
    "lng": 72.91316986083984
  },
  {
    "name": "H2",
    "openhr": 1200,
    "closehr": 1430,
    "open": 43200,
    "close": 52200,
    "lat": 19.136299455627743,
    "lng": 72.91264414787292
  },
  {
    "name": "H2",
    "openhr": 1800,
    "closehr": 300,
    "open": 64800,
    "close": 10800,
    "lat": 19.136299455627743,
    "lng": 72.91264414787292
  },
  {
    "name": "H2 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1364536,
    "lng": 72.9125695
  },
  {
    "name": "H2 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1364536,
    "lng": 72.9125695
  },
  {
    "name": "H3",
    "openhr": 1200,
    "closehr": 1430,
    "open": 43200,
    "close": 52200,
    "lat": 19.136213299811278,
    "lng": 72.91131913661957
  },
  {
    "name": "H3",
    "openhr": 1800,
    "closehr": 200,
    "open": 64800,
    "close": 7200,
    "lat": 19.136213299811278,
    "lng": 72.91131913661957
  },
  {
    "name": "H3 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1362317,
    "lng": 72.9114868
  },
  {
    "name": "H3 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1362317,
    "lng": 72.9114868
  },
  {
    "name": "H4",
    "openhr": 1300,
    "closehr": 1400,
    "open": 46800,
    "close": 50400,
    "lat": 19.1361170079632,
    "lng": 72.91033744812012
  },
  {
    "name": "H4",
    "openhr": 1800,
    "closehr": 200,
    "open": 64800,
    "close": 7200,
    "lat": 19.1361170079632,
    "lng": 72.91033744812012
  },
  {
    "name": "H4 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1362829,
    "lng": 72.9103031
  },
  {
    "name": "H4 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1362829,
    "lng": 72.9103031
  },
  {
    "name": "H5",
    "openhr": 1300,
    "closehr": 1400,
    "open": 46800,
    "close": 50400,
    "lat": 19.134875344892016,
    "lng": 72.91009068489075
  },
  {
    "name": "H5",
    "openhr": 1900,
    "closehr": 100,
    "open": 68400,
    "close": 3600,
    "lat": 19.134875344892016,
    "lng": 72.91009068489075
  },
  {
    "name": "H5 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1349982,
    "lng": 72.9101161
  },
  {
    "name": "H5 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1349982,
    "lng": 72.9101161
  },
  {
    "name": "H6",
    "openhr": 1200,
    "closehr": 1400,
    "open": 43200,
    "close": 50400,
    "lat": 19.135518983649504,
    "lng": 72.90658235549927
  },
  {
    "name": "H6",
    "openhr": 1800,
    "closehr": 200,
    "open": 64800,
    "close": 7200,
    "lat": 19.135518983649504,
    "lng": 72.90658235549927
  },
  {
    "name": "H6 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.135459,
    "lng": 72.9072173
  },
  {
    "name": "H6 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.135459,
    "lng": 72.9072173
  },
  {
    "name": "H7",
    "openhr": 1300,
    "closehr": 1400,
    "open": 46800,
    "close": 50400,
    "lat": 19.134799324400674,
    "lng": 72.90793418884277
  },
  {
    "name": "H7",
    "openhr": 1800,
    "closehr": 200,
    "open": 64800,
    "close": 7200,
    "lat": 19.134799324400674,
    "lng": 72.90793418884277
  },
  {
    "name": "H7 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1349178,
    "lng": 72.9076027
  },
  {
    "name": "H7 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1349178,
    "lng": 72.9076027
  },
  {
    "name": "H8",
    "openhr": 1200,
    "closehr": 1400,
    "open": 43200,
    "close": 50400,
    "lat": 19.133567787565426,
    "lng": 72.91115283966064
  },
  {
    "name": "H8",
    "openhr": 1900,
    "closehr": 200,
    "open": 68400,
    "close": 7200,
    "lat": 19.133567787565426,
    "lng": 72.91115283966064
  },
  {
    "name": "H8 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1337133,
    "lng": 72.9112569
  },
  {
    "name": "H8 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1337133,
    "lng": 72.9112569
  },
  {
    "name": "H9",
    "openhr": 1300,
    "closehr": 1400,
    "open": 46800,
    "close": 50400,
    "lat": 19.135093270106562,
    "lng": 72.90823459625244
  },
  {
    "name": "H9",
    "openhr": 1800,
    "closehr": 200,
    "open": 64800,
    "close": 7200,
    "lat": 19.135093270106562,
    "lng": 72.90823459625244
  },
  {
    "name": "H9 Mess",
    "openhr": 730,
    "closehr": 930,
    "open": 27000,
    "close": 34200,
    "lat": 19.1357803,
    "lng": 72.9084308
  },
  {
    "name": "H9 Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1357803,
    "lng": 72.9084308
  },
  {
    "name": "IDC Descafe",
    "openhr": 1630,
    "closehr": 1900,
    "open": 59400,
    "close": 68400,
    "lat": 19.1333569,
    "lng": 72.9174428
  },
  {
    "name": "IDC Santosh",
    "openhr": 830,
    "closehr": 1700,
    "open": 30600,
    "close": 61200,
    "lat": 19.1332269,
    "lng": 72.9174877
  },
  {
    "name": "Kresit",
    "openhr": 800,
    "closehr": 2000,
    "open": 28800,
    "close": 72000,
    "lat": 19.1304506,
    "lng": 72.9156371
  },
  {
    "name": "Maddu Mess",
    "openhr": 400,
    "closehr": 700,
    "open": 14400,
    "close": 25200,
    "lat": 19.12683725119361,
    "lng": 72.91920751333237
  },
  {
    "name": "Main Gate Tapri Next to Laxmi",
    "openhr": 900,
    "closehr": 2100,
    "open": 32400,
    "close": 75600,
    "lat": 19.124591988681434,
    "lng": 72.91599154472351
  },
  {
    "name": "Market Gate Shop / Upahar",
    "openhr": 900,
    "closehr": 1900,
    "open": 32400,
    "close": 68400,
    "lat": 19.12895070969672,
    "lng": 72.9196286201477
  },
  {
    "name": "Nescafe SOM",
    "openhr": 900,
    "closehr": 1700,
    "open": 32400,
    "close": 61200,
    "lat": 19.1320691,
    "lng": 72.9153859
  },
  {
    "name": "QIP",
    "openhr": 1000,
    "closehr": 2400,
    "open": 36000,
    "close": 86400,
    "lat": 19.1363289,
    "lng": 72.9184784
  },
  {
    "name": "Staff Canteen",
    "openhr": 900,
    "closehr": 1700,
    "open": 32400,
    "close": 61200,
    "lat": 19.133015366824345,
    "lng": 72.91488915681839
  },
  {
    "name": "Sunrise Dhaba",
    "openhr": 1300,
    "closehr": 1500,
    "open": 46800,
    "close": 54000,
    "lat": 19.13545816749629,
    "lng": 72.91433393955231
  },
  {
    "name": "Sunrise Dhaba",
    "openhr": 2000,
    "closehr": 2300,
    "open": 72000,
    "close": 82800,
    "lat": 19.13545816749629,
    "lng": 72.91433393955231
  },
  {
    "name": "Tansa Canteen",
    "openhr": 1300,
    "closehr": 1400,
    "open": 46800,
    "close": 50400,
    "lat": 19.13577998605277,
    "lng": 72.9101550579071
  },
  {
    "name": "Tansa Canteen",
    "openhr": 2000,
    "closehr": 2200,
    "open": 72000,
    "close": 79200,
    "lat": 19.13577998605277,
    "lng": 72.9101550579071
  },
  {
    "name": "Tansa Mess",
    "openhr": 730,
    "closehr": 900,
    "open": 27000,
    "close": 32400,
    "lat": 19.1359103,
    "lng": 72.9097995
  },
  {
    "name": "Tansa Mess",
    "openhr": 1630,
    "closehr": 1800,
    "open": 59400,
    "close": 64800,
    "lat": 19.1359103,
    "lng": 72.9097995
  }

    
]

var refdatalenght = refdata.length;

console.log(refdatalenght);


var data = [];

var createdataarray = function(){
    for(var i =0; i < refdatalenght; i++){
        data.push({
        "name": refdata[i].name,
        "info": "<h1><b>" + refdata[i].name + "</b></h1><p>Opening Time: " + ampmformat(refdata[i].openhr) + "</p><p>Closing Time: " + ampmformat(refdata[i].closehr) + "</p>",
        "open": refdata[i].openhr,
        "close": refdata[i].closehr,
        "marker": L.marker([refdata[i].lat, refdata[i].lng], {icon: greenIcon}),
        "circle" : L.circle([refdata[i].lat, refdata[i].lng], circleradius, circle_options)
    });
    }
}



createdataarray();

console.log(data.length);

    /*function value() {
    var x = document.getElementById("slider").value;
    document.getElementById("timevalue").innerHTML = x;
}*/ 
    var southWest = L.latLng(19.115326790452478, 72.88415908813477);
    var northEast = L.latLng(19.143870855908194, 72.92681694030762);    
    var bounds = L.latLngBounds(southWest, northEast);
    var c2latlng = [19.135, 72.91];
    var c1latlng = [19.133344792259322, 72.91745603084564];
    L.mapbox.accessToken = 'pk.eyJ1IjoiYWtzaGF5a29yZSIsImEiOiIyZjZiMjc1NmIwMzc4MTMxNmRiMDI1MDIyMzMxNjA5MiJ9.5qmMlHQeOJXMuKEnp_fx-g';
var map = L.mapbox.map('map', 'akshaykore.ph7j7bbf', {maxBounds: bounds, zoomControl: false, minZoom: 14})
    .setView([19.133005230646692 , 72.91557312011719 ], 15);
    
//new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);
    //L.marker(c2latlng).addTo(map);


/*var descafe = L.marker(c2latlng).bindPopup(hello);
    var descafer = L.circle(c2latlng, 160, circle_options);
    var h2 = L.marker(c1latlng);
    var h2r = L.circle(c1latlng, 160, circle_options);*/

/*template to create markers and circles and add popup info
map.addLayer(data[0].marker);
var info = "<h1>"+ data[0].name +"</h1> <p> <b>Opening Time : </b>"+ data[0].openhr +"</p> <p>Closing Time : "+ data[0].closehr +"<p>"
data[0].marker.bindPopup(info);
map.addLayer(data[0].circle);*/

//map.addLayer(createmarker(data[0]));
//map.addLayer(createcircle(data[0].latlng));


//remove marker and circle
var removechai = function(x){
    map.removeLayer(x.marker);
    map.removeLayer(x.circle);
}

//var k = function(){
//    map.removeLayer(data[0].marker));
//}

    
var changeslidername = function(){
        //alert("HEllo!!");
        var a  = document.getElementById("slider");
        var slidervalue = a.value;
        var c = Math.floor(slidervalue/100);
        var d = Math.abs(((slidervalue/100) - c)*60);
        //alert(b);
        
        if (c<10){
            var e = c.toString();
            var c = "0" + c;
        }
        if (c>12){
            var e = c - 12;
            if (e<10){
                e = e.toString();
                c = "0" + e;
            }
            else{
                c = e;
            }
        }
        if (d<10){
            var e = d.toString();
            var d = "0" + d;
        }
        
        document.getElementById("hour").innerHTML=c;
        document.getElementById("minute").innerHTML=d;
        if(slidervalue == 2400){
            document.getElementById("ampm").innerHTML="AM";
            document.getElementById("hour").innerHTML="00";
            document.getElementById("minute").innerHTML="00";
        }    
    
        else if((slidervalue>=1200)&&(slidervalue<2400)){
            document.getElementById("ampm").innerHTML="PM";
            document.getElementById("hour").innerHTML=c;
            document.getElementById("minute").innerHTML=d;
        }
        
        else{
            document.getElementById("ampm").innerHTML="AM";
            document.getElementById("hour").innerHTML=c;
            document.getElementById("minute").innerHTML=d;
        }
        
        
    }

var makelayer = function(x){
    map.addLayer(x.marker);
        var info = x.info;
        x.marker.bindPopup(info);
        map.addLayer(x.circle);
}
 

var updatechaimap = function(){
    //removeall();
    
    
    
    for(var i = 0; i < refdatalenght; i++){
        var sliderelement = document.getElementById("slider");
        var slidervaluestring = sliderelement.value;
        var slidervalue = Number(slidervaluestring);
        
        if(data[i].open > data[i].close){
            var temp = data[i].close + 2400;
            //console.log("temp :"+temp+" slider "+slidervalue);
            
            if(slidervalue < 1200){
                var xtemp = slidervalue + 2400;
                if((xtemp >= data[i].open)&&(xtemp <= temp)){
                    makelayer(data[i]);
                    console.log("yolo1 "+xtemp);
                }
            }
            else{
                if((slidervalue >= data[i].open) && (slidervalue <= temp)){
                   makelayer(data[i]); 
                    console.log("yolo2 "+slidervalue);
                }
            }
        }
        
        else {
            if((slidervalue <= data[i].close) && (slidervalue >= data[i].open)){
                makelayer(data[i]);
                //console.log("yolo3 "+slidervalue);
            }
        }
        
        /*if(slidervalue>data[i].open){
            makelayer(data[i]);
        }
        */
        
    }
}

updatechaimap();

var removeall = function(){
    for(var i = 0; i<refdatalenght; i++){
        removechai(data[i]);
    }
}

