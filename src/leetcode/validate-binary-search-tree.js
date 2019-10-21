/*
https://leetcode.com/problems/validate-binary-search-tree/
98. Validate Binary Search Tree
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/*
breadthFirstSearch() {
        let currentNode = this.root;
        const list = [];
        const queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
 */

// eslint-disable-next-line no-unused-vars
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// [2, 1, 3];
const testValues1 = new TreeNode(2);
testValues1.left = new TreeNode(1);
testValues1.right = new TreeNode(3);
// [5, 1, 4, null, null, 3, 6];
const testValues2 = new TreeNode(5);
testValues2.left = new TreeNode(1);
testValues2.right = new TreeNode(4);

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isValidBST = root => {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(root, min, max) {
        if (!root) {
            return true; // We hit the end of the path
        }

        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }

        // Continue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }

    return helper(root, null, null);
};

const testValues3 = new TreeNode(0);
testValues3.left = new TreeNode(-1);

const testValues4 = new TreeNode(0);
testValues4.left = new TreeNode(null);
testValues4.right = new TreeNode(-1);


console.log(isValidBST());
console.log(isValidBST(testValues1));
console.log(isValidBST(testValues2));
console.log(isValidBST(testValues3));
console.log(isValidBST(testValues4));
