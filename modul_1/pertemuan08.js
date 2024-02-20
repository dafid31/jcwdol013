                                            //  DATA STUCTURE                                                       

class Stack{

    #maxSize;
    #container=[];

constructor(maxSize=15){
    this.maxSize=maxSize;
}

push(element){
    this.#container.push(element)
}

pop


}                                  






// 
class Queue{
    #container=[];

    enqueue(element){
        this.#container.push(element)
    }

    dequeue(){
        return this.#container.shift();
    }

    getElement(){
        return this.#container;
    }

}

const  queue= new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);






