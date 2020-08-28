context('qarentena', () => {

    const base_url = 'http://www.lourencodemonaco.com.br/qarentena';
  
    it('Check homepage', () => {
        cy.visit(base_url)
        cy.percySnapshot('Homepage responsive test');
    })

    it('Check blog page', () => {
        cy.visit(base_url+'/blog-2')
        cy.percySnapshot('Blog Snapshot');
    })
  
    it('Check about page', () => {
        cy.visit(base_url+'/about')
        cy.percySnapshot('About Snapshot');
    })

    it('Check contact page', () => {
        cy.visit(base_url+'/contact')
        cy.percySnapshot('Contact Snapshot');
    })

    it('Check register page', () => {
        cy.visit(base_url+'/cadastro')
        cy.percySnapshot('Registar Snapshot');
    })

    it('Check search page', () => {
        cy.visit(base_url+'/pesquisa')
        cy.percySnapshot('Search Snapshot');
    })

/*
    it('Check homepage', () => {
        cy.visit(base_url)
        cy.percySnapshot('Homepage responsive test', { widths: [768, 992, 1200] });
        
    })
*/

})
  