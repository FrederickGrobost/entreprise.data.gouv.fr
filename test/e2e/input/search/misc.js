module.exports = {
  'Press enter launch search': function (browser) {
    browser
      .url('https://entreprise.data.gouv.fr/')
      // .url(process.env.BASE_ADDRESS_SIRENE_FULLTEXT)
      .waitForElementVisible('body')
      .setValue('input[name=search]', 'coca-cola')
      .keys(browser.Keys.ENTER)
      // We land on etablissement list
      .assert.urlEquals('https://entreprise.data.gouv.fr/search?fullText=coca-cola&page=1')
  },

  'Pagination work': function (browser) {
    // browser.pause(100000)
    const lastButton = '.pagination > .pagesButtons:nth-last-child(2) > a'
    const firstButton = '.pagination > .pagesButtons:nth-child(2) > a'

    const client = browser
    // Go to pagination, click on last page
    browser.waitForElementVisible(lastButton)
    browser.getLocationInView(lastButton)

    browser.click(lastButton)

    browser.getText(lastButton, function(number) {
        // Url is correct
        console.log('TESTTTT')
        console.log(number)
        client.assert.urlEquals(`https://entreprise.data.gouv.fr/search?fullText=coca-cola&page=${number.value}`)
        // Pagination is consistent : check first and last number
        client.expect.element(firstButton).text.to.contain('1')
        client.expect.element(lastButton).text.to.contain(number.value)      })

    //   // Url is correct
    // browser.assert.urlEquals(`https://entreprise.data.gouv.fr/search?fullText=coca-cola&page=${lastButtonText}`)
    //   // Pagination is consistent : check first and last number
    // browser.expect.element(firstButton).text.to.contain('1')
    // browser.expect.element(lastButton).text.to.contain(lastButtonText)
    // })
  }
}
