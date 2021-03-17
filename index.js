document.getElementById("submit").addEventListener("click", addString);
document.getElementById("logSubmit").addEventListener("click", consoleLog);
document.getElementById("errSubmit").addEventListener("click", consoleError);
document.getElementById("tableSubmit").addEventListener("click", consoleTable);
document.getElementById("dirSubmit").addEventListener("click", consoleDir);
document.getElementById("dirXMLSubmit").addEventListener("click", consoleDirXML);
document.getElementById("grpStartSubmit").addEventListener("click", consoleGrpStart);
document.getElementById("grpEndSubmit").addEventListener("click", consoleGrpEnd);
document.getElementById("timeSubmit").addEventListener("click", consoleTime);
document.getElementById("endTimeSubmit").addEventListener("click", consoleTimeEnd);
document.getElementById("traceSubmit").addEventListener("click", consoleTrace);



const label = 'List of my names';

function consoleLog() {
  const fName = document.getElementById('firstName').value;
  const lName = document.getElementById('lastName').value;
  console.log("Console Log Demo. Add string without checking: " + fName + " " + lName);
}

function consoleError() {
  const fName = document.getElementById('firstName').value;
  const lName = document.getElementById('lastName').value;
  console.error("Console Error Demo. Add string without checking: " + fName + " " + lName);
}

function consoleTable() {
  const fName = document.getElementById('firstName').value;
  const lName = document.getElementById('lastName').value;
  console.table([
    {
      "First Name": fName,
      "Last Name": lName,
      "Full Name": fName + " " + lName
    },
    {
      "First Name": "Linh",
      "Last Name": "Le",
      "Full Name": "Linh Le"
    },
    {
      "First Name": "Mean",
      "Last Name": "To Bee",
      "Full Name": "Mean to Bee"
    }
  ]);
}

function consoleDir() {
  console.dir(document.getElementById('errorChecking'))
}

function consoleDirXML() {
  console.dirxml(document);
}

function consoleGrpStart() {
  console.group(label);
}

function consoleGrpEnd() {
  console.groupEnd(label);
}

function consoleTime() {
  const fName = document.getElementById('firstName').value;
  const lName = document.getElementById('lastName').value;
  let name = "";
  console.log("Start Timer");
  console.time();
  for (var i = 0; i < 100000; i++) {
    name += fName + " " + lName + " ";
  }
  console.timeEnd();
  console.log("End Timer");
}

function consoleTimeEnd() {
  console.timeEnd();
  console.log("End Timer");
}

function consoleTrace() {
  const reddit = () => { subreddit(); };
  const subreddit = () => { thread(); };
  const thread = () => { comment(); };
  const comment = () => { console.trace(); };
  reddit();
}

function addString() {
  const fName = document.getElementById('firstName').value;
  const lName = document.getElementById('lastName').value;
  document.getElementById('result').innerHTML = "";
  try {
    if (!isNaN(parseFloat(fName.charAt(0))) || !isNaN(parseFloat(fName.charAt(0)))) {
      throw new ValidationError("The first letter cannot be a digit");
    }
    document.getElementById('result').innerHTML = fName + " " + lName;
  }
  catch (err) {
    console.error(err.name + ": " + err.message);
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError"; 
  }
}
