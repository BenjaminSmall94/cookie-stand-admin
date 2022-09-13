import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieForm from '../components/CookieForm';
import CookieReport from '../components/CookieReport';
import { state, useState } from 'react'
import useResource from '../hooks/useResource'


export default function CookieStandAdmin({ user, logout }) {

  const [stands, setLastStand] = useState([]);
  const { resources, loading, createResource, deleteResource } = useResource();

  function handleCreate(e) {
    e.preventDefault();
    const standData = {
      location: e.target.location.value,
      minCustomers: parseInt(e.target.min_cust.value),
      maxCustomers: parseInt(e.target.max_cust.value),
      avgCookies: parseFloat(e.target.avg_cookies.value),
      owner: user.id
    };
    const hourly_sales = [];
    for (let i = 0; i < 14; i++) {
      let rand_customers = Math.random() * (standData.maxCustomers - standData.minCustomers + 1) + standData.minCustomers;
      hourly_sales.push(Math.round(Math.floor(rand_customers) * standData.avgCookies));
    }
    standData.hourly_sales = hourly_sales;
    createResource(standData);
    e.target.reset();
  }

  return (
    <div className='bg-green-100 min-w-max'>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header user={user.username} logout={logout} />
      <main>
        <CookieForm onSubmit={handleCreate} />
        <CookieReport stands={resources} loading={loading} onDelete={deleteResource} />
      </main>
      <Footer storeCount={stands.length} />
    </div>
  );
}