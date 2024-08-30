class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow, cannot perform dequeue";
      }
  
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    front() {
      if (this.isEmpty()) {
        return "No Elements in the Queue";
      }
  
      return this.queue[0];
    }
  
    size() {
      return this.queue.length;
    }
  
    printQueue() {
      console.log(this.queue.toString());
    }
  }
  

const q = new Queue();
q.enqueue(1001);
q.enqueue(1002);
q.enqueue(1003);

q.dequeue()
console.log(q.front());
console.log(q.size());

q.printQueue();