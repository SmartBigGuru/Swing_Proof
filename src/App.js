import React from "react";
import Swipes from "react-simple-swipe";

const IMAGES = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];
const Logo = ["../assets/thumbnail_logo.png"];
const Home = ["../assets/iconhome.png"];
const Community = ["../assets/iconcommunity.png"];
const Pineapple = ["../assets/users.png"];
const Messages = ["../assets/iconmessaging.png"];
const Matches = ["../assets/iconlikes.png"];

const back = (state) => ({
  index: state.index - 1,
  transitionTime: 0.5,
});

const next = (state) => ({
  index: state.index + 1,
  transitionTime: 0.5,
});

class App extends React.Component {
  state = {
    index: 0,
    transitionTime: 0,
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          background: "black",
          color: "white",
        }}
      >
        <div
          className="ss-slider-container"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "24px 0",
          }}
        >
          <img
            src={Logo}
            style={{
              width: "calc(100% - 200px)",
              marginBottom: "24px",
              flexGrow: 0,
              flexShrink: 0,
            }}
          ></img>
          <Swipes
            render={() => {
              return IMAGES.map((src) => {
                return (
                  <div
                    style={{
                      width: "100%", // Adjust width to account for margins
                      height: "calc(100% - 200px)",
                      flexGrow: 0,
                      flexShrink: 0,
                      textAlign: "center",
                    }}
                  >
                    <img
                      key={src}
                      src={src}
                      style={{
                        width: "calc(100% - 20px)",
                        height: "100%",
                        objectFit: "cover",
                        backgroundPosition: "center",
                        borderTopLeftRadius: "2%",
                        borderTopRightRadius: "2%",
                        margin: "0 10px", // Add horizontal margin for spacing
                      }}
                    />
                    <div style={{ textAlign: "left", margin: "10px" }}>
                      <div>jkjk0606, 39M</div>
                      <div style={{ color: "purple", paddingTop: "10px" }}>
                        Baltimore, MD
                      </div>
                      <div style={{ paddingTop: "30px" }}>
                        I am here for new and fun experiences...
                      </div>
                    </div>
                  </div>
                );
              });
            }}
            width={375}
            style={{ height: "calc(100% - 60px)" }}
            index={this.state.index}
            transitionTime={this.state.transitionTime}
            onIndexChange={(index, transitionTime) => {
              this.setState({
                index,
                transitionTime,
              });
            }}
            onTransitionComplete={() => {
              this.setState({
                transitionTime: 0,
              });
            }}
          />
          {/* <div>
            <button onClick={() => this.setState(back)}>Prev</button>
            <button onClick={() => this.setState(next)}>Next</button>
          </div> */}
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
          }}
        >
          <img src={Home} style={{ width: "50px" }}></img>
          <img src={Community} style={{ width: "50px" }}></img>
          <img src={Pineapple} style={{ width: "50px" }}></img>
          <img src={Messages} style={{ width: "50px" }}></img>
          <img src={Matches} style={{ width: "50px" }}></img>
        </div>
      </div>
    );
  }
}

export default App;
