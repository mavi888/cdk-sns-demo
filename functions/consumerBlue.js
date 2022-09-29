exports.handler = async (event) => {
	console.log('Consumer AZUL');
	console.log(JSON.stringify(event, 2, null));
};
