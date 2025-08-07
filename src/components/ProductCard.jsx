import { motion } from "framer-motion";
import {
  FiShoppingBag,
  FiTag,
  FiLayers,
  FiCalendar,
  FiStar,
} from "react-icons/fi";

const ProductCard = ({ product, style }) => {
  // Calculate discount percentage if on sale
  const discountPercentage =
    product.on_sale && product.sale_price
      ? Math.round(((product.price - product.sale_price) / product.price) * 100)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, ...style }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      {/* Product Image Placeholder - Fixed height */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
        <FiShoppingBag className="h-16 w-16 text-gray-300" />

        {/* Sale Badge */}
        {product.on_sale && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
          >
            {discountPercentage}% OFF
          </motion.div>
        )}
      </div>

      {/* Product Content - Flex-grow to take remaining space */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title and Status */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h3>
          <span
            className={`flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium ${
              product.stock_status === "instock"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.stock_status}
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center mb-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.sale_price}
          </span>
          {product.on_sale && product.regular_price && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.price}
            </span>
          )}
        </div>

        {/* Meta Information Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
          <div className="flex items-center">
            <FiLayers className="text-gray-400 mr-2" />
            <div>
              <p className="text-gray-500">Category</p>
              <p className="font-medium text-gray-700">
                {product.category || "N/A"}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FiShoppingBag className="text-gray-400 mr-2" />
            <div>
              <p className="text-gray-500">In Stock</p>
              <p className="font-medium text-gray-700">
                {product.stock_quantity || "0"}
              </p>
            </div>
          </div>
        </div>

        {/* Tags - Flex-grow to push footer down */}
        <div className="flex-grow">
          {product.tags?.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <FiTag className="mr-1" />
                <span>Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.tags.slice(0, 3).map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
                {product.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{product.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer - Always at bottom */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <FiCalendar className="mr-1" />
            <span>
              {new Date(product.created_at).toLocaleDateString("en-GB")}
            </span>
          </div>

          {/* Rating (optional) */}
          {product.average_rating && (
            <div className="flex items-center text-sm bg-yellow-50 text-yellow-700 px-2 py-1 rounded">
              <FiStar className="fill-current text-yellow-400 mr-1" />
              <span>{product.average_rating}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
