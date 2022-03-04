var polling = 56;
document.getElementById("main").innerHTML = "<p>Who will you most tie yourself to?</p><br><button onclick='t1()'>Trump</button><br><button onclick='g1()'>Republicans generally</button><br><button onclick='c1()'>Sen. Majority Whip John Cornyn</button><br><button onclick='m1()'>Sen. Majority Leader Mitch McConnell</button><br><button onclick='o1()'>Total Outsider!</button>";
function t1(){
  polling += (Math.floor(Math.random() * 33) - 40)/10;
  document.getElementById("main").innerHTML = "<p>This will not help in crucial suburbs like Tarrant and Harris Counties!<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function g1(){
  polling += (Math.floor(Math.random() * 18) - 25)/10;
  document.getElementById("main").innerHTML = "<p>It is a GOP mid-term, so this is not a good strategy.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function c1(){
  polling += (Math.floor(Math.random() * 3) - 1)/10;
  document.getElementById("main").innerHTML = "<p>This is your best choice; Cornyn is a popular Texan senator.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function m1(){
  polling += (Math.floor(Math.random() * 10) - 30)/10;
  document.getElementById("main").innerHTML = "<p>McConnell is uncharismatic and unpopular.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function o1(){
  polling += (Math.floor(Math.random() * 10) - 40)/10;
  document.getElementById("main").innerHTML = "<p>You are the incumbent...<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q2()'>Next</button>";
}

function q2(){
  document.getElementById("main").innerHTML = "<p>What will be your general strategy for the campaign?</p><br><button onclick='a2()'>Run as an outsider</button><br><button onclick='b2()'>Mention your failed presidential campaign</button><br><button onclick='c2()'>Attack attack attack!</button><br><button onclick='d2()'>Point at your record</button>";
}

function a2(){
  polling += (Math.floor(Math.random() * 10) - 20)/10;
  document.getElementById("main").innerHTML = "<p>You are the incumbent!<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function b2(){
  polling += (Math.floor(Math.random() * 10) - 15)/10;
  document.getElementById("main").innerHTML = "<p>People have already forgotten about it, and that's good because your 180 on Trump since then.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function c2(){
  polling += (Math.floor(Math.random() * 10) - 20)/10;
  document.getElementById("main").innerHTML = "<p>This does not satisfy moderates. The only people who hate Beto will vote for you anyway.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function d2(){
  polling += (Math.floor(Math.random() * 20) - 30)/10;
  document.getElementById("main").innerHTML = "<p>Good move, though some of your moves have been unpopular, such as your fillibustering.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function q3(){
  document.getElementById("main").innerHTML = "<p>What is your ideology?</p><br><button onclick='a3()'>Moderate</button><br><button onclick='b3()'>Established Republican</button><br><button onclick='c3()'>Firebrand conservative</button>";
}

function a3(){
  polling += (Math.floor(Math.random() * 20) - 20)/10;
  document.getElementById("main").innerHTML = "<p>The GOP is quite right wing, and the base is displeased, but this helps with moderates.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function b3(){
  polling += (Math.floor(Math.random() * 10) - 15)/10;
  document.getElementById("main").innerHTML = "<p>You were an outsider 6 years ago; also, the Republicans are not popular now.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}

function c3(){
  polling += (Math.floor(Math.random() * 10) - 20)/10;
  document.getElementById("main").innerHTML = "<p>This does not help with moderate suburbanites.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p><br><button onclick='q3()'>Next</button>";
}
