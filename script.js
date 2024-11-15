// Image URL for the puzzle
const imageUrl = 'https://iili.io/2AXUwYu.jpg';

// List of the puzzle pieces' IDs
const puzzlePieces = ['piece1', 'piece2', 'piece3', 'piece4', 'piece5', 'piece6', 'piece7', 'piece8', 'piece9'];

// Function to set background position for each piece
function setPuzzlePiecePositions() {
  const positions = [
    { top: '0', left: '0' }, { top: '0', left: '100px' }, { top: '0', left: '200px' },
    { top: '100px', left: '0' }, { top: '100px', left: '100px' }, { top: '100px', left: '200px' },
    { top: '200px', left: '0' }, { top: '200px', left: '100px' }, { top: '200px', left: '200px' }
  ];

  puzzlePieces.forEach((piece, index) => {
    const el = document.getElementById(piece);
    el.style.backgroundImage = `url(${imageUrl})`;
    el.style.top = positions[index].top;
    el.style.left = positions[index].left;
    
    // Set background position to show the correct part of the image
    const row = Math.floor(index / 3);  // Determine row (0, 1, 2)
    const col = index % 3;  // Determine column (0, 1, 2)
    el.style.backgroundPosition = `-${col * 100}px -${row * 100}px`; // Position the background to show the right section
  });
}

// Function to animate the puzzle pieces
function animatePuzzle() {
  puzzlePieces.forEach((piece, index) => {
    setTimeout(() => {
      const el = document.getElementById(piece);
      el.style.opacity = 1;  // Make the piece visible
    }, index * 500);  // Delay for each piece (500ms interval)
  });

  // After all pieces are in place, show the birthday note
  setTimeout(() => {
    const birthdayNote = document.getElementById("birthday-note");
    birthdayNote.style.display = "block";  // Show birthday message
  }, 520 * puzzlePieces.length);  // After the last piece (adjust timing as needed)
}

// Initialize the puzzle animation when the page loads
window.onload = function() {
  setPuzzlePiecePositions();
  animatePuzzle();
};
