var randomNumber1=Math.floor(Math.random()*6)+1;
var image1Name="dice"+randomNumber1+".png";
var image1Src="images/"+image1Name;
document.querySelectorAll("img")[0].setAttribute("src",image1Src);

var randomNumber2=Math.floor(Math.random()*6)+1;
var image2Name="dice"+randomNumber2+".png";
var image2Src="images/"+image2Name;
document.querySelectorAll("img")[1].setAttribute("src",image2Src);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 wins"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player2 wins"
}
else
{
    document.querySelector("h1").innerHTML="Match Drow!"
}