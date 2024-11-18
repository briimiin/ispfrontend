import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [packages, setPackages] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/packages')
      .then(response => setPackages(response.data))
      .catch(error => console.error('Error fetching packages:', error));

    axios.get('http://127.0.0.1:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));

    axios.get('http://127.0.0.1:5000/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const handlePackageUpdate = (id, updatedPackage) => {
    // API call to update the package
  };

  const handleProductUpdate = (id, updatedProduct) => {
    // API call to update the product
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Manage Packages</h2>
      {packages.map(pkg => (
        <div key={pkg.id}>
          <h3>{pkg.name}</h3>
          <p>{pkg.speed}</p>
          <p>{pkg.price}</p>
          <button onClick={() => handlePackageUpdate(pkg.id, pkg)}>Edit</button>
        </div>
      ))}

      <h2>Manage Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.stock}</p>
          <button onClick={() => handleProductUpdate(product.id, product)}>Edit</button>
        </div>
      ))}

      <h2>View Orders</h2>
      {orders.map(order => (
        <div key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>Customer: {order.customer_name}</p>
          <p>Total Price: {order.total_price}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
