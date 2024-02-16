import React, { useEffect, useState } from 'react';

const Buyerhome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from your API or database
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('your_api_endpoint'); // Replace 'your_api_endpoint' with the actual API endpoint
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <body>
      {/* Your JSX structure */}
      <div id="wrapper">
        <NavbarSidebar/>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            <hr />
            <div className="row">
              <div className="col-lg-12">
                {/* Loop through the products and create cards for each product */}
                {products.map((product) => (
                  <div className="product-card" key={product.id}>
                    <img className="product-tumb" src={product.image} alt="Card image cap" />
                    <div className="card-body">
                      <h5 style={{ textAlign: 'left', color: 'black', fontSize: '22px' }}>
                        Name : {product.name}
                      </h5>
                      <h5 style={{ textAlign: 'left', color: 'black', fontSize: '22px' }}>
                        Price: {product.price} Rs
                      </h5>
                      <p className="product-bottom-details">Description: {product.description}</p>
                    </div>
                    <div className="product-links">
                      <button className="product-button">Buy</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <script src="./js2/jquery-1.10.2.js"></script>
        <script src="./js2/bootstrap.min.js"></script>
        <script src=".js2/js/custom.js"></script>
      </div>
    </body>
  );
};

export default Buyerhome;
