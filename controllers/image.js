const Clarifai = require('clarifai');
const app = new Clarifai.App({apiKey: 'ab4a1ad13d9f42a89c983beb85a068a8'});
const handleApiCall = (req,res) => {
 app.models
 .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
 .then(data => {
 	res.json(data);
 })
<<<<<<< HEAD
 .catch(err => res.status(400).json('error'))
=======
 .catch(err=> res.status(400).json('error'))
>>>>>>> fbe674c77e28e5c2ae0534934aee83c9c3717834
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
	handleImagePut: handleImagePut,
	handleApiCall: handleApiCall
}
