var express = require('express');
var app = express();
var port = 3000;
var developerRouter = express.Router();
var userRouter = express.Router();

var developer = [
    {
        "userId": "krish",
        "jobTitle": "Developer",
        "firstName": "Krish",
        "lastName": "Lee",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumber": "123456",
        "emailAddress": "krish.lee@learningcontainer.com"
    },
    {
        "userId": "devid",
        "jobTitle": "Developer",
        "firstName": "Devid",
        "lastName": "Rome",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "1111111",
        "emailAddress": "devid.rome@learningcontainer.com"
    },
    {
        "userId": "tin",
        "jobTitle": "Program Directory",
        "firstName": "tin",
        "lastName": "jonson",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "2222222",
        "emailAddress": "tin.jonson@learningcontainer.com"
    }
]


var user = [
    {
        "userId": 1,
        "firstName": "Krish",
        "lastName": "Lee",
        "phoneNumber": "123456",
        "emailAddress": "krish.lee@learningcontainer.com"
    },
    {
        "userId": 2,
        "firstName": "racks",
        "lastName": "jacson",
        "phoneNumber": "123456",
        "emailAddress": "racks.jacson@learningcontainer.com"
    },
    {
        "userId": 3,
        "firstName": "denial",
        "lastName": "roast",
        "phoneNumber": "33333333",
        "emailAddress": "denial.roast@learningcontainer.com"
    },
    {
        "userId": 4,
        "firstName": "devid",
        "lastName": "neo",
        "phoneNumber": "222222222",
        "emailAddress": "devid.neo@learningcontainer.com"
    },
    {
        "userId": 5,
        "firstName": "jone",
        "lastName": "mac",
        "phoneNumber": "111111111",
        "emailAddress": "jone.mac@learningcontainer.com"
    }
]

//handle routes
app.get('/', (req,res) => {
    res.send('<h1>Node with Express Framework</h1>')
})


//health check
app.get('/health', (req,res) => {
    res.status(200).send('<h1>Health Okay!</h1>')
})


//builds a router
developerRouter.route('/')
    //chaining to use git method
    .get((req,res) => {
        //returns the developer information
        res.send(developer)
    })

developerRouter.route('/details')
    .get((req,res) => {
        res.send('<h1>Developer Details</h1>')
    })

//builds a router
userRouter.route('/')
    //chaining to use get method
    .get((req,res) => {
        //returns the user information
        res.send(user)
    })

userRouter.route('/details')
    .get((req,res) => {
        res.send('<h1>User Details</h1>')
    })

//map app to router; when get /developer then use the developer router
app.use('/developer', developerRouter);
app.use('/user', userRouter);


app.listen(port, function(err){
    if(err) throw err;
    //string literal
    console.log(`Server is running on port ${port}`)
})
