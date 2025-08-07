import React, { useState } from "react";
import { evaluateSegment } from "../services/productService";
import { FiFilter, FiRotateCcw, FiChevronDown, FiChevronUp, FiInfo } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const SegmentEditor = ({ onEvaluate }) => {
  const [rules, setRules] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showExamples, setShowExamples] = useState(true);
  const [showResults, setShowResults] = useState(true);

  const handleEvaluate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const ruleArray = rules.split("\n").filter((rule) => rule.trim());
      if (ruleArray.length === 0) {
        setError("Please enter at least one rule");
        return;
      }

      const data = await evaluateSegment(ruleArray);
      setResults(data);
      onEvaluate && onEvaluate(data);
      setShowResults(true);
    } catch (err) {
      setError("Failed to evaluate segment. Please check your rules.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setRules("");
    setResults(null);
    setError(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FiFilter className="mr-2 text-indigo-500" />
          Define Filter Conditions
        </h2>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-lg flex items-start"
            >
              <FiInfo className="mr-2 mt-0.5 flex-shrink-0" />
              <p>{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-6">
          <label
            htmlFor="rules"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter filter rules (one per line):
          </label>
          <textarea
            id="rules"
            value={rules}
            onChange={(e) => setRules(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
            placeholder={`price > 5000\ncategory = Smartphones\nstock_status = instock`}
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={handleEvaluate}
            disabled={isLoading}
            className={`px-5 py-2.5 rounded-lg font-medium flex items-center transition-all duration-200 ${
              isLoading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg"
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Evaluating...
              </>
            ) : (
              <>
                <FiFilter className="mr-2" />
                Evaluate Filter
              </>
            )}
          </button>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium flex items-center transition-colors duration-200"
          >
            <FiRotateCcw className="mr-2" />
            Reset
          </button>
        </div>

        <div className="mb-8">
          <button
            onClick={() => setShowExamples(!showExamples)}
            className="flex items-center text-gray-700 hover:text-gray-900 mb-2"
          >
            {showExamples ? <FiChevronUp className="mr-1" /> : <FiChevronDown className="mr-1" />}
            <h3 className="text-lg font-medium">Examples</h3>
          </button>
          
          {showExamples && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-2 mt-0.5">1</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono break-all">{`price > 5000`}</code>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-2 mt-0.5">2</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono break-all">{`category = Smartphones`}</code>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-2 mt-0.5">3</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono break-all">{`stock_status = instock`}</code>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-2 mt-0.5">4</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono break-all">{`created_at >= 01-08-2025`}</code>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-2 mt-0.5">5</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono break-all">{`price >= 50.0`}</code>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-2 mt-0.5">6</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono break-all">{`on_sale = true`}</code>
                </li>
              </ul>
            </motion.div>
          )}
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-8">
          <h3 className="text-sm font-medium text-indigo-800 mb-2 flex items-center">
            <FiInfo className="mr-1" />
            Supported operators:
          </h3>
          <div className="flex flex-wrap gap-2">
            {['=', '!=', '>', '<', '>=', '<='].map((op) => (
              <span 
                key={op}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-mono rounded-lg"
              >
                {op}
              </span>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {results && showResults && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
            >
              <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Results ({results.length} products)
                </h3>
                <button
                  onClick={() => setShowResults(false)}
                  className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  Collapse
                  <FiChevronUp className="ml-1" />
                </button>
              </div>
              <div className="p-4 overflow-auto max-h-96">
                <pre className="text-sm text-gray-800 font-mono bg-white p-4 rounded-lg overflow-x-auto">
                  {JSON.stringify(results, null, 2)}
                </pre>
              </div>
            </motion.div>
          )}

          {results && !showResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 flex justify-center"
            >
              <button
                onClick={() => setShowResults(true)}
                className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
              >
                Show Results ({results.length} products)
                <FiChevronDown className="ml-1" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SegmentEditor;