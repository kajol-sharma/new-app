'use client'
import { MPO_API, PRODUCT_API } from '../../api/api.js';
import { dataFetch } from '../../helper/productFetch.js';
import React, { useEffect, useState } from 'react';
import { useCart } from '../../components/CartContext.jsx';
import CartBar from '../cartBar/page.jsx';
import Loader from '../../components/Loader.jsx';

const PunnyadharaProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();

    useEffect(() => {
        async function productData() {
            setLoading(true)
            try {
                const mappingData = await dataFetch(MPO_API, {
                    device_id: 'b7b8dcd9-b6c0-4b07-aba2-1004',
                    machine_id: 1004,
                    machine_type: 'vm',
                    mapping_date: '2025-10-27',
                });

                const productIds = mappingData?.map(item => item.product_id);

                if (productIds?.length > 0) {
                    const productData = await dataFetch(PRODUCT_API, {
                        "device_id": "qwef4323fe-ert",
                        "product_id": productIds
                    });

                    setProducts(productData)
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }

        }

        productData();
    }, []);

    return (
        <>
            <div className="bg-gray-50 py-10 px-4">
                <h1 className="text-2xl font-bold text-[var(--color-main)] mb-6 text-center">
                    Products
                </h1>

                {loading ? (
                    <Loader />
                ) : (
                    <div className="flex flex-wrap justify-center gap-3">
                        {products.length > 0 ? (
                            products.map((product) => {
                                const category = product.category?.toLowerCase?.() || '';
                                const isBottle = category.includes('bottle');
                                const isNamkeen = category.includes('namkeen');
                                const unitLabel = isBottle ? 'ml' : isNamkeen ? 'g' : '';

                                const cartItem = cart.find(
                                    (item) => item.product_id === product.product_id
                                );

                                return (
                                    <div
                                        key={product.product_id}
                                        className="bg-white rounded-xl shadow-md p-3 flex flex-col hover:shadow-lg transition-all w-[48%] sm:w-[30%] md:w-[15%]"
                                    >
                                        <div className="w-full h-auto mb-3">
                                            <img
                                                src={product.image || '/punnyadhara.jpeg'}
                                                alt={product.product_name}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        </div>

                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-[1.4px] border-green-700 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                                                </div>
                                                {product.volume && (
                                                    <p className="text-xs font-bold">
                                                        {product.volume} {unitLabel}
                                                    </p>
                                                )}
                                            </div>

                                            {cartItem ? (
                                                <div className="flex items-center gap-2 bg-green-700 text-white font-bold rounded-sm text-xs py-1">
                                                    <button
                                                        onClick={() =>
                                                            decreaseQuantity(product.product_id)
                                                        }
                                                        className="px-2 rounded cursor-pointer"
                                                    >
                                                        –
                                                    </button>
                                                    <span >{cartItem.quantity}</span>
                                                    <button
                                                        onClick={() =>
                                                            increaseQuantity(product.product_id)
                                                        }
                                                        className="px-2 rounded cursor-pointer"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        addToCart({
                                                            ...product,
                                                            product_id: product.product_id,
                                                            pd_price: product.pd_price,
                                                        })
                                                    }
                                                    className="bg-white text-green-700 text-xs font-bold px-3 py-1 border rounded hover:bg-green-700 hover:text-white transition cursor-pointer"
                                                >
                                                    Add
                                                </button>
                                            )}
                                        </div>

                                        <h2 className="text-sm font-semibold mb-2">
                                            {product.product_name}
                                        </h2>

                                        <div className="flex items-center gap-2">
                                            {product.mrp && (
                                                <p className="text-sm font-bold line-through">
                                                    ₹{product.mrp}
                                                </p>
                                            )}
                                            <p className="text-xl font-bold text-[var(--color-main)]">
                                                ₹{product.pd_price}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="text-center text-gray-500">No products available.</p>
                        )}
                    </div>
                )}
            </div>

            <CartBar />
        </>
    );
};

export default PunnyadharaProducts;