class _Node {
  constructor(value, prev) {
    this.value = value;
    this.next = null;
    this.prev = prev
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
      node.prev = null
    }

    if (this.last) {
      this.last.next = node;
      node.prev = this.last /*Created DLL here*/
    }
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
  if (this.first === null) {
    return;
  }
  const node = this.first;
  this.first = this.first.next;
    //if this is the last item in the queue
  if (node === this.last) {
    this.last = null;
  }
  return node.value;
  }
}

function peek(queue){
  if (!queue.first) return "Queue is empty"
  return queue.first.value
}

function isEmpty(queue){
  if(!queue.first) return true
  return false
}

function display(queue){
  if(!queue.first) console.log("Queue is empty")
  let currNode = queue.first
  while(currNode){
    console.log(currNode.value)
    currNode = currNode.next
  }
}

function danceQ(){
  const Que = new Queue()
  const overflow = new Queue()
  Que.enqueue('F')
  Que.enqueue('M')
  Que.enqueue('M')
  Que.enqueue('M')
  Que.enqueue('F')
  Que.enqueue('M')
  Que.enqueue('M')
  Que.enqueue('F')

  while(Que.first){
    temp = Que.dequeue()
    if((temp === "M") && (peek(Que) === "F")){
      console.log(temp, Que.dequeue())
      //temp = Que.dequeue()
    }
    else if(temp === "F" && (peek(Que) === "M")){
      console.log(temp, Que.dequeue())
      //temp = Que.dequeue()
    }
    else{
      overflow.enqueue(temp)
    }
  }
  display(overflow)

}


function main(){
  //  danceQ()
  //  const starTrekQ = new Queue()
  ///  starTrekQ.enqueue('1')
  ///  starTrekQ.enqueue('2')
  ///  starTrekQ.enqueue('3')
  ///  starTrekQ.enqueue('4')
  ///  starTrekQ.enqueue('5')
  //  starTrekQ.enqueue('Kirk')
  //  starTrekQ.enqueue('Spock')
  //  starTrekQ.enqueue('Uhura')
  //  starTrekQ.enqueue('Sulu')
  //  starTrekQ.enqueue('Checkov')
  //  starTrekQ.dequeue()
  //  starTrekQ.dequeue()

  //  console.log(peek(starTrekQ))
  //  console.log(isEmpty(starTrekQ))
  //  display(starTrekQ)

}

main()

module.exports = Queue
