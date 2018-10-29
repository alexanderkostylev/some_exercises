"use strict"

https://www.codewars.com/kata/vasya-clerk/discuss/javascript\

(function (){ 
  const input = [25, 25, 25, 50, 100, 100];

  // I used the source of the Tree from https://github.com/jamiebuilds/itsy-bitsy-data-structures
  class Tree {
    constructor() {
      this.root = null;
      this.length = 0;
    }

    traverse(callback) {
      function walk(node) {
        callback(node);
        node.children.forEach(walk);
      }
      walk(this.root);
    }
  
    add(value, parentValueId) {
      let newNode = {
        id: ++this.length,
        value,
        children: []
      };
      if (this.root === null) {
        this.root = newNode;
      } else { 
        this.traverse(node => {
          if (node.id === parentValueId) {
            node.children.push(newNode);
          }
        });
      }
      return newNode.id;
    }
  }
  const decisionTree = new Tree();
  const first = decisionTree.add(25);
  console.log(decisionTree, first);

}());
