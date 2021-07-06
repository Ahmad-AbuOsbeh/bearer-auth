# bearer-auth

**Author: Ahmad Abu Osbeh**
<br>

- tests report
- back-end

**Setup**
<br>

- .env requirements
- PORT - 3003
- Running the app
- npm start
- Endpoint:

```
data should be:
 const obj = {
    username: 'ahmad',
    password: '1234',
  };

```

**example hit :**
[sign up](https://ahmad-osbeh-bearer-auth.herokuapp.com/signup)

- https://ahmad-osbeh-bearer-auth.herokuapp.com/signup

**example hit :**
[signin](https://ahmad-osbeh-bearer-auth.herokuapp.com/signin)

- https://ahmad-osbeh-bearer-auth.herokuapp.com/signin

- Returns : json with requested data

```

{
"domain": "https://ahmad-osbeh-bearer-auth.herokuapp.com/",
"status": "running",
"port": 3003
}

```

# PR link

[PR link](https://github.com/Ahmad-AbuOsbeh/bearer-auth/pull/1)

**Tests**

**using supertest and jest**

- Unit Tests: npm run test

# UML

<br>

![bearer-auth](images/bearer-auth.jpg)
