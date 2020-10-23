window.onload = function(){
    var gamesBoard = document.getElementById('game-board');
    var gamePiece;
    //var ctx = gamesBoard.getContext('2d');

    function startGame(){
        gamePiece = new component(30, 30, "green", 30, 30);
        myGameArea.start();
    }

    var myGameArea = {
        canvas: document.getElementById('game-board'),
        start: function(){
            this.interval = setInterval(updateGameBoard, 20);   
        },
        clear: function(){
            ctx.clearRect(0,0,480,270);
        } 
    }
    
    function component (width, height, color, x, y){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        ctx = gamesBoard.getContext('2d');
        ctx.fillStyle = color;
        this.update = function(){
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        
    }

    function updateGameBoard(){
        myGameArea.clear();
        gamePiece.x += 1;
        gamePiece.update();
    }

    window.onkeydown = (event) => {
        let key =event.keyCode;
        console.log(key);
        if(key=='38'){
            const newLocal = 'left';
            move(newLocal);
        } else if (key=='40'){
        } else if (key=='37'){
        } else if (key=='39'){
        }
        
    } 
    
    startGame();



}