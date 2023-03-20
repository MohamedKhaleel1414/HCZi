(function airplane(arr, passengers) {
  let b = [];
  let s = passengers;
  let ss = 1;
  let a = arr;
  for (let i = 0; i < a.length; i++) {
    let x = new Array(a[i][0]);
    for (let j = 0; j < x.length; j++) {
      x[j] = 0;
    }
    let y = new Array(a[i][1]);
    for (let j = 0; j < y.length; j++) {
      y[j] = [...x];
    }
    b.push(y);
  }

  let gh = 0;
  let z = 0;
  let w = 0;
  let q = 1;

  while (w < b[z]?.length && s !== 0) {
    while (z < b.length && s !== 0) {
      if (z === 0) {
        b[z][w][b[z][w].length - 1] = ss;
        s--;
        ss++;
      }
      if (z > 0 && z < b.length - 1 && w < b[z]?.length) {
        b[z][w][0] = ss;
        s--;
        ss++;
        b[z][w][b[z][w].length - 1] = ss;
        s--;
        ss++;
      }
      if (z === b.length - 1 && w < b[z]?.length) {
        b[z][w][0] = ss;
        s--;
        ss++;
      }
      z++;
    }
    z = gh;
    while (w >= b[z]?.length - 1) {
      z++;
      gh++;
    }
    w++;
  }

  z = 0;
  w = 0;
  gh = 0;

  while (w < b[z]?.length && s !== 0) {
    while (z < b.length && s !== 0) {
      if (z === 0) {
        b[z][w][0] = ss;
        s--;
        ss++;
      }
      if (z === b.length - 1 && w < b[z]?.length) {
        b[z][w][b[z][w].length - 1] = ss;
        s--;
        ss++;
      }
      z++;
    }
    z = gh;
    while (w >= b[z]?.length - 1) {
      z++;
      gh++;
    }
    w++;
  }

  z = 0;
  w = 0;
  gh = 0;

  while (w < b[z]?.length && s !== 0) {
    while (z < b.length && s !== 0) {
      if (z === 0) {
        q = 1;
        while (
          w < b[z]?.length &&
          b[z][w][q] === 0 &&
          q > 0 &&
          q < b[z][w]?.length &&
          s !== 0
        ) {
          b[z][w][q] = ss;
          s--;
          ss++;
          q++;
        }
      }
      if (z > 0 && z < b.length - 1) {
        q = 1;
        while (
          w < b[z]?.length &&
          b[z][w][q] === 0 &&
          q > 0 &&
          q < b[z][w]?.length &&
          s !== 0
        ) {
          b[z][w][q] = ss;
          s--;
          ss++;
          q++;
        }
      }
      if (z === b.length - 1) {
        q = 1;
        while (
          w < b[z]?.length &&
          b[z][w][q] === 0 &&
          q > 0 &&
          q < b[z][w]?.length &&
          s !== 0
        ) {
          b[z][w][q] = ss;
          s--;
          ss++;
          q++;
        }
      }
      z++;
    }
    z = gh;
    while (w >= b[z]?.length - 1) {
      z++;
      gh++;
    }
    w++;
  }
  console.log(b);

})([ [3,4], [4,5], [2,3], [3,4] ],30);

// Big-O Notation is O3
