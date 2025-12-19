import React, { useState, useEffect } from "react";
import axios from 'axios';
import PromotionSearch from "components/Promotion/Search/Search";
import UIContainer from "components/UI/Container/Container";

const PagesPromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/promotion?_embed=comments')
      .then((response) => {
        setPromotions(response.data);
      });
  }, []);

  return (
    <UIContainer>
      <PromotionSearch promotions={promotions} />
    </UIContainer>
  );
};

export default PagesPromotionSearch;
