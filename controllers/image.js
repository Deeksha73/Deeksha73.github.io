const Clarifai = require('clarifai');
const app = new Clarifai.App({apiKey: 'ab4a1ad13d9f42a89c983beb85a068a8'});
const handleApiCall = (req,res) => {
 app.models
 .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
 .then(data => {
 	res.json(data);
 })
 .catch(err=> res.status(400).json('error'))
}

 const handleImagePut = (req,res,knex)=>{
	const {id} = req.body;
	knex('users').where('id','=',id)
	.increment('entries',1)
	.returning('entries')
	.then(entries=>{
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('unable to get entries'));
}
module.exports = {
handleImagePut,
handleApiCall
}
