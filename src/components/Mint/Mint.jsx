/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-self-compare */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";
import charityDogsClub from "../Web3/abi.json";
import "../css/media.css";
import "./Mint.css";
import "../css/mediakit.css";
import banner from "../../images/Banner0024.png";
import banner2 from "../../images/2036569998.png";

const charityDogsClubAddress = "0x053abB888946d56635f795DDA97e6a7fF6217Fd5";

const Mint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const [supply, setSupply] = useState();
  const [mintMsg, setMintMsg] = useState("");

  const isConnected = Boolean(accounts[0]);

  async function getSupply() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        charityDogsClubAddress,
        charityDogsClub,
        signer
      );

      try {
        const response = await contract.totalSupply();

        setSupply(Number(response));

        console.log("response: ", Number(response));
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  getSupply();

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        charityDogsClubAddress,
        charityDogsClub,
        signer
      );

      try {
        const getGas = async (e) => {
          try {
            const getPrice = await contract.price();
            const response = await contract.buy(BigNumber.from(mintAmount), {
              gasLimit: e,
              value: (getPrice * mintAmount).toString(),
            });
            console.log("response: ", JSON.stringify(response));

            setMintMsg("Success, waiting confirmation.");
          } catch (err) {
            const errorMint = await err;

            const errMint = {
              reason: errorMint.reason,
            };

            setMintMsg(errMint.reason);
            console.log("error: " + JSON.stringify(err));
          }
        };
        getGas();
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 10) return;
    setMintAmount(mintAmount + 1);
  };

  const mintMessage = () => {
    if (mintMsg === mintMsg) {
      return mintMsg;
    }
  };

  useEffect(() => {
    mintMessage();
  }, []);

  return (
    <div className="container-mint" id="Mint">
      <div className="container-mint2">
        <div className="container-mint3">
          <div className="container-mint4">
            <div className="container-mint7 fadeIn">{supply}/5555 </div>
            <img src={banner} alt="" className="mint-img fadeIn" />
            <div className="container-mint6 fadeIn">
              <button onClick={handleDecrement} className="mint-button">
                -
              </button>

              <input
                type="number"
                readOnly
                value={mintAmount}
                className="mint-input"
              />

              <button onClick={handleIncrement} className="mint-button">
                +
              </button>
            </div>

            {isConnected ? (
              <div className="container-mint5 fadeIn">
                <button onClick={handleMint} className="mint-button2">
                  Mint
                </button>
              </div>
            ) : (
              <div>
                <p className="mint-p fadeIn">You must be connected to Mint</p>
              </div>
            )}
            <p className="mint-p fadeIn">{mintMessage()}</p>
          </div>
        </div>
        <div className="container-mint8 fadeIn">
          <h2 className="mint-h2">First Minting Phase</h2>
          <p className="mint-p3">
            Our first minting phase grants its holders OG passes, a total of
            1,111 OG Pups, as well as many future benefits from our projects.
          </p>
          <img src={banner2} alt="Banner-2" className="mint-img2 fadeIn" />
        </div>
      </div>
    </div>
  );
};

export default Mint;
