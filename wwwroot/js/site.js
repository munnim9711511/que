// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(() => {
    var html = '<table style="float: left; width: 100%;" ><thead><tr><th class="text-left">Counter</th><th class="text-right">Token</th></tr></thead><tbody>';
    var oldData;
    var playtim;
    var voldData = "not played";
    var connection = new signalR.HubConnectionBuilder().withUrl("/hub-token").build();
    var sound = "play";
    var playPromise = document.querySelector('audio');
    var media = document.getElementById("audio");
    connection.on("token", (data) => {
        //console.log(data);
        oldData = data;
        
    
      
        $("#bodyT").empty();
     

        for (x of data.Queue) {


            for (xc of oldData.Queue) {
             
                if (x.RoomLabel != xc.RoomLabel) {
                    
                  
                    if (x.CalledOn != playtim) {
                        document.getElementById("audio").play().catch(function () {
                            // do something
                        });
                    
                    
                               
               
                        playtim = x.CalledOn;
                    }

                    $("#bodyT").append(

                        `<tr><td class=left-align><h3  style=font-weight:bolder;font-size:7em; class=teal-text >${x.RoomLabel}</h3></td ><td  class=center-align ><h3 class=teal-text text-darken-4 style=font-weight:bolder;font-size:7em; >${x.TokenNo}</h3></td></tr>`



                    ).addClass("#1de9b6 teal accent - 1 notis");
                    $("#bodyT h3").addClass("text-darken-4");
            
                    
                    //$("#bodyT").append(

                    //    `<tr style= background-color:crimson;><td  id=f><h3 onChange="test()" style=font-weight:bolder;font-size:7em;   >${x.RoomLabel}</h3></td ><td  class=center-align ><h3  style=font-weight:bolder;font-size:7em >${x.TokenNo}</h3></td></tr>`



                    //);
                    //$("#bodyT h3").addClass("black-text ");
                    //$("#body tr").addClass("#e1bee7 purple lighten-4");
               
                   
                    break;

                }
                else {
                    $("#bodyT").append(

                        `<tr><td class=left-align><h3 onChange="test()" style=font-weight:bolder;font-size:7em; class=teal-text >${x.RoomLabel}</h3></td ><td  class=center-align ><h3 class=teal-text text-darken-4 style=font-weight:bolder;font-size:7em; >${x.TokenNo}</h3></td></tr>`



                    ).addClass("#1de9b6 teal accent - 1 notis");
                    $("#bodyT h3").addClass("text-darken-4");


                    //$("#bodyT").append(

                    //    `<tr style= background-color:crimson;><td  id=f><h3 onChange="test()" style=font-weight:bolder;font-size:7em;   >${x.RoomLabel}</h3></td ><td  class=center-align ><h3  style=font-weight:bolder;font-size:7em >${x.TokenNo}</h3></td></tr>`



                    //);
                    //$("#bodyT h3").addClass("black-text ");
                    //$("#body tr").addClass("#e1bee7 purple lighten-4");
                }
                break;
            }
           
         
           
        }
        voldData = x;
        var c = $("#op").html();
      
        connection.invoke("SendToken",c );
    });
   
  

    connection.start();

   

  
   
});