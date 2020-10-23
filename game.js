window.onload = function(){
    let gamesBoard = document.getElementById('game-board');
    let frog = document.getElementById('frog2');
    let ctx = gamesBoard.getContext('2d');
    var player = new drawPlayer(frog, 200,200,30,30);

    function drawPlayer(image, x, y, width, height){
        this.x=x;
        this.y=y;
        ctx.drawImage(image, this.x, this.y, width, height);
        this.update = function(){
            ctx.drawImage(image, this.x, this.y, width, height);
        }
    }

    function startGame(){
        this.interval = setInterval(updateGameBoard, 20);
    }

    function clearGameBoard(){
        ctx.clearRect(0,0,480,270);
    }

    function updatePosition(direction){
        if(direction=='left'){
            player.x += 1;
        } else if(direction=='right'){
            player.x-=1;
        } else if(direction=='up'){
            player.y-=1;
        } else if(direction=='down'){
            player.y+=1;
        }
        
    }

    function updateGameBoard(){
        clearGameBoard();
        updatePosition();
        player.update();
    }

    

    window.onkeydown = (event) => {
        let key =event.keyCode;
        console.log(key);
        if(key=='38'){
            updatePosition('up');
        } else if (key=='40'){
            updatePosition('down');
        } else if (key=='37'){
            updatePosition('right');
        } else if (key=='39'){
            updatePosition('left');
        }
        
    } 

    startGame();
}