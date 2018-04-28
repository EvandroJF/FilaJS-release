class DynamicQueue{
    constructor(){
       this.head = null;
       this.tail=null;
       this.lenght = 0;
    }
    enqueue(element) {
    	if(this.head==null){
    		this.head = element;
    	}else {
    		this.tail = element;
    	}
    	return this.length++;
    }
    dequeue(){
    	let current = this.head;
		if(!current===null){
			return null;
		}else{
			length--;		
			return this.current = element.next;
		}

    }
    front() {
    	return this.head;
    }
    back(){
    	return this.tail;
    }
   
    isEmpty() {
      return this.head===null;
  	}
    size() {
    	  return this.length;
    }
    clear() {
    	this.head=null;
        this.length=0;
    }
    print(separator=" - ") {
   
        let current = this.head.next,
            s=this.head.element;
        while(current){
            s+=separator+current.element;
            current=current.next;
        }
        return s;
    }
}