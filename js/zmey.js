const canvas = document.getElementById("gameZmey"); //обращаемся к элементу хтмл
const zmey = canvas.getContext("2d"); //задаем параметр 2д



// добавляем картинки
const pole = new Image();
pole.src = 'img/pole.png';

const carrot = new Image();
carrot.src = 'img/carrot.png';


let box = 32;     //размер клеток

let score = 0;

let food = {   //отображение еды в клетках
    x: Math.floor((Math.random() * 17+1)) * box,
    y: Math.floor((Math.random() * 15+3)) * box,
};

// let ewq = setInterval(food, 500);

let snake = [];
snake[0] = {
    x: 10 * box, //10 * box центер
    y: 9 * box, // 10 * box 
};


document.addEventListener("keydown", direction);  //при нажатии на кнопку(любую)

let key;

function direction(event) {          //функция клавиш
    if(event.keyCode === 37 && key != "right")
    key = "left";
    else if(event.keyCode === 38 && key != "down")
    key = "up";
    else if(event.keyCode === 39 && key != "left")
    key = "right";
    else if(event.keyCode === 40 && key != "up")
    key = "down";
};






function paintzmey() { //отрисовка изображений
    zmey.drawImage(pole, 0, 0);  //pole по Х, по Y
    zmey.drawImage(carrot, food.x, food.y);  //carrot по Х и У
    // for(let i = 0; i < snake.length; i ++) {
    // zmey.fillStyle = "red";
    // zmey.fillRect(snake[i].x, snake[i].y, box, box);
    // }

    zmey.fillStyle = "white";    //score
    zmey.font = "40px Arial";
    zmey.fillText(score, box*2.5, box*1.6);
    
    // let snakeX = snake[0].x;
    // let snakeY = snake[0].y;
    // snake.pop();


    // if(key == "left") snakeX -= box;    //не может двигатся 180 по х
    // if(key == "right") snakeX += box;
    // if(key == "up") snakeY -= box;   //180 по у
    // if(key == "down") snakeY += box;

    // let newHead = {
    //     x: snakeX,
    //     y: snakeY
    // };
    
    // snake.unshift(newHead); //помещаем новый элемент в начало newHed 
};

setInterval(paintzmey, 200); // скороксть отрисовки функции



function paintHead() {
    for(let i = 0; i < snake.length; i ++) {
        zmey.fillStyle = "red";
        zmey.fillRect(snake[i].x, snake[i].y, box, box);   //создает обьект(позиция х у)
        }

//    zmey.fillStyle = "white";    //score
//     zmey.font = "40px Arial";
//     zmey.fillText(score, box*2.5, box*1.6); 

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17+1)) * box,
            y: Math.floor((Math.random() * 15+3)) * box,
        };
    }   else {
        snake.pop();
    }

    if(key == "left") snakeX -= box;    //не может двигатся 180 по х
    if(key == "right") snakeX += box;
    if(key == "up") snakeY -= box;   //180 по у
    if(key == "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };
    
    snake.unshift(newHead); //помещаем новый элемент в начало newHed 
};



let ewq = setInterval(paintHead, 200);





