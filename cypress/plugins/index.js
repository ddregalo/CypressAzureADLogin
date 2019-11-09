const AzureAdSingleSignOn = require('./azureADSso/azureAdSsoPlugin').AzureAdSingleSignOn

module.exports = (on, config) => {
    on('task', {AzureAdSingleSignOn:AzureAdSingleSignOn})
}
