import React from "react"
import Common from "./Common";
import web from "./img/logoImage.svg";
function Home() {
  return (
    <>
      <Common
      name='Grow your business with'
      imgsrc={web}
      visit='/contact'
      btname='Get Start'
      />
    </>
  );
}
export default Home;
