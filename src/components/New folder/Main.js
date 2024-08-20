import "./css/main.css";
import { useEffect  } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Itemcard from "./Itemcard.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "./Hooks/Data.js";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Main(props) {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="main">
      <div className="bests">
        <h1>BEST SELLER</h1>
        <button><a href="/Store">View All</a></button>
      </div>
      <Carousel
        infinite={true}
        centerMode={true}
        spacing={8}
        responsive={responsive}
        className="slider"
      >
        {Data.products.map((item, index) => {
          return (
            <Itemcard
              Name={item.Name}
              price={item.price}
              image={item.image}
              key={index}
              item={item}
            />
          );
        })}
      </Carousel>
      <div className="Extra-1"></div>
      <div className="Extra-2"></div>
      <div className="shop">
        <h1>SHOP BY GATEGORY</h1>
        <div className="sections">
        <a href="/Store">
          <div>
            <div className="cons">
              <img
                src="https://static.wixstatic.com/media/c837a6_e9de4ca4cb7a4cbc9c9e0098bcf68fa4~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_e9de4ca4cb7a4cbc9c9e0098bcf68fa4~mv2.jpg"
                alt=""
              />
            </div>
            <h2>CONSOLES</h2>
          </div>
        </a>
          <a href="/Store">
            <div>
            <div className="Acc">
              <img
                src="https://media.istockphoto.com/id/1170073824/photo/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-joystick-headset-mobile.jpg?b=1&s=612x612&w=0&k=20&c=wS0BI7sgQTB4qy9UUI43pa2tQf7pPpPcKcVq4at2t5Y="
                alt=""
              />
            </div>
            <h2>ACCESSORIES</h2>
          </div>
          </a>
          <a href="/Store">
            <div>
              <div className="cont">
                <img
                  src="https://wallpapers.com/images/hd4/cool-hd-gaming-controller-pixogemonu7mvciz.jpg"
                  alt=""
                />
              </div>
              <h2>CONTROLLER</h2>
          </div>
            </a>
        </div>
      </div>
      <div className="sale">
        <div className="onsale">
          <div className="four" data-aos="fade-right"></div>
          <div className="third" data-aos="fade-up"></div>
          <div className="sec" data-aos="fade-left"></div>
          <div className="first" data-aos="fade-right">
            <h3>THIS WEEK'S DEALS</h3>
            <h1>10%</h1>
            <h2>off all games</h2>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="bests ellers">
        <h1>UPGRADE YOUR GEAR</h1>
        <button><a href="/Store">View All</a></button>
      </div>
      <Carousel
        infinite={true}
        centerMode={true}
        spacing={8}
        responsive={responsive}
        className="slider"
      >
        {Data.gear.map((item, index) => {
          return (
            <Itemcard
              Name={item.Name}
              price={item.price}
              image={item.image}
              key={index}
              item={item}
            />
          );
        })}
      </Carousel>
      <div className="Extra-1"></div>
      <div className="Extra-2"></div>
      <div className="save">
        <h1>SPEND & SAVE</h1>
        <p>save 20% when you spend more than $125</p>
        <a href="/Store"><button>Shop now</button></a>
      </div>
      <div className="bests">
        <h1>TRENDING GAMES</h1>
        <button href="/Store" >View All</button>
      </div>
      <Carousel
        infinite={true}
        centerMode={true}
        spacing={8}
        responsive={responsive}
        className="slider"
      >
        {Data.games.map((item, index) => {
          return (
            <Itemcard
              Name={item.Name}
              price={item.price}
              image={item.image}
              key={index}
              item={item}
            />
          );
        })}
      </Carousel>
      <div className="Extra-1"></div>
      <div className="Extra-2"></div>
      <div className="Em">
        <h1>NEWSLETTER</h1>
        <p>
          Sign up to receive updates on new <br /> products and special offers
        </p>
        <form>
          <input type="text" placeholder="Enter email" />
          <button>Submit</button>
        </form>
      </div>
      <div className="imga">
        <img
          src="https://static.wixstatic.com/media/c837a6_120b654bf8214699a68e61aedba60fdd~mv2.png/v1/fill/w_961,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Games%20stack%20copy.png"
          alt="f"
        />
      </div>
    </div>
    
  );
}

export default Main;
