
var loadFile = function(event) {





  var  output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);

    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }


var svg1 = document.createElement('svg1');
svg1.setAttribute('x', -100);


  var description1 = document.getElementById("outputDescription");
  description1.innerHTML = "Thumbnail on the subscription site, 210x118";

var rect1 = document.getElementById("rect1");
rect1.style.visibility = "visible";

var text1 = document.getElementById("text1");
text1.style.visibility = "visible";


/*
  var description2 = document.getElementById("output2Description");
  description2.innerHTML = "Thumbnail auf der Start-Seite und der Suche in der minimalen Größe, 210x118";

  var description3 = document.getElementById("output3Description");
  description3.innerHTML = "Thumbnail auf der Start-Seite und der Suche in der maximalen Größe, 360x202";

    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.height = 300;
    output.style.width = 300;
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
    */
  };
