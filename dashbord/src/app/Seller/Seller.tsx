import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

const AllSeller = ({data}) => {
  const router=useRouter()
  const deleteSeller = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this seller?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:4000/api/seller/seller/${data.id}`)
        .then(() => {
          router.push("/User");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="divide-x overflow-hidden rounded-lg shadow-lg mt-9 ml-4 mr-4">

    <table className="divide-x divide-gray-200 w-full">
    <thead  className="divide-y divide-gray-200" >
      <tr >
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">{data.username}</td>
        <td className="px-6 py-4 whitespace-nowrap">{data.email}</td>
        <td className="px-6 py-4 whitespace-nowrap">{data.role}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
          onClick={()=>router.push('./Edit')}
          >Edit</button>
          <button
            className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
            onClick={deleteSeller}
            >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
            </div>
  )
}

export default AllSeller