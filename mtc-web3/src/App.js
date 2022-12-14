import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";

function App() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const contractAddress = '0x94B923047661B1aa1c0BBa0249443e04A71df373';
  const ABI = 
  '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"compoundFreq","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"compoundRewardsTimer","outputs":[{"internalType":"uint256","name":"_timer","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getDepositInfo","outputs":[{"internalType":"uint256","name":"_stake","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPerHour","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_compoundFreq","type":"uint256"}],"name":"setCompFreq","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minStake","type":"uint256"}],"name":"setMinStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsPerHour","type":"uint256"}],"name":"setRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
  const contract = new ethers.Contract(contractAddress, ABI, signer);


  const getbalanceOfSigner = async () => {
    try {
      const balanceOfSigner = (parseInt(await contract.balanceOf(signer.getAddress())) / 10**18).toFixed(4);
      console.log("Balance of signer: ", balanceOfSigner);
      document.querySelector('#balanceOfSigner').innerHTML=balanceOfSigner
    } catch (error) {
      console.log("getbalanceOfSigner Error: ", error);
    }
  }
  const getDepositInfo= async () => {
    try {
      const depositInfo = (await contract.getDepositInfo(signer.getAddress()))["_stake"] / 10**18;
      const rewardInfo = (await contract.getDepositInfo(signer.getAddress()))["_rewards"] / 10**18;
      console.log("Deposit info: ", depositInfo);
      console.log("Reward info: ", rewardInfo);
      document.querySelector('#depositOfSigner').innerHTML=depositInfo;
      document.querySelector('#rewardOfSigner').innerHTML=rewardInfo;
    } catch (error) {
      console.log("getDepositInfo Error: ", error);
    }
  }
  const getMinStake= async () => {
    try {
      const minStake = (await contract.minStake() / 10**18).toFixed(4);
      console.log("Min stake: ", parseInt(minStake));
      document.querySelector('#minStake').innerHTML=minStake
    } catch (error) {
      console.log("getMinStake Error: ", error);
    }
  }
  const getRewardsPerHour= async () => {
    try {
      const rewardsPerHour = (await contract.rewardsPerHour() / 10**5).toFixed(1);
      console.log("Rewards per hour: ", parseInt(rewardsPerHour));
      document.querySelector('#rewardsPerHour').innerHTML=rewardsPerHour
    } catch (error) {
      console.log("getRewardsPerHour Error: ", error);
    }
  }
  const stake= async () => {
    try {
      let stakeSum = (document.querySelector('[name="stake-field"]').value);
      await contract.deposit((stakeSum * 10**18).toString());
      console.log("Stakes: ", parseInt(stakeSum));
    } catch (error) {
      console.log("getStake Error: ", error);
    }
  }
  const withdrawAll= async () => {
    try {
      const withdrawAll = await contract.withdrawAll();
      console.log("withdrawAll: ", parseInt(withdrawAll));
    } catch (error) {
      console.log("getWithdrawAll Error: ", error);
    }
  }
  const withdraw= async () => {
    try {
      let withdrawSum = (document.querySelector('[name="withdraw-field"]').value);
      const withdraw = await contract.withdraw((withdrawSum * 10**18).toString());
      console.log("withdraw: ", parseInt(withdraw));
    } catch (error) {
      console.log("getWithdrawAll Error: ", error);
    }
  }
  const stakeRewards= async () => {
    try {
      const stakeRewards = await contract.stakeRewards();
      console.log("stakeRewards: ", parseInt(stakeRewards));
    } catch (error) {
      console.log("stakeRewards Error: ", error);
    }
  }
  const getRewards= async () => {
    try {
      const getRewards = await contract.claimRewards();
      console.log("getRewards: ", getRewards);
    } catch (error) {
      console.log("getRewards Error: ", error);
    }
  }

  return (
    <div className="container">
      <div className="row mt-5">

        <div className="col">
          <h3>Your MTC balance</h3>
          <p id="balanceOfSigner"></p>
          <h3>Your Deposit</h3>
          <p id="depositOfSigner"></p>
          <h3>Your Rewards</h3>
          <p id="rewardOfSigner"></p>
          <h3>Min stake</h3>
          <p id="minStake"></p>
          <h3>Rewards Per Hour (%)</h3>
          <p id="rewardsPerHour"></p>
          
        </div>

        <div className="col">
          <h3>Stakes</h3>
        <div>
          <button type="submit" className="btn btn-dark" 
          onClick={
            () => {
              getbalanceOfSigner();
              getDepositInfo();
              getMinStake();
              getRewardsPerHour();
            }
          }>Update</button>
          <button type="submit" className="btn btn-dark" onClick={withdrawAll}>Withdraw All</button>
          <button type="submit" className="btn btn-dark" onClick={stakeRewards}>Stake Rewards</button>
          <button type="submit" className="btn btn-dark" onClick={getRewards}>Get Rewards</button>

        </div>
        <div>
          <input type="number" name="stake-field"/>
          <button type="submit" className="btn btn-dark" onClick={stake}>Stake</button>
          <input type="number" name="withdraw-field"/>
          <button type="submit" className="btn btn-dark" onClick={withdraw}>Withdraw</button>
        </div>
        </div>
        
      </div>
      
    </div>
    
  );
}

export default App;