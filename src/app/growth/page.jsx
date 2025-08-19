'use client'

import { SimpleLayout } from '@/components/SimpleLayout';
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-300 p-3 rounded shadow text-sm text-gray-800">
        {data.company && <p>Company: <b>{data.company}</b></p>}
        {data.role && <p>Role: {data.role}</p>}
        {data.status && <p>Status: {data.status}</p>}
        {data.annualCTC > 0 && <p>Annual CTC: ₹{data.annualCTC.toLocaleString()}</p>}
        {data.monthlyInHand > 0 && <p>Monthly In-Hand: ₹{data.monthlyInHand.toLocaleString()}</p>}
      </div>
    );
  }

  return null;
};


export default function CareerVisualization() {
  const careerData = [
    { date: "Sep'22-May'24", role: "GATE Aspirant", annualCTC: 0, monthlyInHand: 0, status: "Study" },
    { date: "May'24-Jul'24", role: "Operations Intern", annualCTC: 144000, monthlyInHand: 10800, status: "Employed", company: "Amber Student" },
    { date: "Jul'24-Oct'24", role: "Gap", annualCTC: 0, monthlyInHand: 0, status: "Gap" },
    { date: "Oct'24-Jan'25", role: "Developer Intern", annualCTC: 180000, monthlyInHand: 13500, status: "Employed", company: "E1 Consulting" },
    { date: "Jan'25-May'25", role: "Developer", annualCTC: 260000, monthlyInHand: 19500, status: "Employed", company: "E1 Consulting" },
    { date: "Jun'25-Aug'25", role: "Junior FullStack Developer", annualCTC: 440000, monthlyInHand: 33000, status: "Employed", company: "Zethic" },
    { date: "Sep'25-Present", role: "Software Engineer", annualCTC: 800000, monthlyInHand: 63000, status: "Employed", company: "Indpro" }
  ];

  const hikesData = [
    { role: "Operations Intern", hike: 0 },
    { role: "Developer Intern", hike: 25 },
    { role: "Developer", hike: 35 },
    { role: "Junior FullStack Developer", hike: 75 },
    { role: "Software Engineer", hike: 82 },
  ];

  const [activeTab, setActiveTab] = useState('salary');

  const formatCurrency = (value) => {
    if (value === 0) return "₹0";
    return `₹${(value/100000).toFixed(1)}L`;
  };

  return (
    <SimpleLayout 
        title="Career Growth" 
        intro="Highlights of my career growth, companies that I have worked with, compensation recieved and hikes."
      >  
      <div className="flex mb-4 space-x-2 -mt-10">
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'salary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('salary')}>
          Salary Growth
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${activeTab === 'hikes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('hikes')}>
          Percentage Hikes
        </button>
      </div>
      
      {activeTab === 'salary' && (
        <div className="mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Annual CTC Progression</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={careerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={formatCurrency} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="annualCTC" stroke="#3b82f6" strokeWidth={2} name="Annual CTC" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Monthly In-Hand Salary</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={careerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="monthlyInHand" fill="#10b981" name="Monthly In-Hand" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      
      {activeTab === 'hikes' && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Salary Percentage Hikes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={hikesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" />
              <YAxis label={{ value: 'Percentage %', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => [`${value}%`, 'Hike']} />
              <Legend />
              <Bar dataKey="hike" fill="#f59e0b" name="Hike %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      
      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Career Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Career Span:</span> Sep 2022 - Present
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Current Role:</span> Software Engineer at Indpro
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Positions Held:</span> 5
            </p>
          </div>
          <div className="bg-green-50 p-3 rounded-md">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Salary Growth:</span> ₹0 → ₹8L (Annual CTC)
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Latest Monthly In-hand:</span> ₹63,000
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Highest Hike:</span> 82% (Zethic Technologies → Indpro)
            </p>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
