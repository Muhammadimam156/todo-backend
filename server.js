const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todo-routes');

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));




// routes
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('✅ Todo API is running...');
});

connectDB().then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
}).catch((error) => {
    console.error('❌ Server failed to start:', error.message);
    process.exit(1);
});

