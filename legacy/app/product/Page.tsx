import { useRouter } from 'next/router';

const GetProducts = ({ dataprodact }) => {
  const router = useRouter();

  return (
    <>
      <div>
        <button onClick={() => router.push('/admin')}>
          Back to Admin Page
        </button>
      </div>
      {dataprodact.map((el) => (
        <div key={el.id}>
          <h2
            onClick={() =>
              router.push('/oneprodact', { query: { id: el.id } })
            }
            style={{ cursor: 'pointer' }}
          >
            {el.name}
          </h2>
        </div>
      ))}
    </>
  );
};

export default GetProducts;
