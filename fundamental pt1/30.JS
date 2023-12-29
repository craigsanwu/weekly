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