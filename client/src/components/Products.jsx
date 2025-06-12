import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { productListAction } from "../Redux/Actions/Product";

const Products = () => {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, error, products = [],  } = productListReducer;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div style={{ 
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      padding: '20px'
    }}>
      {loading ? (
        <div style={{
          textAlign: 'center',
          padding: '50px',
          fontSize: '18px',
          color: '#666'
        }}>
          Loading...
        </div>
      ) : error ? (
        <div style={{
          textAlign: 'center',
          padding: '50px',
          fontSize: '18px',
          color: '#dc3545',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '8px',
          margin: '20px'
        }}>
          {error}
        </div>
      ) : (
        <>
          <div style={{
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h1 style={{
              fontSize: '32px',
              color: '#333',
              marginBottom: '10px'
            }}>
              Products
            </h1>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {products.map((product) => (
              <div key={product._id} style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}>
                <Link to={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                  <div>
                    <div style={{
                      width: '100%',
                      height: '200px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '6px',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    
                    <div>
                      <h3 style={{
                        fontSize: '18px',
                        color: '#333',
                        marginBottom: '8px',
                        fontWeight: '600'
                      }}>
                        {product.name}
                      </h3>
                      
                      <p style={{
                        fontSize: '14px',
                        color: '#666',
                        marginBottom: '10px'
                      }}>
                        Review Count: {product.numReview}
                      </p>
                      
                      <p style={{
                        fontSize: '20px',
                        color: '#28a745',
                        fontWeight: '700',
                        margin: '0'
                      }}>
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;