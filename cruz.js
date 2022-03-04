var polling = 56;
var cash = 0;
document.getElementById("main").innerHTML = "<p>Who will you most tie yourself to during the campaign?</p><br><button onclick='a1()'>Trump</button><br><button onclick='b1()'>Republicans generally</button><br><button onclick='c1()'>Sen. Majority Whip John Cornyn</button><br><button onclick='d1()'>Sen. Majority Leader Mitch McConnell</button><br><button onclick='e1()'>Total Outsider!</button>";
function a1(){
  polling += (Math.floor(Math.random() * 33) - 40)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>This will not help in crucial suburbs like Tarrant and Harris Counties!<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function b1(){
  polling += (Math.floor(Math.random() * 18) - 25)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>It is a GOP mid-term, so this is not a good strategy.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function c1(){
  polling += (Math.floor(Math.random() * 3) - 1)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>This is your best choice; Cornyn is a popular Texan senator.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function d1(){
  polling += (Math.floor(Math.random() * 10) - 30)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>McConnell is uncharismatic and unpopular.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function e1(){
  polling += (Math.floor(Math.random() * 10) - 40)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>You are the incumbent...<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function q2(){
  document.getElementById("main").innerHTML = "<p>What will be your general strategy for the campaign?</p><br><button onclick='a2()'>Run as an outsider</button><br><button onclick='b2()'>Mention your failed presidential campaign</button><br><button onclick='c2()'>Attack attack attack!</button><br><button onclick='d2()'>Point at your record</button>";
}

function a2(){
  polling += (Math.floor(Math.random() * 10) - 20)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>You are the incumbent!<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function b2(){
  polling += (Math.floor(Math.random() * 10) - 15)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>People have already forgotten about it, and that's good because your 180 on Trump since then.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function c2(){
  polling += (Math.floor(Math.random() * 10) - 20)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>This does not satisfy moderates. The only people who hate Beto will vote for you anyway.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function d2(){
  polling += (Math.floor(Math.random() * 20) - 30)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>Good move, though some of your moves have been unpopular, such as your fillibustering.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function q3(){
  document.getElementById("main").innerHTML = "<p>What is your ideology?</p><br><button onclick='a3()'>Moderate</button><br><button onclick='b3()'>Established Republican</button><br><button onclick='c3()'>Firebrand conservative</button>";
}

function a3(){
  polling += (Math.floor(Math.random() * 20) - 20)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>The GOP is quite right wing, and the base is displeased, but this helps with moderates.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q4()'>Next</button>";
}

function b3(){
  polling += (Math.floor(Math.random() * 10) - 15)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>You were an outsider 6 years ago; also, the Republicans are not popular now.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q4()'>Next</button>";
}

function c3(){
  polling += (Math.floor(Math.random() * 10) - 20)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>This does not help with moderate suburbanites.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q4()'>Next</button>";
}

function q4(){
  document.getElementById("main").innerHTML = "<p>Do you want to spend the day fundraising or delivering speeches?</p><br><button onclick='a4()'>Fundraising</button><br><button onclick='b4()'>Delivering speeches</button>";
}

function a4(){
  cash += (Math.floor(Math.random() * 10))/5;
  polling += (Math.floor(Math.random() * 10) + cash + 5)/10;
  cash = 0;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>You send an ad blitz, and it helps you.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q5()'>Next</button>";
}

function b4(){
  polling += (Math.floor(Math.random() * 10) + 15)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>Your speeches motivate the base.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q5()'>Next</button>";
}

function q5(){
  document.getElementById("main").innerHTML = "<p>Which county would you like to focus on today?</p><br><button onclick='a5()'>Dallas County</button><br><button onclick='b5()'>Houston County</button><br><button onclick='c5()'>El Paso County</button><br><button onclick='d5()'>Austin County</button>";
}

function a5(){
  polling += (Math.floor(Math.random() * 11) + 4)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>This is the principal county of the DFW area, and though it is solidly Democratic, it is a good idea to campaign here.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q5()'>Next</button>";
}

function b5(){
  polling += (Math.floor(Math.random() * 2) - 2)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>This is an unusual choice. As Wikipedia says, 'This article is about the county in East Texas. For the city of Houston in southeast Texas, see Houston. For its county, see Harris County, Texas'.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q5()'>Next</button>";
}

function c5(){
  polling += (Math.floor(Math.random() * 7) + 3)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>Good choice. Texas’s westernmost county, El Paso County has over 800,000 people and contains the large city of El Paso.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q5()'>Next</button>";
}

function d5(){
  polling += (Math.floor(Math.random() * 3) - 4)/10;
  polling = 100 * polling;
  polling = Math.round(polling)/100;
  document.getElementById("main").innerHTML = "<p>This is an unusual choice. Austin County, a low-population exurb of Houston, should not be confused with the city of Austin, in Travis County.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q5()'>Next</button>";
}
