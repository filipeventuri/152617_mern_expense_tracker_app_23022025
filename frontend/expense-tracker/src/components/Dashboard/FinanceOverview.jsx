import React from "react";
import CustomPieChart from "../charts/CustomPieChart";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

  const balanceData = [
    { name: "Balanço total", amount: totalBalance },
    { name: "Gasto total", amount: totalExpense },
    { name: "Renda total", amount: totalIncome },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg">Visão geral</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Balanço total"
        totalAmount={`R$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
