
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
// app.use('/api/products', require('./server/routes/productRoutes'));//-
// app.use('/api/categories', require('./server/routes/categoryRoutes'));//-
// app.use('/api/users', require('./server/routes/userRoutes'));//-
// app.use('/api/orders', require('./server/routes/orderRoutes'));//-
// app.use('/api/cart', require('./server/routes/cartRoutes'));//-
// app.use('/api/products', require('./routes/productRoutes'));//+
// app.use('/api/categories', require('./routes/categoryRoutes'));//+
// app.use('/api/users', require('./routes/userRoutes'));//+
// app.use('/api/orders', require('./routes/orderRoutes'));//+
// app.use('/api/cart', require('./routes/cartRoutes'));//+

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});