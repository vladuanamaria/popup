<html>
<head>
<style>
div.background
  {
  width:500px;
  height:250px;
  background:url(roze.jpeg) repeat;
  border:2px solid black;
  }
div.transbox
  {
  width:400px;
  height:180px;
  margin:30px 50px;
  background-color:#ffffff;
  border:1px solid black;
  opacity:0.6;
  filter:alpha(opacity=60); 
  }
div.transbox p
  {
  margin:30px 40px;
  font-weight:bold;
  color:#000000;
  }

</style>
</head>

<body>

<div class="background">
<div class="transbox">
<p id="text">This is some text that is placed in the transparent box.
This is some text that is placed in the transparent box.
This is some text that is placed in the transparent box.

</p>
</div>
</div>
 <script>
function myFunction(){
var rand = myArray[Math.floor(Math.random() * myArray.length)];
  
  document.write(rand);
  document.getElementById("text").innerHTML=rand;
}
var myArray = ["lorem ipsum1", "lorem ipsum2", "lorem ipsum3", "lorem ipsum4"];

document.getElementById("text").innerHTML=myFunction();


</script>

</body>
</html>
