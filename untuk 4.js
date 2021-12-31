// JavaScript Document
function pilih(){
    var pil=document.getElementById("form1").pic.value;
     if (pil=="1")
       {
           document.getElementById("img").innerHTML="<img src='11.jpeg'>";
           window.alert("Ini Adalah Gambar Dari Beruang Es");
       }
       else if (pil=="2")
       {
           document.getElementById("img").innerHTML="<img src='10.jpeg'>";
           window.alert("Ini Adalah Gambar Dari Singa");
       }
       else if (pil=="3")
       {
        document.getElementById("img").innerHTML="<img src='5.jpeg'>";
        window.alert("Ini Adalah Gambar Dari Kucing");
       }
       else if (pil=="4")
       {
        document.getElementById("img").innerHTML="<img src='4.png'>";
        window.alert("Ini Adalah Gambar Dari Kambing");
       }
       else if (pil=="5")
       {
           document.getElementById("img").innerHTML="<img src='2.jpg'>";
           window.alert("Ini Adalah Gambar Dari gajah");
       }
       else if (pil=="6")
       {
           document.getElementById("img").innerHTML="<img src='6.jpeg'>";
           window.alert("Ini Adalah Gambar Dari panda");
       }
       else if (pil=="7")
       {
           document.getElementById("img").innerHTML="<img src='7.jpeg'>";
           window.alert("Ini Adalah Gambar Dari sapi");
       }
       else if (pil=="8")
       {
           document.getElementById("img").innerHTML="<img src='8.jpeg'>";
           window.alert("Ini Adalah Gambar Dari Monyet");
       }else{
           document.getElementById("img").innerHTML="<img src='search.png'>";
       }
       
   }