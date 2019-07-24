// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(() => {
    function callData() {

        voldData = x;
        var c = $("#op").html();

        connection.invoke("SendToken", c);


    }
    function blink() {

        function color1() {

            $("#d").addClass("#ec407a pink lighten-1");
        }
        function colorR() {
            $("#d").removeClass("#ec407a pink lighten-1");

        }
        var myVar = setInterval(color1, 8);
        var myVar2 = setInterval(colorR, 60);
      
        setTimeout(() => {

            clearInterval(myVar);
            clearInterval(myVar2);

        },1000);


    }
    var oldData;
    var playtim;
    var voldData = "not played";
    var connection = new signalR.HubConnectionBuilder().withUrl("/hub-token").build();
    var sound = "play";
    var playPromise = document.querySelector('audio');
    var media = document.getElementById("audio");
    connection.on("token", (data) => {

        clearInterval(myVar4);

        //console.log(data);
        oldData = data;
        
    
      
        $("#bodyT").empty();
     

        for (x of data.Queue) {


            for (xc of oldData.Queue) {
                if ($("#op").html() == 0) {


                    if (x.RoomLabel == xc.RoomLabel) {


                        if (x.CalledOn != playtim) {
                            document.getElementById("audio").play().catch(function () {
                                // do something
                            });




                            playtim = x.CalledOn;
                            blink();
                        }

                 
                        $("#bodyT").append(

                            `<tr  id=d style= background-color:crimson;><td  id=f><h3 onChange="test()" style=font-weight:bolder;font-size:7em;   >${x.RoomLabel}</h3></td ><td  class=center-align ><h3  style=font-weight:bolder;font-size:7em >${x.TokenNo}</h3></td></tr>`



                        );
                       
                    


                        break;

                    }
                    else {
                        $("#bodyT").append(

                            `<tr><td class=left-align><h3 onChange="test()" style=font-weight:bolder;font-size:7em;  >${x.RoomLabel}</h3></td ><td  class=center-align ><h3  style=font-weight:bolder;font-size:7em; >${x.TokenNo}</h3></td></tr>`



                        ).addClass("#e0e0e0 grey lighten-2");
                       


                    }


                }
                else {

                    if ((x.TokenNo != xc.TokenNo) && (x.CalledOn != playtim)  ) {
                        $("#bodyT").append(
                            `<tr id=d><td class=left-align><h3 onChange="test()" style=font-weight:bolder;font-size:7em;  >${x.RoomLabel}</h3></td ><td  class=center-align ><h3  style=font-weight:bolder;font-size:7em; >${x.TokenNo}</h3></td></tr>`



                        );

                      
                            document.getElementById("audio").play().catch(function () {
                                // do something
                            });




                            playtim = x.CalledOn;
                            blink();
                           
                      
                      
                      
                       

                    
                     
                        
                        break;

                    }
                    else {
                        $("#bodyT").append(

                            `<tr  ><td class=left-align><h3 onChange="test()" style=font-weight:bolder;font-size:7em;  >${x.RoomLabel}</h3></td ><td  class=center-align ><h3 style=font-weight:bolder;font-size:7em; >${x.TokenNo}</h3></td></tr>`



                        ).addClass("#e0e0e0 grey lighten-2");


                   
                    }

                }
              
                break;
            }
           
            var myVar4 = setInterval(callData, 2000);
           
        }
      
    
    

       
      
    });
   
  

    connection.start();

   

  
   
});