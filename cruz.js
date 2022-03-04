var polling = 56;

document.getElementById("main").innerHTML = "<p>Who will you most tie yourself to?</p><br><button onclick='t1()'>Trump</button><br><button onclick='g1()'>Republicans generally</button><br><button onclick='c1()'>Sen. Majority Whip John Cornyn</button><br><button onclick='m1()'>Sen. Majority Leader Mitch McConnell</button><br><button onclick='o1()'>Total Outsider!</button>";

function t1(){
  polling += (Math.floor(Math.random() * 33) - 40)/10;
  document.getElementById("main").innerHTML = "<p>This will not help in crucial suburbs like Tarrant and Harris Counties!<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p>";
}

function g1(){
  polling += (Math.floor(Math.random() * 18) - 25)/10;
  document.getElementById("main").innerHTML = "<p>It is a GOP mid-term, so this is not a good strategy.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p>";
}

function c1(){
  polling += (Math.floor(Math.random() * 3) - 1)/10;
  document.getElementById("main").innerHTML = "<p>This is your best choice; Cornyn is a popular Texan senator.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p>";
}

function m1(){
  polling += (Math.floor(Math.random() * 10) - 30)/10;
  document.getElementById("main").innerHTML = "<p>McConnell is uncharismatic and unpopular.<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p>";
}

function o1(){
  polling += (Math.floor(Math.random() * 10) - 40)/10;
  document.getElementById("main").innerHTML = "<p>You are the incumbent...<br>Polling:<br>Cruz: " + polling + "%<br>O'Rourke: " + (100 - polling) + "%</p>";
}
