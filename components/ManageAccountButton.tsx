import { generatePortallink } from '@/actions/generatePortalLink';
import React, { FormEvent } from 'react';

function ManageAccountButton() {
  const handleManageBilling = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from submitting
    generatePortallink();
  };

  return (
    <form onSubmit={handleManageBilling}>
      <button type="submit" className="mt-8 block rounded-md bg-pink-500 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500
    cursor-pointer disabled:opacity-80 disabled:bg-pink-500/50 disabled:text-white disabled:cursor-default">Manage Billing</button>
    </form>
  );
}

export default ManageAccountButton;
