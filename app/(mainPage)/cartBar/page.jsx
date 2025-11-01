'use client';
import React from 'react';
import { useCart } from '../../components/CartContext';

const CartBar = () => {
    const { totalItems } = useCart();

    if (totalItems === 0) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[var(--color-main)] text-white flex justify-between items-center px-5 py-3 shadow-lg rounded-t-xl z-50">
            <p className="text-sm font-semibold">
                {totalItems} item{totalItems > 1 ? 's' : ''} selected
            </p>

            <button
                className="text-sm font-bold flex items-center gap-1"
            >
                View Cart <span className="text-lg">{'>'}</span>
            </button>
        </div>
    );
};

export default CartBar;
