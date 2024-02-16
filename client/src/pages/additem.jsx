import React from 'react';

const Additem = () => {
  return (
    <div>
      <div id="wrapper">
        {/* /. NAV SIDE */}
        {/* Modal */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row">
              {/* Modal content */}
              { /* Add your React components and logic here */ }
              <div className="container">
                <a href="/buy_sell" className="btn btn-light mb-3">
                  &lt; Go Back
                </a>
                <a href="/forumindex" className="btn btn-light mb-3">
                  &lt;&lt; Manage Products
                </a>
                { /* Add your PHP logic for status alerts here */ }
                <div className="card border-danger">
                  <div className="card-body">
                    <form action="add.php" method="post" encType="multipart/form-data">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="barcode" className="col-form-label">Barcode</label>
                          <input type="text" className="form-control" id="barcode" name="barcode" placeholder="Barcode" required />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="name" className="col-form-label">Name </label>
                          <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label htmlFor="price" className="col-form-label">Price</label>
                          <input type="number" className="form-control" id="price" name="price" placeholder="Price" required />
                        </div>
                        <div className="form-group col-md-4">
                          <label htmlFor="qty" className="col-form-label">Qty</label>
                          <input type="text" className="form-control" name="qty" id="qty" placeholder="Qty" required />
                        </div>
                        <div className="form-group col-md-4">
                          <label htmlFor="image" className="col-form-label">Image</label>
                          <input type="text" className="form-control" name="image" id="image" placeholder="Image URL" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="note" className="col-form-label">Description</label>
                        <textarea name="description" id="" rows="5" className="form-control" placeholder="Description"></textarea>
                      </div>
                      <button type="submit" className="btn btn-success" style={{ backgroundColor: '#2770D5' }}>
                        <i className="fa fa-check-circle"></i> Save
                      </button>
                    </form>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additem;
