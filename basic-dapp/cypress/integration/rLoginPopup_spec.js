describe('rLoign Popup interaction', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Connect with rLogin').click()
  })

  it('opens the popup', () => {
    cy.contains('Connect your wallet')
  })

  it('closes the popup when clicking outside of it', () => {
    cy.get('body').click(10, 10)
    cy.get('.rlogin-modal-lightbox').should('be.not.visible')
  })

  it('closes the popup when clicking the close X', () => {
    cy.get('.rlogin-modal-close-button').click()
    cy.get('.rlogin-modal-lightbox').should('be.not.visible')
  })

  it('shows a QR code for WalletConnect', () => {
    cy.contains('WalletConnect').click()
    cy.get('#walletconnect-qrcode-text').should('exist')
  })
})