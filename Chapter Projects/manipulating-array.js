const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.pop();
theList.shift();
theList.unshift('FIRST');
theList[3] = 'Hello World';
theList[2] = 'MIDDLE';
theList[theList.length - 1] = 'LAST';
theList.splice(theList.indexOf(null), 2);
console.log(theList);