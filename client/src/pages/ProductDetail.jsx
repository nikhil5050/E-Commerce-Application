import { useParams } from "react-router-dom";
import Layout from "../Layouts/Layouts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productAction } from "../Redux/Actions/Product";
import { addToCartAction } from "../Redux/Actions/Cart";

function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const productReducer = useSelector((state) => state.productReducer);
  const { loading, error, product } = productReducer;

  useEffect(() => {
    dispatch(productAction(id));
  }, [dispatch, id]);

  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    dispatch(addToCartAction(id, qty));
  };

  return (
    <Layout>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            fontSize: "24px",
            color: "#ffffff",
            fontWeight: "600",
          }}
        >
          <div
            style={{
              display: "inline-block",
              width: "40px",
              height: "40px",
              border: "4px solid #ffffff",
              borderTop: "4px solid transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginRight: "1rem",
            }}
          ></div>
          Loading...
          <style>
            {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
          </style>
        </div>
      ) : error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)",
            fontSize: "24px",
            color: "#ffffff",
            fontWeight: "600",
            padding: "2rem",
            margin: "2rem",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          ⚠️ {error}
        </div>
      ) : (
        <>
          <section
            style={{
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              minHeight: "100vh",
              padding: "40px 0",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    minWidth: "300px",
                    position: "relative",
                    background: "linear-gradient(45deg, #f8f9fa, #e9ecef)",
                  }}
                >
                  <img
                    alt="ecommerce"
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "contain",
                      objectPosition: "center",
                      padding: "20px",
                    }}
                    src={product.image}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      background: "rgba(255,255,255,0.9)",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.background = "#ff6b6b";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.9)";
                      e.currentTarget.style.color = "#666";
                    }}
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      style={{ width: "20px", height: "20px" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  style={{
                    flex: "1",
                    minWidth: "300px",
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(90deg, #667eea, #764ba2)",
                        color: "#ffffff",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "16px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      ${product.price}
                    </div>

                    <h1
                      style={{
                        fontSize: "36px",
                        fontWeight: "700",
                        color: "#333",
                        marginBottom: "20px",
                        lineHeight: "1.2",
                      }}
                    >
                      {product.name}
                    </h1>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "24px",
                        flexWrap: "wrap",
                        gap: "16px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            fill={i < 4 ? "#ffd93d" : "none"}
                            stroke="#ffd93d"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            style={{
                              width: "18px",
                              height: "18px",
                              marginRight: "2px",
                            }}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                        ))}
                        <span
                          style={{
                            color: "#666",
                            marginLeft: "8px",
                            fontSize: "14px",
                          }}
                        >
                          {product.numReview} Reviews
                        </span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                        }}
                      >
                        {[
                          "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                          "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                          "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
                        ].map((path, i) => (
                          <a
                            key={i}
                            style={{
                              color: "#999",
                              transition: "all 0.3s ease",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#667eea";
                              e.currentTarget.style.transform = "scale(1.2)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#999";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >
                            <svg
                              fill="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              style={{ width: "20px", height: "20px" }}
                              viewBox="0 0 24 24"
                            >
                              <path d={path}></path>
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>

                    <p
                      style={{
                        color: "#666",
                        lineHeight: "1.6",
                        fontSize: "16px",
                        marginBottom: "32px",
                      }}
                    >
                      {product.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "24px",
                        paddingBottom: "24px",
                        borderBottom: "2px solid #f0f0f0",
                        marginBottom: "24px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <span style={{ color: "#333", fontWeight: "600" }}>
                          Color
                        </span>
                        {["#ffffff", "#374151", "#667eea"].map((color, i) => (
                          <button
                            key={i}
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              border: "3px solid #e5e7eb",
                              backgroundColor: color,
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              outline: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scale(1.1)";
                              e.currentTarget.style.borderColor = "#667eea";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                              e.currentTarget.style.borderColor = "#e5e7eb";
                            }}
                          ></button>
                        ))}
                      </div>

                      {product.countInStock > 0 && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <span style={{ color: "#333", fontWeight: "600" }}>
                            Quantity
                          </span>
                          <div style={{ position: "relative" }}>
                            <select
                              value={qty}
                              onChange={(e) =>
                                setQty(parseInt(e.target.value, 10))
                              }
                              style={{
                                appearance: "none",
                                backgroundColor: "#f8f9fa",
                                border: "2px solid #e9ecef",
                                borderRadius: "8px",
                                padding: "12px 40px 12px 16px",
                                fontSize: "16px",
                                fontWeight: "600",
                                color: "#333",
                                cursor: "pointer",
                                outline: "none",
                                transition: "all 0.3s ease",
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = "#667eea";
                                e.currentTarget.style.boxShadow =
                                  "0 0 0 3px rgba(102, 126, 234, 0.1)";
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = "#e9ecef";
                                e.currentTarget.style.boxShadow = "none";
                              }}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                            <div
                              style={{
                                position: "absolute",
                                right: "12px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                pointerEvents: "none",
                                color: "#666",
                              }}
                            >
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                style={{ width: "16px", height: "16px" }}
                                viewBox="0 0 24 24"
                              >
                                <path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        background: "linear-gradient(90deg, #667eea, #764ba2)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      ${product.price}.00
                    </div>

                    {product.countInStock > 0 ? (
                      <button
                        onClick={addToCartHandler}
                        style={{
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          color: "#ffffff",
                          border: "none",
                          padding: "16px 32px",
                          borderRadius: "12px",
                          fontSize: "16px",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                          outline: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 25px rgba(102, 126, 234, 0.6)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 15px rgba(102, 126, 234, 0.4)";
                        }}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, #6c757d 0%, #495057 100%)",
                          color: "#ffffff",
                          padding: "16px 32px",
                          borderRadius: "12px",
                          fontSize: "16px",
                          fontWeight: "600",
                          cursor: "not-allowed",
                          opacity: "0.7",
                        }}
                      >
                        Unavailable
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}

export default ProductDetail;
