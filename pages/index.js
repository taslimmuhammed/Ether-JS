import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from 'react'
import { abi } from '../Utils/Abi';
import { ethers, Wallet } from 'ethers';
import Main from '../components/main';

//const { ethereum } = document
export default function Home() {


// const INFURA_ID = '0254d17ec33c45bfb44a5e61ef1106f4'
// const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${INFURA_ID}`)

// const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' //Dai contract

// const ERC20_ABI = [
//      "function name() view returns (string)",
//      "function symbol() view returns(string)",
//      "function totalSupply() view returns (uint256)",
//      "function balanceOf(address) view returns (uint)"
// ]

// const contract  = new ethers.Contract(address, ERC20_ABI, provider)
// const main = async()=>{
//    const name = await contract.name()
//    const symbol =  await contract.symbol()
//    const totalSupply = await contract.totalSupply()
//    console.log(name)
//    console.log(symbol)
//    console.log(totalSupply)
//   }
// const account1 = "0x7fe4dd31daD4DA1BF5461002C3c5C01257786331"
 const account2= "0x1a880C0F5C27114850ba48510349e8D250220954"


// const privateKey = "76921d1cb6d55c44a71942a3be07d009ea8a2fd432b624eabfc46f72ca0ca316"
// const wallet = new ethers.Wallet(privateKey, provider)

 const contractAddress = "0x426fBd2E1Fb3f88ea821fd6573A0d5F0Ce111474"
// const contract  = new ethers.Contract(contractAddress, abi, provider)
// const contractWithWallet = contract.connect(wallet)


// const main  = async ()=>{
 
//  const account1BalanceBefore  =await provider.getBalance(account1)
//  const account2BalanceBefore  =await provider.getBalance(account2)
//  console.log("sender balance:", account1BalanceBefore)
//  console.log("reciever balance:", account2BalanceBefore)


// try{
//   const tx =  await  wallet.sendTransaction({
//     to:account2,
//     value:ethers.utils.parseEther("0.00025")
//   })
  
//   await tx.wait()  // waiting for transaction to be mined
//   console.log(tx)
// }catch(e){
//    alert(e)
//    console.log(e)
// }
 

//   const account1BalanceAfter  =await provider.getBalance(account1)
//   const account2BalanceAfter  =await provider.getBalance(account2)
//   console.log("sender balance afetr:", account1BalanceAfter)
//   console.log("reciever balance after:", account2BalanceAfter)
// }


// const main = async()=>{
//    const name = await contract.name()
//    const symbol =  await contract.symbol()
//    const totalSupply = await contract.totalSupply()
//    console.log(name)
//    console.log(symbol)
//   // console.log(contractWithWallet)
//   const tx =  await contractWithWallet.transfer(account2, 2000)
//   await tx.wait()

//   console.log(tx)
// }

// const main  =async()=>{
//   const block =  await provider.getBlockNumber()
//   const transferEvents =   await contract.queryFilter("Transfer",block-10, block )
//   console.log(transferEvents)
// }


  return (
    <div className={styles.container}>
 <Main></Main>
    </div>
  )
}
