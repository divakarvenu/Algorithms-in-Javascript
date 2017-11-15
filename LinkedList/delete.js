/*
    Delete Node at a given position in a linked list
    head pointer input could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function deleteNode(head, position) {
    var parent=null;
    var current=head;
    var prev=null;
    var index=0;
    
   while(current && index < position){
       parent=current;
       current=current.next;
       index++;
   }  
   if(current.next){
         var attach=current.next;         
         current.data=attach.data;
         current.next=attach.next;
   }else{
        parent.next=null;
   }
    
   return head;
    
}
