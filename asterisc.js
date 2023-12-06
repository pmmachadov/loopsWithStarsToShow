// Function to draw a star pattern in a square matrix
function drawStar(size) {
  // Create a 2D matrix filled with spaces
  const matrix = Array.from({ length: size }, () => Array(size).fill(' '));

  // Find the center of the matrix
  const center = Math.floor(size / 2); // Math.floor rounds down to the nearest integer

  // Fill the matrix to create a star pattern
  for (let i = 0; i < size; i++) {
    matrix[i][center] = '*';              // Vertical line of the star
    matrix[center][i] = '*';              // Horizontal line of the star
    matrix[i][i] = '*';                   // Diagonal from top-left to bottom-right
    matrix[i][size - i - 1] = '*';        // Diagonal from top-right to bottom-left
  }

  // Print the resulting star pattern matrix
  for (let i = 0; i < size; i++) {
    console.log(matrix[i].join(''));
  }
}

// Example: Draw a star pattern with size 7
drawStar(7);
