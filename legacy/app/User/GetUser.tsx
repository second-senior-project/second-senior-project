import { useRouter } from 'next/router';

const GetUsers = ({ datauser }) => {
  const router = useRouter();

  return (
    <>
      <div>
        <button onClick={() => router.push('/admin')}>
          Back to Admin Page
        </button>
      </div>
      {datauser.map((el) => (
        <div key={el.id}>
          <h2
            onClick={() =>
              router.push('/oneuser', { query: { id: el.id } })
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

export default GetUsers;
