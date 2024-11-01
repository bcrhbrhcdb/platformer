const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);



// let bottom = y + 100;

const player = new Player()
const keys = {
    w: {
        pressed: false,
    },
    a:{
        pressed: false,
    },
    d:{
        pressed: false,
    },
}
function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.velocity.x = 0;
    if(keys.d.pressed){
        player.velocity.x = 1;   
    }else if (keys.a.pressed){
        player.velocity.x = -1;
    }
    player.draw()
    player.update();
    
}
animate()
window.addEventListener('keydown', (event)=>{
    console.log(event.key);
    switch (event.key){
        case "w": 
            if(player.velocity.y === 0){
            player.velocity.y = -20;
            }
            break
            case "a": 
                keys.a.pressed = true;
                // move player left
            break;
            case "d": 
            keys.d.pressed = true;
            break;
        
    }
})
window.addEventListener('keyup', (event)=>{
    console.log(event.key);
    switch (event.key){
        case "a": 
        keys.a.pressed = false;

        // move player left
            break;
        case "d": 
        keys.d.pressed = false;
        // move player right
            break;
        
    }
})