"use client";

import { useEffect, useState } from "react";

import { getDashboardData } from "@/src/services/api";
import { DashboardResponse } from "@/src/types/portfolio";

import SectorCard from "@/src/components/SectorCard";
import PortfolioTable from "@/src/components/PortfolioTable";
import SectorChart from "@/src/components/SectorChart";
import PortfolioSummary from "@/src/components/PortfolioSummary";
import LoadingSpinner from "@/src/components/LoadingSpinner";

export default function DashboardPage() {

  const [data, setData] = useState<DashboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 🔄 Load Dashboard Data
  const loadData = async () => {
    try {
      setError(null);
      const res = await getDashboardData();
      setData(res);
    } catch (err) {
      console.error("Dashboard Load Error:", err);
      setError("Failed to load dashboard data");
    }
  };

  // ⏱ Auto Refresh Every 15 sec
  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // ⏳ Loading UI
  if (!data && !error) return <LoadingSpinner />;

  // ❌ Full Error Screen (Only if NO data at all)
  if (error && !data)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-xl font-semibold text-red-600">
            {error}
          </h2>

          <button
            onClick={loadData}
            className="mt-6 px-5 py-2.5 bg-black text-white rounded-xl hover:opacity-90 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 Page Title */}
        <h1 className="text-3xl font-bold mb-8">
          Portfolio Dashboard
        </h1>

        {/* ⚠ Soft Error Banner (If partial error but data exists) */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
            {error}
          </div>
        )}

        {/* 📊 Summary Cards */}
        {data && <PortfolioSummary sectors={data.sectors} />}

        {/* 📈 Sector Chart */}
        {data && <SectorChart data={data.sectors} />}

        {/* 📋 Sector Tables */}
        {data && data.sectors.map((sector) => (
          <div key={sector.sectorName} className="mb-10">
            <SectorCard sector={sector} />
            <PortfolioTable stocks={sector.stocks} />
          </div>
        ))}

      </div>

    </div>
  );
}
