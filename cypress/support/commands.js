import 'cypress-file-upload';
import mangoAppPages from "../page_objects/mangoAppPages";
let userCredentials = require("../fixtures/mangoApp.json");

let logInPageObjects = new mangoAppPages();

Cypress.Commands.add('loginIntoMangoApp', ()=>{
    let url = 'https://siddasia.mangoapps.com/';
    cy.visit(url);
    cy.title().should('eq', 'siddasia Employee Intranet & Portal Login')
    cy.url().should('include', 'siddasia.mangoapps');
})

Cypress.Commands.add('loginCredentials', ()=>{
    logInPageObjects.enterUsername.type(userCredentials.username);
    logInPageObjects.enterPassword.type(userCredentials.password);
    logInPageObjects.enterSubmitButton.click();
})

Cypress.Commands.add('selectUpdateOption', ()=>{
    logInPageObjects.selectPencilOption.click();
    logInPageObjects.clickOnUpdateFeature.click();
})

Cypress.Commands.add('shareAndUpdate', ()=>{
    const uploadPdfFile = 'sample.pdf';
    cy.wait(3000);
    logInPageObjects.selectGroupName.click();
    cy.wait(3000);
    logInPageObjects.selectGroupName.type('{enter}');
    logInPageObjects.updateInfo.type(userCredentials.myUpdate);
    logInPageObjects.selectAttachOption.click();
    logInPageObjects.uploadFile.attachFile(uploadPdfFile);
    logInPageObjects.clickOnFileUploadButton.click();
    cy.wait(3000);
    logInPageObjects.clickOnShareButton.click();
})

Cypress.Commands.add('verifyUploadedPdfFile', ()=>{
    cy.wait(5000);
    logInPageObjects.searchUploadedPDF.click({force: true});
    logInPageObjects.searchUploadedPDF.type(userCredentials.myUpdate);
    logInPageObjects.searchUploadedPDF.type('{enter}');
    logInPageObjects.openUploadedPdfFile.click();
    logInPageObjects.verifyUploadedPdfFile.click();
    logInPageObjects.viewUploadedPdfFile.click();
   
})

