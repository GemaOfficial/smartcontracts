import { accountManager } from './helpers/accountManager'
import { fiatManager } from './helpers/fiatManager'
import { getLatestBlock, getLatestGasPrice } from './helpers/gasPrice'
import { tokenManager } from './helpers/tokenManager'
import { transactionManager } from './helpers/transactionManager'
import { accountService } from './services/wallet/account'
import { fungibleTokens } from './services/wallet/FungbileTokens'
import { walletService } from './services/wallet/wallet'

const test = async () => {
    // const wlt = await walletService.checkAccountExist('gematest.testnet')
    // const acc = await accountService.createAccount('wotaz.testnet')
    // console.log(acc)
    // const ft = await fungibleTokens.isStorageAvailable(
    //     'wazitofc5.testnet',
    //     'wazitofc5.testnet'
    // )
    // const ft = await fungibleTokens.transfer(
    //     'gematest.testnet',
    //     'contract.gematest.testnet',
    //     'migoss.testnet',
    //     '100'
    // )
    // const ft = await fungibleTokens.transfer(
    //     'i3pumba.testnet',
    //     'i3pumba.testnet',
    //     'gematest.testnet',
    //     '1000',
    //     'ed25519:3jZ9AWvN3gbhCUVQgYHoPWvX6QjRbmwde4dx9Lw8PDgoPn3U3AdLcZHcNntSjnWVouLLCjP91cPZ7CuBTs89N3wC'
    // )
    // console.log(ft)
    // const ft1 = await accountService.getAccountHoldingsList('iamwoyez.testnet')
    // console.log(ft1)
    // const t1 = await fungibleTokens.formatTokenBalance(
    //     'contract.gematest.testnet',
    //     '0715081.testnet'
    // )
    // const md = await fungibleTokens.getMetadata('contract.gematest.testnet')
    // console.log(md)
    // console.log(ft)
    // console.log(ft1)
    // const price = await fiatManager.fetchRefFinanceTokenInfo(
    //     'eth.fakes.testnet'
    // )
    // console.log(price)
    // const tokens = await transactionManager.getAllAccountTranscations(
    //     'gematest.testnet'
    // )
    // console.log(tokens)
    // const gas = await getLatestGasPrice()
    // console.log(gas)
    let deploy_token = await accountManager.createBrandWithToken(
        'i20pumba.testnet',
        'I20PUMBA TOKEN',
        'I20PT',
        8,
        '1000000000'
    )
    console.log(deploy_token)
    // let a = await walletService.checkAccountExist('wazitofc.testnet')
    // console.log(a)
}

test()
