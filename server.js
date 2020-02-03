const express = require('express');
const app = express();

//init middlewares
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running...'));

app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/item', require('./routes/api/item'));
app.use('/api/department', require('./routes/api/department'));
app.use('/api/event_type', require('./routes/api/event_type'));
app.use('/api/item_model', require('./routes/api/item_model'));
app.use('/api/item_type', require('./routes/api/item_type'));
app.use('/api/operating_system', require('./routes/api/operating_system'));
app.use('/api/vendor', require('./routes/api/vendor'));

//allow control-origin
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


