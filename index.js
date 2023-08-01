import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function calculateAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Input must be a non-empty array of numbers.');
    }
  
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const average = sum / arr.length;
    return average;
  }
  
  // Example usage:
  const numbers = [10, 20, 30, 40, 50];
  try {
    const average = calculateAverage(numbers);
    console.log('Average:', average); // Output: 30
  } catch (error) {
    console.error(error.message);
  }
  