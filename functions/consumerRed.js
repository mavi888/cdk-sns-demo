exports.handler = async (event) => {
	console.log('Consumer ROJO');
	console.log(JSON.stringify(event, 2, null));
};
