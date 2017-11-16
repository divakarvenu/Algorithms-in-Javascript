/*
    Print elements of a linked list in reverse order as standard output
    head pointer could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reversePrint(head) {
        var node=head;
        var previous=null;
        
      while(node){
          // save next or you lose it!!!
          var save = node.next;
          // reverse pointer
          node.next = previous;
          // increment previous to current node
          previous = node;     
          // increment node to next node or null at end of list          
          node = save;          
      }
     
      return previous;
    
}
