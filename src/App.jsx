import './App.css'
import {preOrders, shopAllBags, toCollection} from "../helpers/button_functions.js";
import {Button} from "./components/button.jsx";
import {ProductTile} from "./components/productTile.jsx";
import {TestemonialTile} from "./components/testemonialTile.jsx";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourstory from "./assets/our_story.png"


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button onclick={toCollection} disabled={false}>To collection</Button>
            <Button onclick={shopAllBags} disabled={false}>Shop all bags</Button>
            <Button onclick={preOrders} disabled={true}>Pre orders</Button>
        </nav>
          <main>
              <ProductTile bestSellerOrNewCollection={"Best seller"} price={"400"} bagname={"The handy bag"} imageSource={bag1}></ProductTile>
              <ProductTile bestSellerOrNewCollection={"Best seller"} price={"250"} bagname={"The stylish bag"} imageSource={bag2}></ProductTile>
              <ProductTile bestSellerOrNewCollection={"New collection"} price={"300"} bagname={"The simple bag"} imageSource={bag3}></ProductTile>
              <ProductTile bestSellerOrNewCollection={"New collection"} price={"150"} bagname={"The trendy bag"} imageSource={bag4}></ProductTile>
          </main>
          <footer>
              <TestemonialTile>
                  <h2>The brand</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, voluptatum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid et inventore labore maxime molestias nulla perferendis perspiciatis quis saepe sapiente, similique suscipit temporibus vero!</p>
              </TestemonialTile>
              <TestemonialTile>
                  <img src={brand} alt=""/>
              </TestemonialTile>
              <TestemonialTile>
                  <img src={ourstory} alt=""/>
              </TestemonialTile>
              <TestemonialTile>
                  <h2>Our story</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque excepturi ipsa laudantium minus, non sequi voluptas voluptate. Asperiores at, aut dolorum maxime nam non rerum tempore totam. Eaque, incidunt, tenetur.</p>
              </TestemonialTile>
          </footer>
      </>
  )
}

export default App
