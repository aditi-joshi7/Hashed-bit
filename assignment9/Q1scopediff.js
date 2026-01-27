function scopeExample() {
  var a = 10;     // function scoped
  let b = 20;     // block scoped
  const c = 30;   // block scoped

  if (true) {
    var a = 40;   // re-declared (same variable)
    let b = 50;   // new block variable
    const c = 60; // new block variable
  }

  console.log(a); // 40
  console.log(b); // 20
  console.log(c); // 30
}

scopeExample();

//var → function scoped
//let → block scoped
//const → block scoped, value cannot be reassigned