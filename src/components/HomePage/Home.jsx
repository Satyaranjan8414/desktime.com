import React from "react";
import Topbar from "./Topbar";
import Tracking from "./Tracking";
import Running from "./Running";
import Comments from "./Comments";
import Integration from "./Integration";
import Aps from "./Aps";
import HomeFaq from "./HomeFaq";

const Home = () => {
  return (
    <>
      <Topbar />
      <Tracking />
      <Running />
      <Comments />
      <Integration />
      <Aps/>
      <HomeFaq/>
    </>
  );
};

export default Home;
