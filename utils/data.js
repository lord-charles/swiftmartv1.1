import gift from "public/images/gift.png";
import shipping from "public/images/service.png";
import price from "public/images/price.png";
import payment from "public/images/securepay.png";
import cs from "public/images/customerservice1.png";

export const services = [
  {
    id: 1,
    title: "Free Shipping",
    Description: "From all orders over ksh5,000",
    icon: shipping,
  },
  {
    id: 2,
    title: "Daily Surprise Offers",
    Description: "Save up to 25% off",
    icon: gift,
  },
  {
    id: 4,
    title: "Support 24/7 ",
    Description: "shop with an expert",
    icon: cs,
  },
  {
    id: 4,
    title: "Affortable Prices",
    Description: "Get Factory direct price",
    icon: price,
  },
  {
    id: 5,
    title: "Secure Payments",
    Description: "100% protected payments",
    icon: payment,
  },
];

export const products = [
  {
    name: "s7 huawei",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "headset",
    images: [
      { image: "/images/headphones_a_3.webp" },
      { image: "/images/earphones_b_3.webp" },
    ],
    price: 3700,
    rating: 5.5,
    numReviews: 158,
    countInStock: 520,
    description: " bass boosted headphones 2023",
  },
  {
    name: "s17 sony",
    brand: "headphone",
    slug: "black_customized_-headset_2024",
    category: "headset",
    images: [
      { image: "/images/headphones_a_3.webp" },
      { image: "/images/earphones_b_3.webp" },
    ],
    price: 3799,
    rating: 8,
    numReviews: 318,
    countInStock: 230,
    description: "bass boosted headphones 2023",
  },
  {
    name: "s7 sony",
    brand: "headphone",
    slug: "white_new2023_headphones.",
    category: "headset",
    images: [
      { image: "/images/headphones_a_3.webp" },
      { image: "/images/earphones_b_3.webp" },
    ],
    price: 4800,
    prevPrice: 6780.97,

    rating: 8.5,
    numReviews: 184,
    countInStock: 456,
    description: "bass boosted headphones 2023",
  },
  {
    name: "si7 samsung",
    brand: "headphone",
    slug: "flexible_headphones.,.",
    category: "headset",
    images: [
      { image: "/images/headphones_a_3.webp" },
      { image: "/images/earphones_b_3.webp" },
    ],
    price: 3350,
    prevPrice: 0,
    rating: 3.5,
    numReviews: 148,
    countInStock: 240,
    description: "customizable filtered sound by samsung",
  },

  {
    name: "s16 series",
    brand: "headphone",
    slug: "white_foldable.",
    category: "headset",
    images: [
      { image: "/images/headphones_a_3.webp" },
      { image: "/images/earphones_b_3.webp" },
    ],
    price: 3300,
    prevPrice: 5400.86,

    rating: 4.5,
    numReviews: 418,
    countInStock: 4420,
    description: "customizable filtered sound by samsung",
  },
  {
    name: "si7 samsung",
    brand: "headphone",
    slug: "flexible_headphones.,.",
    category: "headset",
    images: [
      { image: "/images/headphones_a_3.webp" },
      { image: "/images/earphones_b_3.webp" },
    ],
    price: 3350,
    prevPrice: 0,
    rating: 3.5,
    numReviews: 148,
    countInStock: 240,
    description: "customizable filtered sound by samsung",
  },
  {
    name: "si7 samsung",
    brand: "headphone",
    slug: "flexible_headphones.,.",
    category: "headset",
    images: [
      { image: "/images/headphones_a_3.webp" },
      { image: "/images/earphones_b_3.webp" },
    ],
    price: 3350,
    prevPrice: 0,
    rating: 3.5,
    numReviews: 148,
    countInStock: 240,
    description: "customizable filtered sound by samsung",
  },
  {
    name: "si7 samsung",
    brand: "headphone",
    slug: "flexible_headphones.,.",
    category: "headset",
    images: [
      { image: "/images/headphones_a_3.webp" },
      { image: "/images/earphones_b_3.webp" },
    ],
    price: 3350,
    prevPrice: 0,
    rating: 3.5,
    numReviews: 148,
    countInStock: 240,
    description: "customizable filtered sound by samsung",
  },
];

export const famousProducts = [
  {
    name: "Smart watch series 7",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "Big screen",
    images: "/images/famous-1.webp",
    price: 3700,
    rating: 5.5,
    numReviews: 158,
    countInStock: 520,
    description: "From ksh1399 or ksh160/mo for 24months",
  },
  {
    name: "600 nits of brightness",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "studio display",
    images: "/images/famous-2.webp",
    price: 3700,
    rating: 5.5,
    numReviews: 158,
    countInStock: 520,
    description: " 27-inch 5k Retina display",
  },
  {
    name: "smartphone 13 pro",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "smartphones",
    images: "/images/famous-3.webp",
    price: 3700,
    rating: 5.5,
    numReviews: 158,
    countInStock: 520,
    description:
      "Now in Green. From ksh112,399 or ksh16,290/mo for 24months Footnote*",
  },
  {
    name: "Room-filling sound",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "home speakers",
    images: "/images/famous-4.webp",
    price: 3700,
    rating: 5.5,
    numReviews: 158,
    countInStock: 520,
    description: "From ksh12,399 or ksh1,290/mo for 12months",
  },
];

