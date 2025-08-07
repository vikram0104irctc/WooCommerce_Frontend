# 🖥️ WooCommerce Product Dashboard

A modern **React-based dashboard** for visualizing and segmenting WooCommerce products. It features interactive product cards, a rule-based segment editor, and real-time filtering capabilities — all built with smooth animations and responsive design.

> ⚙️ Built with **React**, **JavaScript**, **Tailwind CSS**

---

## Frontend URL - https://woo-commerce-frontend.vercel.app/
## Backend URL - https://woocommerce-backend-lzlv.onrender.com/

## ✨ Key Features

- 🛍️ **Product Gallery** with responsive card layouts
- ✏️ **Rule Editor** for dynamic product segmentation
- ⚡ **Real-time Evaluation** with JSON preview
- 🎨 **Animated Transitions** between UI states
- 📱 **Fully Responsive** across all device sizes
- 🧩 **Modular Component Architecture** for easy scalability

---

## 🧱 Technologies Used

| Purpose          | Technology    |
| ---------------- | ------------- |
| Framework        | React 18      |
| Language         | JavaScript    |
| Styling          | Tailwind CSS  |
| Animations       | Framer Motion |
| State Management | React Context |
| HTTP Client      | Axios         |
| UI Components    | Headless UI   |

---

## 🎨 UI Components

### 1. Product Grid Component

```jsx
<ProductCard
  title={product.title}
  price={product.price}
  stockStatus={product.stock_status}
  onSale={product.on_sale}
  rating={product.average_rating}
/>
```

### 2. Segment Editor

```jsx
<SegmentEditor
  rules={rules}
  onChange={handleRulesChange}
  onEvaluate={handleEvaluate}
/>
```

### 3. Segment Editor

```jsx
<<JsonPreview
  data={results}
  loading={isLoading}
/>
```

### 🚀 Getting Started

🧩 Installation

```
git clone https://github.com/your-repo/Woocommerce-Frontend.git
npm install
```

🧪 Development

### ⚙️ Configuration

```
VITE_API_BASE_URL=${backendURL}
npm run dev
```

### 🎭 Animation Examples

## 🔹 Card Hover Effect

```<motion.div
  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
  transition={{ type: "spring", stiffness: 300 }}
>
  {/* Product Card Content */}
</motion.div>
```

## 🔹 Loading Animation

```
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  {isLoading && <LoadingSpinner />}
</motion.div>
```

### 📱 Responsive Breakpoints

```
| Screen Size  | Layout Style  |
| ------------ | ------------- |
| `< 640px`    | Single column |
| `640–768px`  | 2-column grid |
| `768–1024px` | 3-column grid |
| `> 1024px`   | 4-column grid |
```

### 🤖 AI Usage Notes
```
⚙️ Initial Setup: Used Vite + React + JavaScript boilerplate

✨ UI Enhancements:

Framer Motion animation suggestions (via DeepSeek)

Optimized Tailwind utility combinations

Responsive design improvements

🧠 Business Logic: Fully custom implementation

🧱 Component Structure: Original architecture
```
