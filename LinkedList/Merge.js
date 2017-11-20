/*
    Merge two sorted lists A and B as one Linked List and return the head of merged list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function mergeLinkedLists( headA, headB) {
    var L1=headA;
    var L2=headB;
    var L3 = new Node(null, null);
    var prev = L3;
      
    // while both linked lists are not empty
    while (L1 !== null && L2 !== null) {
        if (L1.data <= L2.data) { 
            prev.next = L1;
            L1 = L1.next;
        } else {
            prev.next = L2;
            L2 = L2.next;
        }
        prev = prev.next;
    }

    // once we reach end of a linked list, append the other 
    // list because we know it is already sorted
    if (L1 === null) { prev.next = L2; }
    if (L2 === null) { prev.next = L1; }

    // return the sorted linked list
    return L3.next;
    
    
}
