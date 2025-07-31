import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

const About = () => {
  // Data for visualizations
  const marketShareData = [
    { name: "Fashion", value: 35 },
    { name: "Electronics", value: 25 },
    { name: "Groceries", value: 20 },
    { name: "Appliances", value: 12 },
    { name: "Others", value: 8 },
  ];
  
  const growthData = [
    { year: "2022", sales: 12 },
    { year: "2023", sales: 15 },
    { year: "2024", sales: 17 },
    { year: "2025", sales: 20 },
  ];
  
  const cityData = [
    { name: "Tier 1", value: 70 },
    { name: "Tier 2 & 3", value: 30 },
  ];
  
  const impactData = [
    { name: "GMV Growth", value: 20 },
    { name: "Market Share", value: 30 },
    { name: "Retention", value: 25 },
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF"];
  const CITY_COLORS = ["#4F46E5", "#10B981"];
  const IMPACT_COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center p-6 py-12">
      <motion.div
        className="w-full max-w-4xl bg-white p-8 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header with animated elements */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-gray-800 mb-4 leading-tight"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            The <span className="text-blue-600">Untapped Potential</span> of Heavy Electrical Appliances in Indian E-Commerce
          </motion.h1>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-600 mb-6">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gray-200 rounded-full p-2 mr-2">👤</span>
              <span>Santoshkumar Ennayal</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="bg-gray-200 rounded-full p-2 mr-2">📅</span>
              <span>16/02/25</span>
            </motion.div>
          </div>
          
          <motion.div 
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </motion.div>

        {/* Executive Summary */}
        <motion.section 
          className="mb-12 p-6 bg-blue-50 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-500 text-white p-2 rounded-lg mr-3">📊</span>
            Executive Summary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed">
                While Indian e-commerce has exploded in categories like fashion (35%) and electronics (25%), 
                <span className="font-bold text-blue-600"> heavy appliances remain significantly underutilized at just 12% market share</span>.
                
                <br /><br />
                
                With current growth trends and improving infrastructure, this sector is projected to 
                <span className="font-bold"> grow to 15-20% by 2025</span>, representing a 
                <span className="font-bold text-green-600"> ₹1.2 trillion opportunity</span>.
              </p>
            </div>
            
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </motion.section>

        {/* Market Landscape */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-purple-500 text-white p-2 rounded-lg mr-3">🏙️</span>
            Market Landscape
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Heavy appliances currently contribute <span className="font-bold">8-12% of e-commerce sales</span>, 
                with festive seasons driving significant spikes - Amazon alone sold 
                <span className="font-bold text-purple-600"> 1.5 million appliances</span> during its 2022 festival sale.
              </p>
              
              <div className="space-y-4 mt-6">
                <motion.div 
                  className="flex items-start p-4 bg-purple-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <span className="text-xl mr-3">🏙️</span>
                  <div>
                    <h3 className="font-semibold">Urban Dominance</h3>
                    <p className="text-gray-600">70% of sales come from Tier 1 cities due to better logistics and purchasing power</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start p-4 bg-green-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <span className="text-xl mr-3">🌾</span>
                  <div>
                    <h3 className="font-semibold">Rural Growth</h3>
                    <p className="text-gray-600">30% YoY increase driven by financing options and improved logistics</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-3 text-center">Sales Distribution</h3>
                <ResponsiveContainer width="100%" height={150}>
                  <PieChart>
                    <Pie
                      data={cityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {cityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={CITY_COLORS[index % CITY_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-3 text-center">Projected Growth (2022-2025)</h3>
                <ResponsiveContainer width="100%" height={150}>
                  <BarChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis unit="%" />
                    <Tooltip />
                    <Bar 
                      dataKey="sales" 
                      name="Market Share" 
                      fill="#4F46E5"
                      animationBegin={100}
                      animationDuration={1500}
                    >
                      {growthData.map((entry, index) => (
                        <motion.rect
                          key={`bar-${index}`}
                          fill="#4F46E5"
                          initial={{ height: 0 }}
                          animate={{ height: "100%" }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Heavy Appliances Matter */}
        <motion.section 
          className="mb-12 p-6 bg-green-50 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-500 text-white p-2 rounded-lg mr-3">🚀</span>
            Why Heavy Appliances Deserve More Attention
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: "📈", 
                title: "Smarter Appliances", 
                content: "25% CAGR growth in smart TVs, inverter ACs, and IoT-enabled appliances" 
              },
              { 
                icon: "🌍", 
                title: "Tier 2 & 3 Growth", 
                content: "60% of India's internet users come from smaller towns" 
              },
              { 
                icon: "💳", 
                title: "Financing Power", 
                content: "No Cost EMI and trade-in offers driving 35% more purchases" 
              },
              { 
                icon: "🚚", 
                title: "Logistics Revolution", 
                content: "Delivery times reduced by 40% since 2020" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-lg shadow-sm flex items-start"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <span className="text-2xl mr-4">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-yellow-500 text-white p-2 rounded-lg mr-3">⚠️</span>
            Challenges & Strategic Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🚚",
                title: "High Delivery Costs",
                solution: "Partner with local logistics providers + AI route optimization",
                impact: "Reduces costs by 30%"
              },
              {
                icon: "💰",
                title: "Customer Hesitation",
                solution: "AR/VR previews, extended warranties, easy returns",
                impact: "Increases conversion by 25%"
              },
              {
                icon: "🏬",
                title: "Offline Retail Advantage",
                solution: "Virtual showrooms, price-match guarantees, online exclusives",
                impact: "Reduces showrooming by 40%"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 + index * 0.1 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.solution}</p>
                <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium inline-block">
                  {item.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Winning Strategies */}
        <motion.section 
          className="mb-12 p-6 bg-indigo-50 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-indigo-500 text-white p-2 rounded-lg mr-3">🎯</span>
            Winning Strategies for E-Commerce
          </h2>
          
          <div className="space-y-4">
            {[
              "Expand premium & smart appliance range targeting urban professionals",
              "Regional language campaigns + No Cost EMI for Tier 2/3 cities",
              "360° product views + live expert support for better buying experience",
              "Festive combo deals (TV + soundbar, fridge + microwave)",
              "Faster installations via service partnerships"
            ].map((strategy, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5 + index * 0.1 }}
              >
                <div className="bg-indigo-500 text-white rounded-full p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{strategy}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact & Conclusion */}
        <motion.section 
          className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="bg-white text-blue-600 p-2 rounded-lg mr-3">💥</span>
            Projected Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-3 mb-6">
                {[
                  "📈 15-20% annual GMV growth in appliance category",
                  "🏆 30% market share by 2025",
                  "🔄 25% higher customer retention through superior service"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.1 + index * 0.1 }}
                  >
                    <span className="mr-2 text-xl">{item.substring(0, 2)}</span>
                    <span>{item.substring(2)}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4 }}
              >
                <h3 className="font-bold text-lg mb-2">Final Thoughts</h3>
                <p>
                  The heavy appliance category represents a <span className="font-bold">₹1.2 trillion opportunity</span> for Indian e-commerce. 
                  By implementing these strategies, platforms can capture this underserved market and drive 
                  the next wave of e-commerce growth in India.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.2 }}
            >
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff50" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" unit="%" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: '#333',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar 
                    dataKey="value" 
                    name="Projected Growth" 
                    animationBegin={300}
                    animationDuration={2000}
                  >
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={IMPACT_COLORS[index % IMPACT_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
          >
            <p className="text-xl font-bold">
              This is the growth opportunity Indian e-commerce can't afford to ignore! 🚀
            </p>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default About;