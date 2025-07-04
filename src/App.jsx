import { NumericFormat } from "react-number-format";
import Header from "./components/header";
import Profile from "./components/profile";
import { useState } from "react";
import { Tooltip, ResponsiveContainer, PieChart, Pie,Cell } from "recharts";

export default function App() {
  const [salary, setSalary] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({ name: "", value: "" })


  function addExpense(e) {
    e.preventDefault()
    setExpenses(prev => ([...prev, { name: expense.name, value: Number(expense.value.substring(1)) }]))
    setExpense({ name: "", value: "" })
  }
  const COLORS = ["#34D399","#F87171", "#FBBF24", "#60A5FA", "#A78BFA", "#4ADE80"]; 
  const totalExpenses = expenses.reduce((sum, item) => sum + item.value, 0);
  const numericSalary = Number(salary.substring(1)); 
  const savings = Math.max(numericSalary - totalExpenses, 0); 

  const chartData = [{ name: "Remaining", value: savings },...expenses];



  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-200 to-pink-200 py-10 px-4">
        <div className="text-center mb-10 text-3xl font-bold text-gray-800">
          <Profile />
          <p>Ready to Track Your Finances?</p>
        </div>

        <form className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-8 justify-center ">
          {/* Salary Input */}
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label className="text-lg text-center font-medium text-gray-700">Monthly Salary</label>
            <NumericFormat
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              displayType="input"
              valueIsNumericString={true}
              prefix="₹"
              placeholder="₹ Enter your salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          {/* Expenses Input */}
          <div className="flex items-center flex-col gap-2 w-full md:w-1/2">
            <label className="text-lg font-medium text-gray-700">Expenses</label>
            <input
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter the name of the Expense"
              value={expense.name}
              onChange={(e) => setExpense((prev) => ({ ...prev, name: e.target.value }))}

            />
            <NumericFormat
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              displayType="input"
              valueIsNumericString={true}
              prefix="₹"
              placeholder="₹ Enter amount"
              value={expense.value}
              onChange={(e) => setExpense((prev) => ({ ...prev, value: e.target.value }))}
            />
            <button
              className="w-40 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl transition shadow-md"
              onClick={addExpense}
            >Add Expense</button>
          </div>
        </form>
        {/* TABLE */}
        {expenses.length > 0 && (
          <div className="max-w-4xl mx-auto mt-10 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Expenses</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="text-left bg-indigo-100 text-gray-700 font-medium">
                    <th className="px-4 py-2 border-b">#</th>
                    <th className="px-4 py-2 border-b">Expense Name</th>
                    <th className="px-4 py-2 border-b">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((item, index) => (
                    <tr key={index} className="hover:bg-indigo-50">
                      <td className="px-4 py-2 border-b">{index + 1}</td>
                      <td className="px-4 py-2 border-b">{item.name}</td>
                      <td className="px-4 py-2 border-b text-red-600 font-semibold">
                        ₹{item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      { salary &&
        <div className="max-w-4xl mx-auto mt-10 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Spending vs Savings</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                dataKey="value"
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(2)}%`
                }
              >{chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
                </Pie>
              <Tooltip
                formatter={(value) => `₹${Number(value).toLocaleString("en-IN")}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>}


      </div>


    </>
  );
}
