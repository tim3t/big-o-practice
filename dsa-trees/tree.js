/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		if (!this.root) return 0;
		let totalSum = this.root.val;
		function sumUp(node) {
			for (let child of node.children) {
				totalSum += child.val;
				if (child.children.length > 0) {
					sumUp(child);
				}
			}
		}
		sumUp(this.root);
		return totalSum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		if (!this.root) return 0;
		let counter = this.root.val % 2 === 0 ? 1 : 0;

		function countEvenNums(node) {
			for (let child of node.children) {
				if (child.val % 2 === 0) count++;
				if (child.children.length > 0) {
					countEvenNums(child);
				}
			}
		}
		countEvenNums(this.root);
		return counter;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		if (!this.root) return 0;
		let counter = this.root.val > lowerBound ? 1 : 0;
		function numGreaterChecker(node) {
			for (let child of node.children) {
				if (child.val > lowerBound) count++;
				if (child.children.length > 0) {
					numGreaterChecker(child);
				}
			}
		}
		numGreaterChecker(this.root);
		return counter;
	}
}

module.exports = { Tree, TreeNode };
