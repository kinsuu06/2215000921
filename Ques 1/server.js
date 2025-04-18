const express = require('express');
const app = express();

app.use(express.json());
// app.use(logger);

app.post('/api/average', (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ message: 'Please provide a non-empty array of numbers.' });
  }

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const average = sum / numbers.length;

  res.status(200).json({ average: average.toFixed(2) });
});

app.get('/', (req, res) => {
    res.send('Hello! Server is working ');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Average API running at http://localhost:${PORT}`);
});