export const specialProducts = [
  {
    name: "Speaker",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "studio display",
    images: [
      { image: "/images/speaker2.webp" },

      { image: "/images/speaker1.webp" },

      { image: "/images/speaker4.webp" },

      { image: "/images/speaker.jpg" },
      { image: "/images/speaker3.webp" },
    ],
    price: 3700,
    prevPrice: 4804.94,
    rating: 5.5,
    numReviews: 158,
    countInStock: 320,
    description: "Beoplay A1 portable Bluetooth Speaker with ...",
  },
  {
    name: "Tablet",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "studio display",
    images: [
      { image: "/images/tab.jpg" },
      { image: "/images/tab1.jpg" },
      { image: "/images/tab2.jpg" },
      { image: "/images/tab3.jpg" },
    ],
    price: 13700,
    prevPrice: 15604.34,
    rating: 5.5,
    numReviews: 158,
    countInStock: 720,
    description: "Samsung Galaxy Tab A SM-T295, 4G",
  },
  {
    name: "Canon",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "studio display",
    images: [
      { image: "/images/camera2.2.png" },
      { image: "/images/camera1.2.png" },
      { image: "/images/camera1.3.png" },
    ],
    price: 23700,
    prevPrice: 0,
    rating: 5.5,
    numReviews: 158,
    countInStock: 60,
    description: "Hero session action camera with 320MP..",
  },
  {
    name: "Oraimo",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "studio display",
    images: [
      { image: "/images/earphones_a_2.webp" },
      { image: "/images/earphones_a_3.webp" },
      { image: "/images/earphones_a_4.webp" },
    ],
    price: 300,
    prevPrice: 804.94,
    rating: 5.5,
    numReviews: 158,
    countInStock: 520,
    description: "filtered bass & quality sound",
  },
  {
    name: "Nikon",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "studio display",
    images: [
      { image: "/images/camera2.1.png" },
      { image: "/images/cam1.1.png" },
    ],
    price: 43700,
    prevPrice: 0,
    rating: 5.5,
    numReviews: 158,
    countInStock: 520,
    description: "Hero session action camera with 420MP..",
  },
  {
    name: "Sony",
    brand: "headphone",
    slug: "hybrid_headset",
    category: "studio display",
    images: [
      { image: "/images/headphones_c_3.webp" },
      { image: "/images/headphones_b_2.webp" },
      { image: "/images/headphones_b_4.webp" },
      { image: "/images/headphones_c_2.webp" },
    ],
    price: 1700,
    prevPrice: 3404.94,
    rating: 5.5,
    numReviews: 158,
    countInStock: 520,
    description: "filtered bass & quality sound",
  },
];

export const blogs = [
  {
    image: "/images/valentive.jpg",
    date: "2022-02-14",
    description:
      "How to Choose the Perfect Valentine's Day Gift for Your Partner",
    richDescription:
      "Valentine's Day is just around the corner, and if you're still looking for the perfect gift for your partner, we've got you covered. In this blog post, we'll share our top tips for choosing a thoughtful and meaningful gift that your partner will love. From personalized jewelry to romantic getaways, we'll help you find the perfect way to show your love this Valentine's Day.",
  },
  {
    image: "/images/kitchengadgets.jpg",
    date: "2022-04-01",
    description: "The Top 10 Kitchen Gadgets Every Home Chef Needs",
    richDescription:
      "Are you a home chef looking to up your cooking game? In this blog post, we'll share our top 10 kitchen gadgets that every home chef needs. From high-quality knives to sous vide machines, these tools will help you cook like a pro and impress your dinner guests.",
  },
  {
    image: "/images/blog-3.webp",
    date: "2022-06-21",
    description: "How to Build a Successful Online Store: Tips from the Pros",
    richDescription:
      "If you're thinking of starting an online store, you're not alone. Ecommerce is a growing industry, and there are plenty of opportunities to succeed. In this blog post, we'll share tips and advice from successful ecommerce entrepreneurs to help you build a successful online store. From choosing the right platform to marketing your products effectively, we'll cover everything you need to know.",
  },
  {
    image: "/images/skincare.jpg",
    date: "2022-08-15",
    description:
      "The Benefits of Natural Skincare: Why You Should Switch Today",
    richDescription:
      "Are you tired of using harsh chemical skincare products that irritate your skin? Switching to natural skincare could be the solution you're looking for. In this blog post, we'll explore the benefits of natural skincare and share some of our favorite natural skincare products. From reducing inflammation to promoting healthy aging, natural skincare has a lot to offer.",
  },
  {
    image: "/images/kids.jpg",
    date: "2022-10-31",
    description: "The Ultimate Guide to Halloween Costumes for Kids",
    richDescription:
      "Halloween is one of the most exciting holidays for kids, and choosing the perfect costume is a big part of the fun. In this blog post, we'll share our ultimate guide to Halloween costumes for kids. From classic costumes like witches and ghosts to trendy options like superheroes and unicorns, we've got you covered.",
  },
  {
    image: "/images/christmas.jpg",
    date: "2022-12-25",
    description:
      "10 Last-Minute Christmas Gift Ideas for Everyone on Your List",
    richDescription:
      "Christmas is just around the corner, and if you're still looking for the perfect gift for someone on your list, don't panic. In this blog post, we'll share 10 last-minute Christmas gift ideas that are sure to please everyone. From cozy blankets to gourmet chocolates, these gifts are thoughtful, affordable, and easy to find at the last minute.",
  },
];
