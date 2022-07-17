import * as React from "react";
import { Header } from "../../components/HomeLayout/header/header";
import { Footer } from "../../components/HomeLayout/footer/index";
import "./style/web.scss";
export function Home() {
  const list = [
    {
      title: "CDoge",
      content: "Cerberus Bridge is connecting dogecoin mainnet with multi-chain CDoge",
    },
    { title: "CNFT", content: "Cerberus NFT is an NFT web3 platform supporting CDoge" },
    { title: "CSwap", content: "Cerberus Swap is pairing CDoge with other web3 tokens" },
    { title: "Cerbs", content: "Cerbs is the world's first web69 dogeverse forum" },
  ];
  const joinList = [
    { name: "Twitter", imgurl: require("../../assets/home/tw.svg") },
    { name: "Telegram", imgurl: require("../../assets/home/tg.svg") },
    { name: "Github", imgurl: require("../../assets/home/git.svg") },
    { name: "Discord", imgurl: require("../../assets/home/med.svg") },
  ];
  const roadmapList = [
    {
      name: "Milestone 1:",
      list: [
        "Cerberus universe launch",
        "CDoge deployment and open source",
        "CBridge launch for Doge<>CDoge",
        "Cerberus Proof of Asset",
      ],
    },
    {
      name: "Milestone 2:",
      list: [
        "Berus deployment and open source",
        "CDoge>>Berus vpool launch on BSC",
        "CDoge>>Berus vpool launch on ETH",
        "CSwap launch",
        "Berus lockdrop system for CSwap LPs",
        "Berus burn mechanism for CBridge/CSwap fee"
        
      ],
    },
    {
      name: "Milestone 3:",
      list: [
        "Cerberus doge EVM chain launch",
        "Cerberus doge EVM chain testnet",
        "Cerberus doge EVM chain mainnet",
        "Cerberus doge EVM chain node",
        "Cerberus doge EVM chain DApp",
        "Cerberus global investments and partners",
        "Cerberus hackathon"

      ],
    },
    {
      name: "Milestone 4:",
      list: [
        "Cerberus doge multi-chain Web3 protocol",
        "Cerberus multi-chain CSwap",
        "Cerberus multi-chain DApp",
        "Invest in Elon Musk projects in 100 years"
      ],
    },
  ];
  const partnerList=[
    {id:1,imgurl:require("../../assets/home/doge.png")},
    {id:1,imgurl:require("../../assets/home/Etherum.png")},
    {id:1,imgurl:require("../../assets/home/images.png")},
    {id:1,imgurl:require("../../assets/home/lbank-logo-freelogovectors.png")},
    {id:1,imgurl:require("../../assets/home/bitcoin.png")},
    {id:1,imgurl:require("../../assets/home/Binance-Logo.png")}
  ]
  return (
    <div className="home_box">
      <Header />
      <div className="block1">
        <video
          src={require("../../assets/home/block1.mp4")}
          muted
          autoPlay
          loop
          playsInline={true}
          controls={false}
          className="coin-vedio"
        />
        <div className="center_box">
          <div className="content_box">
            <img src={require("../../assets/home/center_bg.png")} alt="" />
            <p className="word_content">
              Cerberus is an open source dogecoin EVM infrastructure, designed for the multi-chain
              web3 dogeverse
            </p>
            <div className="bottom_centent">
              <button className="start_box">Get Started</button>
              <div className="more_box">Learn more</div>
            </div>
          </div>
        </div>
      </div>
      <div className="block2">
        <div className="container_box">
          <img src={require("../../assets/home/block_bg.png")} alt="" />
          <p>
            Save your lonely doge; let it join the fight for global adoption Bridging and leading
            dogecoin to the multi-chain dogeverse Paving the path for the next-generation dogecoin
            Web69 infrastructure 1D=1D
          </p>
        <button className="white_box">WHITEPAPER</button>
        </div>
      </div>
      <div className="block3">
        <div className="container">
          <ul className="first_nav">
            {list &&
              list.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="top">
                      <p className="title">{item.title}</p>
                      <p className="content">{item.content}</p>
                    </div>
                    <div className="bottom">
                      <p>Get Started</p>
                      <p className="arrow" />
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="berus_box">
            <div className="left" />
            <div className="right">
              <p className="title">Berus</p>
              <p className="content">
                Berus is the best friend of Doge. He destroys the fiat order and helps Doge become
                the currency of the next century.
              </p>
            </div>
          </div>
          <div className="join_box">
            <p className="title">JOIN US</p>
            <ul>
              {joinList &&
                joinList.map((item, index) => {
                  return (
                    <li key={index}>
                      <img src={item.imgurl} alt="" />
                      <p>{item.name}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="bg_box" />
      </div>
      <div className="block4">
        <p className="title">Roadmap</p>
        <div className="content_box">
          <div className="container_box">
            <ul>
              {roadmapList && roadmapList.map((item,index)=>{
                return(<li key={index}>
                  <p className="title_name">{item.name}</p>
                  <div className="content_contain">
                    {
                      item.list.map((ite,inx)=>{
                        return(<p className="content" key={inx+"_content"}>{ite}</p>)
                      })
                    }
                  </div>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="block5">
        <p className="title">Partners</p>
        <div className="container_box">
          <ul>
            {partnerList && partnerList.map((item,index)=>{
              return(
              <li key={index}>
                <img src={item.imgurl} alt=""/>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
