import { useRouter } from 'next/router';
import axios from 'axios';



const GetOneProduct = () => {
  const router = useRouter();
  const { el } = router.query;

  const deleteProduct = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/api/products/${el.id}`);
        router.push('/admin');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  if (!el) return <div>Loading...</div>;

  return (
    <div>
      <h2>{el.name}</h2>
      <img src={el.imgUrl} alt={el.name} />
      <h2>{el.category}</h2>
      <h2>{el.price}</h2>
      <h2>{el.condition}</h2>
      <button onClick={deleteProduct}>Delete</button>
      <button onClick={() => router.push('/admin')}>Back to Admin Page</button>
    </div>
  );
};

export default GetOneProduct;
