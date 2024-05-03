import Card from "../Components/Card";
import { data } from "../data/data";
const Home = () => {
  return (
    <section>
      <h2 className="product-heading">All Products</h2>
      <div className="card-container">
        <Card products={data} />
      </div>
    </section>
  );
};

export default Home;
