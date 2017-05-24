var p1 = new Promise((resolve, reject) => (
	setTimeout(() => {
      return resolve(
          [{name: 'name1'}, {name: 'name2'}]
      )
  }, 2000)
));

p1.then(results => {
	const names = results;
	console.log(results);
	results.forEach((response, index) => (
		new Promise((resolve, reject) => (
			setTimeout(() => {
          let res;

          if (response.name === 'name1') {
              res = 'name4';
          } else {
              res = 'name5';
          }

					resolve({name: res});
			}, 2000)
		)).then(result => {
			names[index].name = result.name;
		})
	));
});
