exports.handler = async (event) => {
	console.log('Consumer VERDE');
	console.log(JSON.stringify(event, 2, null));
};
