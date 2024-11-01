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