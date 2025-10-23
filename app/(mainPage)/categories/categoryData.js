const categories = [
    {
        "id": 1,
        "name": "Grocery",
        "description": "Fresh fruits, vegetables, and daily essentials.",
        "image": "https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg",
        "products": [
            {
                "id": 101,
                "name": "Organic Apples (1kg)",
                "price": 189,
                "discount_price": 159,
                "image": "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg"
            },
            {
                "id": 102,
                "name": "Aashirvaad Atta (5kg)",
                "price": 285,
                "discount_price": 260,
                "image": "https://images.pexels.com/photos/158603/wheat-wheat-field-cereals-field-158603.jpeg"
            },
            {
                "id": 103,
                "name": "Fortune Sunflower Oil (1L)",
                "price": 165,
                "discount_price": 155,
                "image": "https://images.pexels.com/photos/12284682/pexels-photo-12284682.jpeg"
            }
        ]
    },
    {
        "id": 2,
        "name": "Electronics",
        "description": "Mobiles, TVs, headphones and gadgets.",
        "image": "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
        "products": [
            {
                "id": 201,
                "name": "iPhone 15 Pro",
                "price": 149999,
                "discount_price": 139999,
                "image": "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg"
            },
            {
                "id": 202,
                "name": "Sony WH-1000XM5 Headphones",
                "price": 29999,
                "discount_price": 25999,
                "image": "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg"
            },
            {
                "id": 203,
                "name": "Samsung 55” 4K Smart TV",
                "price": 67999,
                "discount_price": 59999,
                "image": "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg"
            }
        ]
    },
    {
        "id": 3,
        "name": "Fashion",
        "description": "Trendy clothes, shoes, and accessories for all.",
        "image": "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg",
        "products": [
            {
                "id": 301,
                "name": "Men’s Cotton T-Shirt",
                "price": 799,
                "discount_price": 499,
                "image": "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
            },
            {
                "id": 302,
                "name": "Women’s Denim Jacket",
                "price": 1899,
                "discount_price": 1499,
                "image": "https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg"
            },
            {
                "id": 303,
                "name": "Nike Running Shoes",
                "price": 4999,
                "discount_price": 4499,
                "image": "https://images.pexels.com/photos/19090/pexels-photo.jpg"
            }
        ]
    },
    {
        "id": 4,
        "name": "Home & Kitchen",
        "description": "Cookware, decor, and home appliances.",
        "image": "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg",
        "products": [
            {
                "id": 401,
                "name": "Prestige Pressure Cooker 3L",
                "price": 2199,
                "discount_price": 1799,
                "image": "https://imgs.search.brave.com/_3DRDWDhEYHOlynm_Mntv5W0Pvo4zMR_p99EaCkRmZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/Nzc4Ni9wZXhlbHMt/cGhvdG8tMjY5Nzc4/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            },
            {
                "id": 402,
                "name": "Philips Mixer Grinder",
                "price": 3999,
                "discount_price": 3299,
                "image": "https://imgs.search.brave.com/_3DRDWDhEYHOlynm_Mntv5W0Pvo4zMR_p99EaCkRmZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/Nzc4Ni9wZXhlbHMt/cGhvdG8tMjY5Nzc4/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            },
            {
                "id": 403,
                "name": "Bedsheet Set (Queen Size)",
                "price": 1299,
                "discount_price": 999,
                "image": "https://imgs.search.brave.com/_3DRDWDhEYHOlynm_Mntv5W0Pvo4zMR_p99EaCkRmZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/Nzc4Ni9wZXhlbHMt/cGhvdG8tMjY5Nzc4/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            }
        ]
    },
    {
        "id": 5,
        "name": "Books",
        "description": "Explore fiction, non-fiction, and educational books.",
        "image": "https://images.pexels.com/photos/45717/pexels-photo-45717.jpeg",
        "products": [
            {
                "id": 501,
                "name": "Atomic Habits - James Clear",
                "price": 499,
                "discount_price": 399,
                "image": "https://imgs.search.brave.com/_3DRDWDhEYHOlynm_Mntv5W0Pvo4zMR_p99EaCkRmZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/Nzc4Ni9wZXhlbHMt/cGhvdG8tMjY5Nzc4/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            },
            {
                "id": 502,
                "name": "Ikigai - The Japanese Secret to a Long Life",
                "price": 599,
                "discount_price": 449,
                "image": "https://imgs.search.brave.com/_3DRDWDhEYHOlynm_Mntv5W0Pvo4zMR_p99EaCkRmZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/Nzc4Ni9wZXhlbHMt/cGhvdG8tMjY5Nzc4/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            },
            {
                "id": 503,
                "name": "Harry Potter and the Philosopher’s Stone",
                "price": 699,
                "discount_price": 549,
                "image": "https://imgs.search.brave.com/_3DRDWDhEYHOlynm_Mntv5W0Pvo4zMR_p99EaCkRmZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/Nzc4Ni9wZXhlbHMt/cGhvdG8tMjY5Nzc4/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            }
        ]
    },
    {
        "id": 6,
        "name": "Beauty & Personal Care",
        "description": "Skincare, haircare, and beauty essentials.",
        "image": "https://images.pexels.com/photos/3866556/pexels-photo-3866556.png",
        "products": [
            {
                "id": 601,
                "name": "Dove Moisturizing Body Wash",
                "price": 299,
                "discount_price": 259,
                "image": "https://imgs.search.brave.com/_3DRDWDhEYHOlynm_Mntv5W0Pvo4zMR_p99EaCkRmZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/Nzc4Ni9wZXhlbHMt/cGhvdG8tMjY5Nzc4/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            },
            {
                "id": 602,
                "name": "L’Oreal Paris Shampoo 650ml",
                "price": 599,
                "discount_price": 499,
                "image": "https://imgs.search.brave.com/_3DRDWDhEYHOlynm_Mntv5W0Pvo4zMR_p99EaCkRmZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/Nzc4Ni9wZXhlbHMt/cGhvdG8tMjY5Nzc4/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            },
            {
                "id": 603,
                "name": "Nivea Men Face Wash",
                "price": 249,
                "discount_price": 219,
                "image": "https://imgs.search.brave.com/_3DRDWDhEYHOlynm_Mntv5W0Pvo4zMR_p99EaCkRmZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/Nzc4Ni9wZXhlbHMt/cGhvdG8tMjY5Nzc4/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            }
        ]
    }
]

export default categories;