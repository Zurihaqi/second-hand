const FormatCurriencies = (price) => {
    // const priceFormat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    // return priceFormat;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  
  export default FormatCurriencies;
  