'use client';
import { useState, useEffect, useImperativeHandle } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const ProductManager = ({ onProductsChange,resetTrigger,previewProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [purchasedCount, setPurchasedCount] = useState('');
  const [products, setProducts] = useState([]);

  // Notify parent when products change
  useEffect(() => {
    if (typeof onProductsChange === 'function') {
      onProductsChange(products);
    }
  }, [products, onProductsChange]);

  useEffect(() => {
    if(previewProduct){
      setProducts(previewProduct);
    }else{setProducts([]);}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetTrigger]);

 
  const handleAddProduct = (e) => {
    e.preventDefault();

    if(productName == "" && productPrice == "" && purchasedCount == "") {
      alert("all filds are empty")
      return false;
    }
    
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      purchasedCount: purchasedCount
    };

    setProducts(prev => [...prev, newProduct]);
    
    // Reset form
    setProductName('');
    setProductPrice('');
    setPurchasedCount('');
  };

  // Step 4: Handle product deletion
  const handleDeleteProduct = (index) => {
    setProducts(prev => prev.filter((_, i) => i !== index));
    //setProducts(prev => prev.filter(product => product.id !== productId));
  };

  return (
    <div>
      {/* Product Form */}
      <form className='add_product_form' >
        <div className='flex justify-between'>
          <div className="form-group mr-[30px]">
            <Label> Product Name:</Label>
            <Input name="name" value={productName} onChange={(e) => setProductName(e.target.value)} className='form-control name' required />
          </div>

          <div className="form-group mr-[30px]">
            <Label> Price:</Label>
            <Input type="number" name="price"  value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className='form-control name' required />
          </div>

          <div className="form-group mr-[30px]">
            <Label> Purchased Count:</Label>
            <Input type="number" name="purchasedCount" value={purchasedCount} onChange={(e) => setPurchasedCount(e.target.value)} className='form-control name' required />
          </div>

          <div className="form-group w-auto mt-[25px]">
            <Button type="button" className='add_product_button' onClick={handleAddProduct}> Add  </Button>
          </div>  
        </div>
      </form>

      {/* Product List */}
      <div>
        <h4 className='title_fields' style={{ color: '#2c3e50', marginBottom: '15px' }}>Product List</h4>
        {products.length === 0 ? (
          <p>No products added yet</p>
        ) : (
          <div style={{ 
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {products.map((product, index) => (
              <div key={index} className='proeduct-box flex p-2.5 items-center' >
                <div  style={{ flex: 1 }}>
                  <h5 className='mb-1.5 font-bold text-[#2c3e50]'>{product.name}</h5>
                  <p className='text-[#7f8c8d]'>
                    Price: <b>${product.price}</b> | Purchased: <b>{product.purchasedCount}</b> times
                  </p>
                </div>
                <Button onClick={() => handleDeleteProduct(index)} > Delete </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManager;