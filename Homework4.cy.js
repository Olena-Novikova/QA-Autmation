describe('Test 1 Valid method GET', () => {
    const request = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/berry',
      failOnStatusCode: false
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
      })
    })
  })

  describe('Test 2 invalid method GET', () => {
    const request = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/berry/1235678',
      failOnStatusCode: false
    };
  
    it('response code should be 404', () => {
      cy.request(request).then(response => {
        assert.equal(404, response.status);
      })
    })
  })

  describe('Test 3 invalid method GET', () => {
    const request = {
      method: 'POST',
      url: 'https://pokeapi.co/api/v2/berry',
      failOnStatusCode: false
    };
  
    it('response code should be 404', () => {
      cy.request(request).then(response => {
        assert.equal(404, response.status);
      })
    })
  })

  describe('Test 4 Response time', () => {
    const request = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/berry',
      failOnStatusCode: false
    };
  
    it('Response time is less than 1500ms', () => {
          cy.request(request).then(response => {
          assert.isTrue(response.duration <= 1500)
        })
      })
  })

   
   describe('Test 5 Cecking headers', () => {

    const request = {
        method: 'GET',
         url: 'https://pokeapi.co/api/v2/berry',
         headers: {
            "customHeader": "customValue"
          },
         failOnStatusCode: false
    };
    it('test that header set correctly', () => {
        cy.request(request).then(response => {
          assert.equal(200, response.status);
          assert.equal("customValue", response.requestHeaders.customHeader);
        })
      })
   })

   describe('Test 6 Cecking headers UserAgent', () => {

    const request = {
        method: 'GET',
         url: 'https://pokeapi.co/api/v2/berry',
         headers: {
            'user-agent': 'My test user-agent'
          },
         failOnStatusCode: false
    };
    it('test that UserAgent set correctly', () => {
        cy.request(request).then(response => {
          assert.equal(200, response.status);
          assert.equal("My test user-agent", response.requestHeaders['user-agent']);
        })
      })
   })
  
   describe('Test 7 Cecking headers Cookie', () => {

    const request = {
         method: 'GET',
         url: 'https://pokeapi.co/api/v2/berry',
         headers: {
            'Cookie': 'cookieName=cookieValue'
          },
         failOnStatusCode: false
    };
    it('test that Cookie set correctly', () => {
        cy.request(request).then(response => {
          assert.equal(200, response.status);
          assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
        })
      })
   })

   describe('Test 8 Create user', () => {

    const request = {
        method: 'POST',
         url: 'https://reqres.in/api/users',
         body: {
             "name": "Alla",
             "job": "writer"
          },
    };
    it('Create user', () => {
        cy.request(request).then(response => {
            
          assert.equal(201, response.status);
          assert.isTrue(response.duration <= 1500);
          assert.equal("Alla", response.body.name);
        })
      })
   })

   describe('Test 9 Register unsuccessful', () => {

    const request = {
        method: 'POST',
         url: 'https://reqres.in/api/register',
         body: {
            "email": "sydney@fife"
          },
         failOnStatusCode: false
    };
    it('Register unsuccessful', () => {
        cy.request(request).then(response => {
            
          assert.equal(400, response.status);
          assert.isTrue(response.duration <= 1500);
        })
      })
   })


   describe('Test 10 Random ID', () => {
    it('Random ID', () => {
     function getRandomInt(max) {
     return Math.floor(Math.random()*max); 
     }

     for (let index = 0; index < 10; index++) {
        const randomId = getRandomInt(999);
        
        const request = {
         url: 'https://reqres.in/api/users',
         id: randomId
         };

     cy.request(request).then(response => {
     assert.isTrue(response.status == 200)
     })
     }
   })
})