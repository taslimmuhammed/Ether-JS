import {useEffect, useState} from 'react'
import { abi } from '../Utils/Abi';
import { ethers, Wallet } from 'ethers';

 const Main = () => {

    const account2= "0x1a880C0F5C27114850ba48510349e8D250220954"
    const contractAddress = "0x426fBd2E1Fb3f88ea821fd6573A0d5F0Ce111474"

const main= async()=>{
try{
    const { ethereum } = window
  const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
     const contract = new ethers.Contract(contractAddress, abi,signer)
//   if(!ethereum) return alert("Please install metamask")
  const accounts = await ethereum.request({method: "eth_accounts"})
  const account  = accounts[0]
   const parsedAmount = ethers.utils.parseEther(".0055")
   const name = await contract.name()
   const symbol =  await contract.symbol()
   const totalSupply = await contract.totalSupply()
   console.log(name, symbol, totalSupply)

  const tx =  await contract.transfer(account2,2000)
 await  tx.wait()

 console.log(tx)
   //To transfer etherium********************************************
//   await ethereum.request({
//     method:"eth_sendTransaction",
//     params:[{
//       from:account,
//       to :account2,
//       gas:"0x5208",
//       value:parsedAmount._hex
//     }]
//   })

   
}catch(e){
  console.log(e)
  alert(e)
}
}

useEffect(() => {
main()
}, [])

    return ( <div>
       <h1>Hellooo</h1>
     <button onClick={main}>send Money</button>
    </div> );
}
 
export default Main;