const EventEmitter = require ('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (x, y) => {

    console.log('turorial has run ' + (x + y));
});

eventEmitter.emit('tutorial', 1, 3);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name
    }
    get name(){
        return this._name;
    }
}

let pe = new Person ("Pedro");

pe.on('name', () => {
    console.log('name = ' + pe.name);
})



let chris = new Person ("Christina");
chris.on ('name', () => {
    console.log('name = ' + chris.name);
});

pe.emit('name');
chris.emit('name');


//PROMPT THE USER 
const readline = require ('readline');
const r1 = readline.createInterface({input : process.stdin,
                            output : process.stdout});

let x = Math.floor((Math.random()*10) + 1);
let y = Math.floor((Math.random()*10) + 1);
let answer = x + y ;


r1.on('NoAnswerYet', () => {
    r1.question(` What is ${x} + ${y}? \n`,  
    (userInput) => {
        if(userInput.trim() != answer){
        console.log('try again!');
        //r1.emit('NoAnswerYet');
        r1.setPrompt('No');
        r1.prompt();
        r1.on('line', (userInput) => {
            if (userInput == answer) r1.close();
            else {
                r1.setPrompt('Other try');
                r1.prompt();
            }
        })
        }
        else{
            console.log(userInput + " is  OK!") ;
            r1.close();
        }
    });
});

r1.emit('NoAnswerYet');
r1.on('close' , () => {
    console.log ("closed !!!");
});
