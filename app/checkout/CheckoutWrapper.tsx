"use client";
import dynamic from 'next/dynamic';

const CheckoutClient = dynamic(() => import('./CheckoutClient'), {
  ssr: false
});

export default function CheckoutWrapper() {
  return <CheckoutClient />;
} 