class Form {
    constructor(){
        this.title = createElement('h1');
       this.input = createInput('Enter Your Name');
       this.button = createButton('START') 
       this.instructions = createElement('textarea');
       this.image = loadImage("IMAGES/mainbackground.png");
       this.character1 = loadImage("IMAGES/character1forform.png");
       this.character2 = loadImage("IMAGES/character2forform.png");
    }

display(){
    background(this.image);
    //image(this.image, 0, 0, displayWidth, displayHeight);
    this.title.html("CHEST COLLECTOR");
    this.title.position(displayWidth/2 - 130, 0);

    this.instructions.html(" INSTRUCTIONS :  W - UP , D - RIGHT , A - LEFT , S - DOWN , E - PICK , F - OPEN THE DOOR");
    this.instructions.position(displayWidth/2 - 200 , displayHeight - 200 );

    this.input.position(displayWidth/2 - 50,displayHeight/2-150);
    this.input.size(200);
    this.button.position(displayWidth/2 + 1,displayHeight/2 -100);

    image(this.character1,displayWidth/2 - 50,displayHeight/2 - 650);
    image(this.character2,displayWidth/2 - 1050,displayHeight/2 - 650);

}

}