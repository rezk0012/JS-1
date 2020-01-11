//alert Window
alert('Hello');

//Log the console
console.log('Hello from the console');
console.log(123);
console.log(true);

var name = 'Alfred';
console.log(name);
console.log([1, 2, 3, 4]);
console.log({ name: 'Alfred', city: 'NYC' });
console.table({ name: 'Alfred', city: 'NYC' });
console.error('This is an Error');
console.warn('This is a warning');
console.clear();

//log execution time
console.time('Start');
console.log('Hello from the console');
console.log('Hello from the console');
console.timeEnd('Start');