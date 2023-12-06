// Function to draw a diagonal matrix with asterisks
function drawDiagonalMatrix(size) {
  // Create a 2D matrix filled with spaces
  const matrix = Array.from({ length: size }, () => Array(size).fill(' ')); // Fill the matrix to create a diagonal pattern

  // Fill the diagonal of the matrix with asterisks
  for (let i = 0; i < size; i++) {
    matrix[i][i] = '*'; // Diagonal from top-left to bottom-right. 
  }

  // Print the matrix
  for (let i = 0; i < size; i++) {
    console.log(matrix[i].join('')); // Join the characters of the array to create a string. It uses join because the array is filled with spaces.
  }
}

drawDiagonalMatrix(5);

