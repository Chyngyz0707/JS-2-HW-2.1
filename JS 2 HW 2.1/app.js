const box = document.querySelector('.miniBox');

let positionX = 0;
let positionY = 0;

const move = () => {
    if(positionX <  439 && positionY === 0){
        positionX += 16
        box.style.left = `${positionX}px`
        setTimeout(move, 100) 

    } else if(positionX >= 439 && positionY < 439) {
        positionY += 16
        box.style.top = `${positionY}px`
        setTimeout(move,100)

    } else if(positionX >= 439 && positionY < 439){
        positionY -= 16
        box.style.right = `${positionX}px`
        setTimeout(move, 100) 

    } else if(positionX >= 439 && positionY > 439) {
        positionY += 16
        box.style.bottom = `${positionY}px`
        setTimeout(move,100)
    }
}    
   move()