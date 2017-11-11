var stack=function(){
    this.count=0;
    this.storage={};

    this.push=function(elem){
        this.storage[this.count]=elem;
        this.count++;
    }

    this.pop=function(){
        if(this.count === 0){
            console.log('There are no elements in stack');
        }else{
            this.count--;
            var result=this.storage[this.count];
            delete this.storage[this.count];
            return result;
        }
    }

    this.length=function(){
        return this.count;
    }

    this.show=function(){
        return this.storage[this.count-1];
    }
}

var myStack=new stack();
myStack.push("A");  //push element A
myStack.push("B");  //push element B
console.log(myStack.show());    //showing the last recent element B
myStack.pop();     //removing the last element
console.log(myStack.show());   //showing the last element A

