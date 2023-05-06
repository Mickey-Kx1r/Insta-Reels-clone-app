import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import video1 from"./content/pexels-mikhail-nilov-8301918-4096x2160-25fps.mp4";
import video2 from"./content/nature.mp4";
// import db from "./firebase";

function App() {
  // const [reels, setReels] = useState([]);
  // useEffect(() => {
  //   //App component will run once when it loads
  //   db.collection("reels").onSnapshot((snapshot) =>
  //     setReels(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);
  return (
    <div className="app">
      <div className="app_top">
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
          alt=""
        />
        <h3>Reels</h3>
      </div>
      <div className="app_videos">
        {/* {reels.map(({ url, channel, song, likes, shares, avatarSrc }) => ( */}
          <VideoCard
            url={"https://rr5---sn-qxaelnez.googlevideo.com/videoplayback?expire=1683322043&ei=WyBVZJWUDIfLx_APgc2NsAw&ip=146.70.155.2&id=o-AAY6BYkwGrMFHCVVG8AMhL29aS3VNg0c0OPMjehdifyq&itag=313&source=youtube&requiressl=yes&ctier=SH&spc=qEK7BzLQM8yu2_DV6pRiZtehOHhV3ZU&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=3065208&dur=25.333&lmt=1625299886903611&keepalive=yes&fexp=24007246&c=ANDROID&txp=6316224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cctier%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIMKq5qapePbcghS1O49CaXa8GBLcfFw7O2qsvHUjmTeAiB-89N-P-Ek0VdXqHXMkswXwoSQcPDTzo3IT3PMEhEoHA%3D%3D&title=Dark%20Aesthetic%20%7C%20Ludovico%20Einaudi%20-%20Experience&redirect_counter=1&rm=sn-4wgr7e&req_id=e08458b47a34a3ee&cms_redirect=yes&ipbypass=yes&mh=FE&mip=103.117.14.195&mm=31&mn=sn-qxaelnez&ms=au&mt=1683300081&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAIxBLuu32vFicLLBaigBiHTnLVfuahnMScTtdRxpe5pKAiBVMDYijqKRxzAbY9X7fg19L25OZAr1XpnyAGZ2au3EkA%3D%3D"}
            channel={'Mickey'}
            song={'Dont Rush - Young T & Bugsey'}
            likes={'1.5K'}
            shares={290}
            avatarSrc={'https://i.pinimg.com/originals/78/84/76/788476fa27e8b42293ed80be4cc4da98.jpg'}
          />
          <VideoCard
            url={"https://rr3---sn-ab5l6nrk.googlevideo.com/videoplayback?expire=1683321932&ei=7B9VZNzOEYTy1gLBqIrwAw&ip=45.12.135.232&id=o-ALTnHJzejvX8aVVau24qdSwukqdUKhsFId14x2NC2N-7&itag=247&source=youtube&requiressl=yes&ctier=SH&spc=qEK7B2pIfMpLwSUBaibas137Je9Q-aU&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=890498&dur=12.067&lmt=1660301805752115&keepalive=yes&fexp=24007246&c=ANDROID&txp=631A224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cctier%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgaBH-cIr9WmVR6lg3l-pXAKb5pXP115os-QIecevNdzICIQC4jlVz515s-N9hUY55wfVIr5lAwP7SDsJ-7s0BNo_PQA%3D%3D&title=Turbo%20Snail%20%F0%9F%90%8C%F0%9F%94%A5%0A%23cars%20%23turbo%20%23fast%20%23exoticcars&redirect_counter=1&rm=sn-8xgp1vo-ab5s7l&req_id=6047fa0d3ceba3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=fm&mm=29&mn=sn-ab5l6nrk&ms=rdu&mt=1683300086&mv=m&mvi=3&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhALrXSEAowPY-KYMUZU_EZm_zktaPJ-E40c8UfxKbe1GeAiByKDmmhDo8GCJorkFkcIl_OoqEOPEqllyJo9a2QGCVfg%3D%3D"}
            channel={'Mickeyyz'}
            song={'Test Song- NT wright'}
            likes={'2.4K'}
            shares={143}
            avatarSrc={'https://i.pinimg.com/736x/ad/fe/5e/adfe5ec77f551e931425d11a3cd31f38.jpg'}
          />
          <VideoCard
            url={'https://rr2---sn-q4fl6n6z.googlevideo.com/videoplayback?expire=1683321630&ei=vh5VZNz_A6mPx_APoIyGSA&ip=45.12.135.232&id=o-AAAWdfOdhsmriBaW_DfwmpVdo08jHWddTtYyXdEOUTkh&itag=271&source=youtube&requiressl=yes&ctier=SH&spc=qEK7B-IqANezUoHg7OWZjUNnjNviuSI&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=907371&dur=8.166&lmt=1640200539705855&keepalive=yes&fexp=24007246&c=ANDROID&txp=6316224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cctier%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgOPHGzhg77p4w06pV98VTgFF4asnLQPlfdb_Kwdqt3GgCIQCzBNmG7a8uimJkvy09noK1nCUA7ZO8FpN4dpXWGJYd8A%3D%3D&title=City%20Lights%20%F0%9F%8C%86%20%7C%7C%20short%20video%20%7C%7C%20night%20view%20%23shorts%20%23reels%20%23night%20%23lights&rm=sn-8xgp1vo-xfgl7z&req_id=1079e866a517a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-ab5ele76&cms_redirect=yes&cmsv=e&mh=3F&mip=103.117.14.195&mm=34&mn=sn-q4fl6n6z&ms=ltu&mt=1683299370&mv=D&mvi=2&pl=0&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAKZ4kkxSO--VO6P7mDDWpiSocAgAgB3uIBMk6n5FN7DwAiBTFOhfOq_Ooo7ReuUP2vqokyElWQKh1TPiZS1Whzp8dg%3D%3D'}
            channel={'Alan'}
            song={'Never been here- Mc callan'}
            likes={"5.6K"}
            shares={123}
            avatarSrc={'https://gotoclass.ir/media/Cool-Avatar-Transparent-Image.png'}
          />
          <VideoCard
            url={'https://rr1---sn-ab5l6nr6.googlevideo.com/videoplayback?expire=1683322117&ei=pSBVZIOzBIXUx_APsOaASA&ip=45.12.135.232&id=o-ACvX_7cod_EMUB-of_hn5Bzl_hHXGGpQsCu4LW2SrUNn&itag=313&source=youtube&requiressl=yes&ctier=SH&spc=qEK7B-q8_NZIaSRB9gr2yZMU0kB8XDI&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=1169986&dur=15.833&lmt=1624077887857098&keepalive=yes&fexp=24007246&c=ANDROID&txp=6316224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cctier%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgbMG1iRDiQS09vqzCU8CtM_cmcPHpua33b1RcB1c7LNkCIB29oNDi77Gv8iC-u9eLOXIQ7_7T3_79JG5iD4Tx9BS6&title=Dark%20Aesthetic%20Edit&redirect_counter=1&rm=sn-8xgp1vo-xfgs7s&req_id=14f81b832717a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=2r&mm=29&mn=sn-ab5l6nr6&ms=rdu&mt=1683300086&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgW4jEYHj2yBhuknNlA7SSc61sSTT03jaF2jqtQ9jqXmUCIQCX9egSrcMo07-8cdp5WnFOjaV7-Xjl4c3R96c4buAghg%3D%3D'}
            channel={'Ivy'}
            song={'Been so careless- nvm heart'}
            likes={"9.8K"}
            shares={965}
            avatarSrc={'https://www.pngarts.com/files/3/Girl-Avatar-PNG-Photo.png'}
          />

        {/* ))} */}
      </div>
    </div>
  );
}

export default App;
