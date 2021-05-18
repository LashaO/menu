import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Forma from "./Form";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
//import font from "./fonts/firagoDownload_Folder_FiraGO_1001/Fonts/FiraGO_OTF_1001/Roman/FiraGO-Bold.otf";

const allCategories = ["ყველა", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [priceSum, setPriceSum] = useState(0);
  const [quantity, setQuantity] = useState(Array(items.length).fill(0));

  const filterItems = (category) => {
    if (category === "ყველა") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>ჩვენი მენიუ</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu
            quantity={quantity}
            setQuantity={setQuantity}
            priceSum={priceSum}
            setPriceSum={setPriceSum}
            items={menuItems}
          />
        </section>
        <section
          style={{
            position: "fixed",
            bottom: 5,
            left: 0,
            right: 3,
            marginLeft: "72%",
            marginRight: "2%",
            marginBottom: "2%",
            backgroundColor: "#e3e3e3",
            maxWidth: "186px",
            border: "2px solid black",
            borderRadius: "9px",
          }}
        >
          <h4 style={{ margin: "15px" }}>
            ჯამი: {Math.round(priceSum * 100) / 100} ლარი
          </h4>
          <div>
            <button
              style={{ marginBottom: "15px" }}
              className="filter-btn"
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              შეკვეთა
            </button>
            <button
              style={{ marginBottom: "15px" }}
              className="filter-btn"
              onClick={() => {
                setPriceSum(0);
                setQuantity(Array(items.length).fill(0));
              }}
            >
              <DeleteOutlineIcon style={{ fontSize: 16 }} />
            </button>
          </div>
        </section>
      </main>
      <Forma />
    </>
  );
}

export default App;
