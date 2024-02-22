import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuItem = ({ title, description, imageName, price, quantity, onAdd, onRemove }) => {
  return (
    <div className="container my-3">
      <div className="row border p-3">
        <div className="col-4">
          <img
            src={require(`../images/${imageName}`)}
            alt={title}
            className="img-fluid rounded-3"
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <p className="card-text-price">Price: ${price}</p>
            <div className="d-flex align-items-center">
              <button className="btn btn-sm btn-secondary me-2" onClick={onRemove}>-</button>
              <span className="mx-2">{quantity}</span>
              <button className="btn btn-sm btn-primary" onClick={onAdd}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
