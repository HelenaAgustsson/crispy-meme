window.onload = function(){
    var gamesBoard = document.getElementById('game-board');
    var gamePiece;
    var frog = document.getElementById('frog');
    var ctx = gamesBoard.getContext('2d');
    ctx.drawImage(frog, 0, 0, 30, 30);
    console.log(frog);


    /*
    function startGame(){
        gamePiece = new component(30, 30, frog, 30, 30, 'image');
        //
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
    
    function component (image, width, height, x, y){
        
        this.type=type;
        if(type=="image"){
            this.image = new Image();
            this.image.src = color;
           
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        ctx = gamesBoard.getContext('2d');
        
        if (type=="image"){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            console.log("new image");
        }
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

 
    logPlayer('Kelsey');
*/
}