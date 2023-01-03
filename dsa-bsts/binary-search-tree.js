class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

	insert(val) {
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}
		let visiting = this.root;
		while (true) {
			if (val < visiting.val) {
				if (visiting.left === null) {
					visiting.left = new Node(val);
					return this;
				}
				else {
					visiting = visiting.left;
				}
			}
			else if (val > visiting.val) {
				if (visiting.right === null) {
					visiting.right = new Node(val);
					return this;
				}
				else {
					visiting = visiting.right;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

	insertRecursively(val, visiting = this.root) {
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}
		if (val < visiting.val) {
			if (visiting.left === null) {
				visiting.left = new Node(val);
				return this;
			}
			return this.insertRecursively(val, visiting.left);
		}
		else {
			if (visiting.right === null) {
				visiting.right = new Node(val);
				return this;
			}
			return this.insertRecursively(val, visiting.right);
		}
	}

	/** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let visitingNode = this.root;
		let found = false;

		if (val === visitingNode.val) return visitingNode;

		while (visitingNode && !found) {
			if (val < visitingNode.val) {
				visitingNode = visitingNode.left;
			}
			else if (val > visitingNode.val) {
				visitingNode = visitingNode.right;
			}
			else {
				found = true;
			}
		}
		if (!found) return undefined;
		return visitingNode;
	}

	/** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, visiting = this.root) {
		if (this.root === null) return undefined;

		if (val < visiting.val) {
			if (visiting.left === null) return undefined;
			return this.findRecursively(val, visiting.left);
		}
		else if (val > visiting.val) {
			if (visiting.right === null) return undefined;
			return this.findRecursively(val, visiting.right);
		}
		return visiting;
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	dfsPreOrder() {
		let result = [];
		let visiting = this.root;

		function traverse(node) {
			result.push(node.val);
			node.left && traverse(node.left);
			node.right && traverse(node.right);
		}
		traverse(visiting);
		return result;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	dfsInOrder() {
		let result = [];
		let visiting = this.root;

		function traverse(node) {
			node.left && traverse(node.left);
			result.push(node.val);
			node.right && traverse(node.right);
		}
		traverse(visiting);
		return result;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	dfsPostOrder() {
		let result = [];
		let visiting = this.root;

		function traverse(node) {
			node.left && traverse(node.left);
			node.right && traverse(node.right);
			result.push(node.val);
		}
		traverse(visiting);
		return result;
	}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	bfs() {
		let visiting = this.root;
		let queue = [];
		let result = [];
		queue.push(visiting);
		while (queue.length) {
			visiting = queue.shift();
			result.push(visiting.val);
			if (visiting.left) {
				queue.push(visiting.left);
			}
			if (visiting.right) {
				queue.push(visiting.right);
			}
		}
		return result;
	}

	/** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

	remove(val) {}

	/** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
