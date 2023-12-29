const hashValue = val =>
  crypto.subtle
    .digest('SHA-256', new TextEncoder('utf-8').encode(val))
    .then(h => {
      let hexes = [],
        view = new DataView(h);
      for (let i = 0; i < view.byteLength; i += 4)
        hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
      return hexes.join('');
    });

hashValue(
  JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })
).then(console.log);
// '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'


const selectionSort = arr => {
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      const min = a
        .slice(i + 1)
        .reduce((acc, val, j) => (val < a[acc] ? j + i + 1 : acc), i);
      if (min !== i) [a[i], a[min]] = [a[min], a[i]];
    }
    return a;
  };
  
  selectionSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5]


  class DoublyLinkedList {
    constructor() {
      this.nodes = [];
    }
  
    get size() {
      return this.nodes.length;
    }
  
    get head() {
      return this.size ? this.nodes[0] : null;
    }
  
    get tail() {
      return this.size ? this.nodes[this.size - 1] : null;
    }
  
    insertAt(index, value) {
      const previousNode = this.nodes[index - 1] || null;
      const nextNode = this.nodes[index] || null;
      const node = { value, next: nextNode, previous: previousNode };
  
      if (previousNode) previousNode.next = node;
      if (nextNode) nextNode.previous = node;
      this.nodes.splice(index, 0, node);
    }
  
    insertFirst(value) {
      this.insertAt(0, value);
    }
  
    insertLast(value) {
      this.insertAt(this.size, value);
    }
  
    getAt(index) {
      return this.nodes[index];
    }
  
    removeAt(index) {
      const previousNode = this.nodes[index - 1] || null;
      const nextNode = this.nodes[index + 1] || null;
  
      if (previousNode) previousNode.next = nextNode;
      if (nextNode) nextNode.previous = previousNode;
  
      return this.nodes.splice(index, 1);
    }
  
    clear() {
      this.nodes = [];
    }
  
    reverse() {
      this.nodes = this.nodes.reduce((acc, { value }) => {
        const nextNode = acc[0] || null;
        const node = { value, next: nextNode, previous: null };
        if (nextNode) nextNode.previous = node;
        return [node, ...acc];
      }, []);
    }
  
    *[Symbol.iterator]() {
      yield* this.nodes;
    }
  }


  class LinkedList {
    constructor() {
      this.nodes = [];
    }
  
    get size() {
      return this.nodes.length;
    }
  
    get head() {
      return this.size ? this.nodes[0] : null;
    }
  
    get tail() {
      return this.size ? this.nodes[this.size - 1] : null;
    }
  
    insertAt(index, value) {
      const previousNode = this.nodes[index - 1] || null;
      const nextNode = this.nodes[index] || null;
      const node = { value, next: nextNode };
  
      if (previousNode) previousNode.next = node;
      this.nodes.splice(index, 0, node);
    }
  
    insertFirst(value) {
      this.insertAt(0, value);
    }
  
    insertLast(value) {
      this.insertAt(this.size, value);
    }
  
    getAt(index) {
      return this.nodes[index];
    }
  
    removeAt(index) {
      const previousNode = this.nodes[index - 1];
      const nextNode = this.nodes[index + 1] || null;
  
      if (previousNode) previousNode.next = nextNode;
  
      return this.nodes.splice(index, 1);
    }
  
    clear() {
      this.nodes = [];
    }
  
    reverse() {
      this.nodes = this.nodes.reduce(
        (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
        []
      );
    }
  
    *[Symbol.iterator]() {
      yield* this.nodes;
    }
  }