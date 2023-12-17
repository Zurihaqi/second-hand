import FormatCurrencies from "../FormatCurrencies/FormatCurrencies";
import "./Card.css";

const Card = ({ img, name, category, price, href }) => {
  return (
    <a href={href} className="card product-card w-100">
      <img src={img} className="card-img-top w-100" alt="product-img" />
      <div className="card-body">
        <h5 className="card-title product-title">{name}</h5>
        <p className="card-text product-description">{category}</p>
        <h5 className="card-title product-price">
          Rp {FormatCurrencies(price)}
        </h5>
      </div>
    </a>
  );
};

export default Card;
