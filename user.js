let user = {
        name: 'bro',
        location: 'antartica',
        occupations: ['penguin fishing', 'ice fishing', 'scientific lab operations', 'skiing', 'hiking'],
        hobbies: [
            {
                name: 'music producer',
                type: 'cool'
            },
            {
                name: 'making ice tools',
                type: 'awesome'
            },
            {
                name: 'fishing',
                type: 'bogus'
            }
        ],
        family: [
            {
                name: 'james',
                relation: 'brother',
                gender: 'male'
            },
            {
                name: 'selena',
                relation: 'sister',
                gender: 'female'
            },{
                name: 'bob',
                relation: 'pops',
                gender: 'male'
            }
        ],
        restaurants: [
            {
                name: 'applebees',
                type: 'american',
                rating: 1
            },
            {
                name: 'in and out burger',
                type: 'american',
                rating: 10
            },
            {
                name: 'antartic fish house',
                type: 'seafood',
                rating: '12'
            }
        ]
    }

;
module.exports = {
    getName : function (req, res) {

        res.json(user.name);
    },
    getLocation: function (req,res) {
        res.json(user.location);
    },
    getOccupations: function (req, res) {
        res.json(user.occupations);
    },
    getLatestOcc : function (req, res) {
        res.json(user.occupations[user.occupations.length - 1]);
    },
    getHobbies : function (req, res) {
        res.json(user.hobbies);
    },
    getHobbiesByType: function (req,res) {
        let solution = [];
        for(var i=0; i<user.hobbies.length; i++){
            if(req.params.type === user.hobbies[i].type){

                solution.push(user.hobbies[i]);
            }

        } if(solution !== []) {
            res.json({
                'hobbie': solution
            });
        }else{
            res.send('404 not found');
        };
    },
    getFamily: function (req,res) {
        res.json(user.family);
    },
    getFamilyByGender: function (req, res) {
        let arr = [];
        let arr2 = [];
        for (let i = 0; i < user.family.length; i++) {
            if (req.params.gender === user.family[i].gender) {
                arr.push(user.family[i]);
            }
        }
        if(req.params.gender === 'male'){

            res.json({
                'males': arr
            });
        }else {

            res.json({
                'females':arr
            })
        }

    },
    addFamilyMember: function (req,res) {
           res.json(user.family.push(req.body))
    },
    deleteHobbie: function (req,res) {
        for(var i=0; i<user.hobbies.length; i++) {
            if (req.params.id === user.hobbies[i].type) {
                user.hobbies.splice(i, 1);
            }
        }
        res.json(user.hobbies);
    },
    deleteOcc : function (req, res) {
        if (req.params.id) {
            res.json(user.occupations.pop());

        }else{
            res.json(user.occupations)
        }
    },
    addNewHobby : function (req,res) {
        res.json(user.hobbies.push(req.body));
    }
}