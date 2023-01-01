/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

	minDepth() {
		if (!this.root) return 0;

		function minDepthChecker(node) {
			if (node.left === null && node.right === null) return 1;
			if (node.left === null) return minDepthChecker(node.right) + 1;
			if (node.right === null) return minDepthChecker(node.left) + 1;
			return Math.min(minDepthChecker(node.left), minDepthChecker(node.right)) + 1;
		}
		return minDepthChecker(this.root);
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

	maxDepth() {
		if (!this.root) return 0;

		function maxDepthChecker(node) {
			if (node.left === null && node.right === null) return 1;
			if (node.left === null) return maxDepthChecker(node.right) + 1;
			if (node.right === null) return maxDepthChecker(node.left) + 1;
			return Math.max(maxDepthChecker(node.left), maxDepthChecker(node.right)) + 1;
		}
		return maxDepthChecker(this.root);
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		let result = 0;

		function maxSumChecker(node) {
			if (node === null) return 0;
			const leftSum = maxSumChecker(node.left);
			const rightSum = maxSumChecker(node.right);
			result = Math.max(result, node.val + leftSum + rightSum);
			return Math.max(0, leftSum + node.val, rightSum + node.val);
		}
		maxSumChecker(this.root);
		return result;
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound) {
		if (!this.root) return null;
		let queue = [ this.root ];
		let closest = null;

		while (queue.length) {
			let currentNode = queue.shift();
			let currentVal = currentNode.val;
			let higherThanLowerBound = currentVal > lowerBound;
			let shouldReassignClosest = currentVal < closest || closest === null;

			if (higherThanLowerBound && shouldReassignClosest) {
				closest = currentVal;
			}
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}
		return closest;
	}

	/** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {}

	/** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

	static serialize() {}

	/** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	static deserialize() {}

	/** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

	lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
