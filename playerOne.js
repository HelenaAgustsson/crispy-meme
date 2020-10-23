

var Player = function() {

    console.log('Initialising new player1');

    

    function logPlayer(name){
        var playerName = name;
        console.log('Player '+playerName);
    }

    function setName(newName){
        playerName=newName;
    }

    function getName(){
        return playerName;
    }

    return {
        logPlayer: logPlayer,
        getName: getName,
        setName: setName
    }

}