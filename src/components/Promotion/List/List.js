import React from "react";
import "./List.css";
import PromotionCard from "../Card/Card";

const PromotionList = ({ loading, error, promotions }) => {
  if (error) {
    return <div>Algo deu errado</div>;
  }

  if (loading || promotions === null) {
    return <div>Carregando...</div>;
  }

  if (promotions.length === 0) {
    return <div>Nenhum resultado encontrado</div>;
  }

  return (
    <div className="promotion-list">
      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
    </div>
  );
};

export default PromotionList;
