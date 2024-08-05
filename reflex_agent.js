

function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

function test(states, list){
       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       if (location == "A"){
        if (states[1] == "DIRTY"){
            if (states[2] == "DIRTY"){
                if (list.indexOf(1) == -1){
                    list.push(1);
                }
            }
            else{
                if (list.indexOf(3) == -1){
                    list.push(3);
                }
            }
        }
        //A == "CLEAN"
        else{
            if (states[2] == "DIRTY") {
                if (list.indexOf(5) == -1){
                    list.push(5);
                }
            }
            else{
                if (list.indexOf(7) == -1){
                    list.push(7);
                }
            }
        }
       }
       else{
        //LOCATION == "B"
        if (states[1] == "DIRTY"){
            if (states[2] == "DIRTY"){
                if (list.indexOf(2) == -1){
                    list.push(2);
                }
            }
            else{
                if (list.indexOf(4) == -1){
                    list.push(4);
                }
            }
        }
        //A == "CLEAN"
        else{
            if (states[2] == "DIRTY") {
                if (list.indexOf(6) == -1){
                    list.push(6);
                }
            }
            else{
                if (list.indexOf(8) == -1){
                    list.push(8);
                }
            }
        }

       }
       var action_result = reflex_agent(location, state);
       document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | List: ").concat(list);
       if (list.length == 8){
        document.getElementById("log").innerHTML+="<br>ALL STATES VISITED";
        return;
       }
       if (action_result == "CLEAN"){
         if (location == "A") states[1] = "CLEAN";
          else if (location == "B") states[2] = "CLEAN";
       }
       else if (action_result == "RIGHT") states[0] = "B";
       else if (action_result == "LEFT") states[0] = "A";
       if (states[1] == "CLEAN"){
        if (getRandomInt(3) == 2) states[1] = "DIRTY";
       }
       if (states[2] == "CLEAN"){
        if (getRandomInt(3) == 2) states[2] = "DIRTY";
       }		
 setTimeout(function(){ test(states, list); }, 2000);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var states = ["A","DIRTY","DIRTY"];
var list = []; 
test(states, list);