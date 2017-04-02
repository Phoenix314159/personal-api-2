const user = require('./user');
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
// const session = require('express-session')
// let corsOptions = {
//     origin: 'http://localhost:3020'
// }
const app = express();

app.use(bodyParser.json());
// app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));




app.get('/api/name', user.getName);
app.get('/api/location', user.getLocation);
app.get('/api/occupations', user.getOccupations);
app.get('/api/occupations/latest', user.getLatestOcc);
app.get('/api/hobbies', user.getHobbies);
app.get('/api/hobbies/:type', user.getHobbiesByType);
app.get('/api/family', user.getFamily);
app.get('/api/family/:gender',user.getFamilyByGender);

app.post('/api/addfamilymember', user.addFamilyMember);
app.post('/api/addnewhobbie', user.addNewHobby)
app.delete('/api/hobbies/:id',user.deleteHobbie);
app.delete('/api/occupations/:id',user.deleteOcc)


app.listen(3020, function () {
   console.log('listening on port 3020');
});

