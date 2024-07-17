import axios from '../../axios';
import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../Asset/Heart';
import './Post.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Store/Context';

function Post() {
  const { search, setSearch, category } = useContext(AuthContext);
  const [product, setProduct] = useState([]);
  const imgURL = 'https://campusconnect-1.onrender.com/upload_img/';

  useEffect(() => {
    axios.get('/getProduct?search=' + search + '&category=' + category).then((response) => {
      setProduct(response.data.products);
      console.log(response);
    });
  }, [search, category]);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {product.map((items, index) => (
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/view/' + items._id} key={items._id}>
              <div className="card">
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={imgURL + items.image.filename} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {items.price}</p>
                  <p className="name">{items.name}</p>
                  <p style={{ width: '100px' }}>{items.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="Banner">
        <img src="https://statics.olx.in/olxin/banners/hero_bg_in_v4@1x.png" alt="" />
      </div>
    </div>
  );
}

export default Post;
