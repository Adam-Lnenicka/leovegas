import React, { useEffect } from "react";
import { useState } from "react";
import CardsList from "../../components/CardsList/CardsList";
import SearchBox from "../../components/SearchBox/SearchBox";

function Home() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleSelectChange = (e, option) => {
    setSelected(option);
    setIsActive(false);
  };

  const filteredItems = items.filter((item) => {
    return item.gameName.toLowerCase().includes(searchField.toLowerCase());
  });

  const CategoriesDropDown = () => {
    return (
      <div className="dropdown">
        <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
          {selected ? selected : "Choose Category"}
        </div>
        {isActive && (
          <div className="dropdown__content">
            {categories.map((option) => (
              <div
                onClick={(e) => {
                  handleSelectChange(e, option);
                }}
                className="dropdown__item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
        <h4 className="pointer" onClick={() => setSelected("")}>
          Clear
        </h4>
      </div>
    );
  };
  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(
        "https://www.mocky.io/v2/5da99f9f31000036004e0a4e"
      );

      const items = await response.json();

      console.log(items);
      var cat = [];
      if (selected) {
        const i = items.filter((item) => {
          return item.categories.map((category) => {
            if (category.toLowerCase().includes(selected.toLowerCase())) {
             return cat.push(item);
            }
            return null ;
          });
        });
        console.log(`categorized: ${i}`);
        setItems(cat);
      } else {
        setItems(items);
      }
      var dropDown = [];
      items.map((item) => {
        return item.categories.map((i) => {
          dropDown.push(i);
          return i;
        });
      });
     

      const uniqueCategories = [...new Set(dropDown)]; 
      console.log(uniqueCategories);
      setCategories(uniqueCategories);
    };

    getItems();
  }, [selected]);

  return (
    <div>
      <div className="filters">
        <h1>Search Your Favourite Game</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <CategoriesDropDown />
      </div>

      <CardsList items={filteredItems} />
    </div>
  );
}

export default Home;
