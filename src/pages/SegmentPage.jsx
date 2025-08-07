import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SegmentEditor from "../components/SegmentEditor";
import { FiArrowLeft, FiPieChart } from "react-icons/fi";

const SegmentPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4"
        >
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
            >
              <FiArrowLeft className="mr-2" />
              Back to Products
            </Link>
            <div className="flex items-center">
              <FiPieChart className="text-indigo-500 text-2xl mr-3" />
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Create Product Segment
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <SegmentEditor />
          </div>
        </motion.div>

        {/* Optional Help Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg"
        >
          <h3 className="text-sm font-medium text-blue-800 mb-1">Need help?</h3>
          <p className="text-sm text-blue-700">
            Segments allow you to group products based on specific criteria. Create rules to automatically include matching products.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SegmentPage;