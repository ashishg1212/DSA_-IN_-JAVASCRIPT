// Question :  Given the head of a singly linked list, return true if it is
// a palindrome or false otherwise

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var isPalindrome = function (head) {
    let string1 = "";
    let string2 = "";
    let node = head;
  
    while (node != null) {
      string1 = `${string1}${node.val}`;
      string2 = `${node.val}${string2}`;
      node = node.next;
    }
    return string1 === string2;
  };