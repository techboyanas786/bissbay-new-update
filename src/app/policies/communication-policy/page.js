"use client";
import dynamic from 'next/dynamic';

const CommunicationPolicyContent = dynamic(() => import('./CommunicationPolicyContent'), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center h-screen">Loading...</div>
});

export default function CommunicationPolicy() {
  return <CommunicationPolicyContent />;
}
