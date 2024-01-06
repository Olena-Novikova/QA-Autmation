describe("first test from video 1", () => {
  it('first get request', () => {
    cy.request("https://httpbin.org").then(respose => {
    const status = respose.status;

     assert.equal(200, status);
   })
  })
})

 describe('http bin test fail 2', () => {
  const request = {
    url:'https://httpbin.org/non-existing-url',
    ailOnStatuseCode: false
  }
  it('response code should be 200', () => {
    cy.request(request).then(respose => {
     const status = respose.status;
     assert.equal(200, status);
    })
   })
 })
  
 describe('httpbin test metod Post 3', () => {
  const request = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false
  };

  it('metod Post pased', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
    })
  })
})

describe('httpbin test metod Post fail 4', () => {
  const request = {
    method: 'GET',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false
  };

  it('response code should be 405', () => {
    cy.request(request).then(response => {
      assert.equal(405, response.status);
    })
  })
})