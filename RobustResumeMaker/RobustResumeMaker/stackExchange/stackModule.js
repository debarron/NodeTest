// stackModule.js

// "client_id": 8363,
// "client_secret": "bp7HSAqTpCwV9CLUKIfXAg(("
// "key": "QZM9sJ9hrP4Fj1a3GF4FzQ(("
// "redirect_uri": "https://stackexchange.com/oauth/login_success"

var stackexchange = require('stackexchange');

var options = { version: 2.2 };
var context = new stackexchange(options);

var filter = {
  key: 'QZM9sJ9hrP4Fj1a3GF4FzQ((',
  pagesize: 50,
  tagged: 'node.js',
  sort: 'activity',
  order: 'asc'
};

// Get all the questions (http://api.stackexchange.com/docs/questions)
// context.questions.questions(filter, function(err, results){
//   if (err) throw err;

//   console.log(results.items);
//   console.log(results.has_more);
// });



module.exports = function (app) {
    app.get('/stack', function (req, res) {
    	context.

        // use mongoose to get all nerds in the database
        Subjects.find(function (err, subjectDetails) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(subjectDetails); // return all nerds in JSON format
        });
    });
}
