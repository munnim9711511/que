﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(() => {
    var oldData;
    var connection = new signalR.HubConnectionBuilder().withUrl("/hub-token").build();
    connection.on("token", (data) => {
        oldData = data;

       
        $("#bodyT").empty();
     

        for (x of data.Queue) {


            for (xc of oldData.Queue) {
                if (x.RoomLabel == xc.RoomLabel) {
                    $("#bodyT").append(

                        `<tr><td class=left-align><h3 onChange="test()" style=font-weight:bolder  >${x.RoomLabel}</h3></td ><td  class=center-align ><h3  style=font-weight:bolder >${x.TokenNo}</h3></td></tr>`



                    ).addClass("#1de9b6 teal accent - 1 notis");
                    $("#bodyT h3").addClass("red-text");
                    break;

                }
                else {
                    $("#bodyT").append(

                        `<tr><td class=left-align><h3 onChange="test()" style=font-weight:bolder class=teal-text >${x.RoomLabel}</h3></td ><td  class=center-align ><h3 class=teal-text text-darken-4 style=font-weight:bolder >${x.TokenNo}</h3></td></tr>`



                    ).addClass("#1de9b6 teal accent - 1 notis");
                    $("#bodyT h3").addClass("text-darken-4");
                }
                break;
            }
           
         
           
        }
        var c = $("#op").html();
      
        connection.invoke("SendToken",c );
    });
   
  

    connection.start();

   
    $("#bodyT").on("change","table .notis", () => {

        alert("cahnge");

    })
  
   
});