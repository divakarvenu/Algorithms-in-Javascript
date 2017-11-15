/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
    
    
    if(!head){
        head=new Node(data);
    }else{       
        var parent=null;
        var current=head;
        var index=0;
        
        while(current && index < position){
               parent=current;
               current=current.next;
               index++;
        }

        if(current){
            var child = new Node(current.data);
            child.next = current.next;
            
            current.data = data;
            current.next = child;           
        }else{             
            parent.next=new Node(data);
        }   
    }
 
    return head;
    
}
