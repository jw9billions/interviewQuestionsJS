/*You are working as a security expert for an online site, and have noticed an increasing amount of bot activity. You have been tasked with identifying bot accesses.

Your company stores all user accesses to the site in one log file. Each line in a log file represents one access by one user, for example:

{"timestamp": 1487722870, "user": "Una", "action": "navigate"}
where the timestamp is the unix time, in seconds.
We declare a user to be a bot if it satifisfies two conditions:

The user performs at least 10 actions within any window of duration 4 minutes; and
Of those accesses, at least 5 correspond to the same action (eg, navigate).
Task
Write a function bot_detection(input_file_path) to collect all bot accesses. Specifically, the input_file_path is the absolute path to a log file containing the accesses of all users (bots and non-bots).
*/


/*
The data is like this:

{"timestamp": 1487184625, "user": "Eric", "action": "navigate"}
{"timestamp": 1487184655, "user": "Bill", "action": "browse"}
{"timestamp": 1487184685, "user": "Eric", "action": "key press"}
{"timestamp": 1487184715, "user": "John", "action": "idle"}
{"timestamp": 1487184755, "user": "Tran", "action": "search"}
{"timestamp": 1487098049, "user": "Tran", "action": "click"}
{"timestamp": 1487098079, "user": "Eric", "action": "click"}
{"timestamp": 1487098109, "user": "Tran", "action": "click"}
{"timestamp": 1487098139, "user": "Bill", "action": "navigate"}
{"timestamp": 1487098169, "user": "Tran", "action": "search"}
{"timestamp": 1487184716, "user": "Tran", "action": "search"}
{"timestamp": 1487298169, "user": "Tran", "action": "search"}
{"timestamp": 1487271407, "user": "Bill", "action": "search"}
{"timestamp": 1487271467, "user": "John", "action": "navigate"}
{"timestamp": 1487271527, "user": "Dave", "action": "browse"}
*/

/*
The function bot_detection should find all the bot accesses in input_file_path, and output a list of bot names that you found. For example, if you've established that the user Tran is the only bot in the system, the function should produce ["Tran"].

Additional requirements
The function bot_detection must return the the list of string of bot names where order does not matter, but no name should be listed twice.
Do not modify the input directory in any way.

Assumptions
The input_file_path file is guaranteed to exist and contains only valid json in each line.
The user accesses in input_file_path is guaranteed to be sorted by increasing timestamp.

Save your code in /home/candidate/candidate_files/js/answer.js
Please refer to the Debug tab for the instructions on how to test your answer.
*/

//should I treat this data as an array of objects? But I did it anyway.

var input_file_path = [
    {"timestamp": 1487184625, "user": "Eric", "action": "navigate"},
    {"timestamp": 1487184655, "user": "Bill", "action": "browse"},
    {"timestamp": 1487184685, "user": "Eric", "action": "key press"},
    {"timestamp": 1487184715, "user": "John", "action": "idle"},
    {"timestamp": 1487184755, "user": "Tran", "action": "search"},
    {"timestamp": 1487098049, "user": "Tran", "action": "click"},
    {"timestamp": 1487098079, "user": "Eric", "action": "click"},
    {"timestamp": 1487098109, "user": "Tran", "action": "click"},
    {"timestamp": 1487098139, "user": "Bill", "action": "navigate"},
    {"timestamp": 1487098169, "user": "Tran", "action": "search"},
    {"timestamp": 1487184716, "user": "Tran", "action": "search"},
    {"timestamp": 1487298169, "user": "Tran", "action": "search"},
    {"timestamp": 1487271407, "user": "Bill", "action": "search"},
    {"timestamp": 1487271467, "user": "John", "action": "navigate"},
    {"timestamp": 1487271527, "user": "Dave", "action": "browse"}];

function bot_detection(input_file_path) {
  var copy = input_file_path.slice();
  var botList = [];

  for (var j = 0; j < copy.length; j ++) {
    var actionCounts = 0;
    var temp = copy[j];

    for (var i = 0; i < copy.length; i ++) {

      var timeDuration = 0;
      var munites = 0;

      if (temp.user === copy.user && temp.action === copy[i].action){
        actionCounts ++;

        //how to convert timestamp to minutes?
        munites += new Date(copy[i].timestamp).getMinutes();
        if (actionCounts >= 10 && munites >= 4) {
          botList.push(copy[i].user);
          copy.splice(i, 1);
          //what if the person did the same action 12 times in 4 minutes? will take //another for loop to delete rest of the same user with the same action? otherwise  //the same name will print multiple times?
        }
      }
    }
  }
  return botList;

}

bot_detection(input_file_path);
