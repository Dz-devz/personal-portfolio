import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import React from 'react';
import logo from "/logo.png"

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='p-4 text-lg flex justify-between'>
        <div>
        <img src={logo} className='w-[30px] h-[30px]' />
        </div>
        <div className='flex gap-4 mr-4'>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        </div>
      </div>
      <hr />
      <Outlet />
    </>
  ),
})