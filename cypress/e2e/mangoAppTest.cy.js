
describe('Simplae Mango App Test', ()=>{

  it('Upload sample PDF file', ()=>{

    cy.loginIntoMangoApp();
    cy.loginCredentials();
    cy.selectUpdateOption();
    cy.shareAndUpdate();

  })

})