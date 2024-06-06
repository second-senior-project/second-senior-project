import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Page from '../product/Page';
import AllPage from '../seller/AllPage';
import GetUser from '../User/GetUser';
import NavBar from '../NavBar/NavBar';
import './admin.css';

const Admin = () => {
  const router = useRouter();
  const [dataprodact, setdataprodact] = useState([]);
  const [datauser, setdatauser] = useState([]);
  const [dataseller, setdataseller] = useState([]);
  const [selectedTab, setSelectedTab] = useState('product'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get('http://localhost:4000/api/products');
        const usersResponse = await axios.get('http://localhost:4000/api/users/users');
        const sellersResponse = await axios.get('http://localhost:4000/api/seller/seller');

        setdataprodact(productsResponse.data);
        setdatauser(usersResponse.data);
        setdataseller(sellersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const navigateToAdmin = () => {
    router.push('/admin');
  };

  return (
    <div>
      <NavBar />
      <div id="admin">
        <div className="container-admin">
          <div className="sidenav-admin">
            <button onClick={() => handleTabClick('product')}>Products</button> 
            <button onClick={() => handleTabClick('user')}>Users</button> 
            <button onClick={() => handleTabClick('seller')}>Sellers</button> 
          </div>
          <div className="content-admin">
            {selectedTab === 'product' && (
              <Page dataprodact={dataprodact} />
            )}
            {selectedTab === 'user' && (
              <GetUser datauser={datauser} />
            )}
            {selectedTab === 'seller' && (
              <AllPage dataseller={dataseller} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
