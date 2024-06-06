import { useRouter } from 'next/router';
import AdminNavbar from '../NavBar/NavBar';


const GetSellers = ({ dataseller }) => {
  const router = useRouter();

  return (
    <>
      <div>
        <button onClick={() => router.push('/admin')}>
          Back to Admin Page
        </button>
      </div>
      {dataseller.map((el) => (
        <div key={el.id}>
          <h2
            onClick={() =>
              router.push('/oneseller', { query: { id: el.id } })
            }
            style={{ cursor: 'pointer' }}
          >
            {el.username}
          </h2>
        </div>
      ))}
    </>
  );
};

export default GetSellers;
