const user = require('./user');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
let corsOptions = {
    origin: 'http://localhost:3020'
}
const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));




app.get('/name', user.getName);
app.get('/location', user.getLocation);
app.get('/occupations', user.getOccupations);
app.get('/occupations/latest', user.getLatestOcc);
app.get('/hobbies', user.getHobbies);
app.get('/hobbies/:type', user.getHobbiesByType);
app.get('/family', user.getFamily);
app.get('/family/:gender',user.getFamilyByGender);

app.post('/addfamilymember', user.addFamilyMember);
app.delete('/hobbies/:id',user.deleteHobbie);
app.delete('/occupations/:id',user.deleteOcc)


app.listen(3020, function () {
   console.log('listening on port 3020');
});

