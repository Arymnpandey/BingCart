import CategoryList from "./Components/CategoryList";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";


function App() {
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f9253953f43b10c3.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
  ];
  const products= [
    {
      id: 1,
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/u/d/reno-11-5g-cph2599-oppo-original-imagwxdsh2zjfpdt.jpeg?q=70',
      category: 'Electronics',
      title: 'Smartphone',
      price: 50000,
    },
    {
      id: 2,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/j/c/s-ts12-vebnor-original-imagp6jcsgekgda4.jpeg?q=70',
      category: 'Clothing',
      title: "Men's T-shirt",
      price: 2000,
    },
    {
      id: 3,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-maker/k/p/b/imperial-espresso-coffee-maker-coffee-machine-15-bars-agaro-original-imagqksvpqe2fre2.jpeg?q=70',
      category: 'Home & Kitchen',
      title: 'Coffee Maker',
      price: 13500,
    },
    {
      id: 4,
      image: 'https://rukminim2.flixcart.com/image/612/612/kvtuxe80/book/z/o/l/the-great-gatsby-premium-paperback-penguin-india-original-imag8nbxyf2gxjt7.jpeg?q=70',
      category: 'Books',
      title: 'The Great Gatsby',
      price: 260,
    },
    {
      id: 5,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/e/x/z/-original-imagszajztnjvhq6.jpeg?q=70',
      category: 'Sports & Outdoors',
      title: 'Running Shoes',
      price: 1500,
    },
    {
      id: 6,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/m/x/d/-original-imagu2hd3g5hmgaz.jpeg?q=70',
      category: 'Beauty',
      title: 'Perfume',
      price: 200,
    },
    {
      id: 7,
      image: 'https://rukminim2.flixcart.com/image/612/612/k3ncakw0/living-room-chair/3/n/f/multicolor-wrought-iron-set-of-2-stylish-modern-furniture-original-imafmmu5abxvjhve.jpeg?q=70',
      category: 'Furniture',
      title: 'Modern Chair',
      price: 10000,
    },
    {
      id: 8,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/board-game/f/j/i/10-ultimate-scrabble-original-edition-hot-selling-flipkart-original-imagcdm68hba7v5s.jpeg?q=70',
      category: 'Toys & Games',
      title: 'Board Game',
      price: 1200,
    },
    {
      id: 9,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/b/r/bhr6993in-redmi-original-imagvvt2gf7npwc8.jpeg?q=70',
      category: 'Electronics',
      title: 'Wireless Earbuds',
      price: 1800,
    },
    {
      id: 10,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/3/q/t/l-htdrss7133-honky-tonky-original-imagszfhfghhs2rp.jpeg?q=70',
      category: 'Clothing',
      title: 'Women\'s Dress',
      price: 3500,
    }
    
  ];

  return (
    <>
      <Navbar />
      <CategoryList></CategoryList>
      <ImageSlider images={images} />
      <ProductSection products={products} />
      <Footer/>
     
    </>
  );
}

export default App;
