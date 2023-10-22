import React, { useEffect, useState } from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import axios from 'axios';

const PagesPromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/promotion?_embed=comments')
      .then((response) => {
        setPromotions(response.data);
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
    </div>
  );
};

export default PagesPromotionSearch;