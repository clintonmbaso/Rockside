let isDrawerOpen = false;
let startY = 0;
let currentY = 0;
let drawerHeight = 100; // Total height of the drawer (including handle)
const drawer = document.getElementById('bottom-drawer');
const handle = document.querySelector('.drawer-handle');
let autoCloseTimer;

// Set initial drawer state, ensuring it's closed but handle is visible
function initializeDrawer() {
  drawer.style.bottom = `-${drawerHeight - 30}px`; // Just handle visible
  drawer.style.opacity = '0.5'; // Reduce opacity when closed
  isDrawerOpen = false; // Ensure initial state is "closed"
}

// Function to toggle the drawer on click
function toggleDrawer() {
  if (isDrawerOpen) {
    closeDrawer();
  } else {
    openDrawer();
  }
}

// Function to open the drawer
function openDrawer() {
  drawer.style.bottom = '0'; // Fully opened
  drawer.style.opacity = '1'; // Increase opacity when opened
  isDrawerOpen = true;
  resetAutoCloseTimer(); // Start the timer when opened
}

// Function to close the drawer
function closeDrawer() {
  drawer.style.bottom = `-${drawerHeight - 30}px`; // Content hidden, handle visible
  drawer.style.opacity = '0.5'; // Reduce opacity when closed
  isDrawerOpen = false;
  clearTimeout(autoCloseTimer); // Clear timer when closing manually
}

// Auto-close timer reset
function resetAutoCloseTimer() {
  clearTimeout(autoCloseTimer); // Clear any existing timer
  autoCloseTimer = setTimeout(closeDrawer, 7000); // Set a new timer for 10 seconds
}

// Drag functionality
function startDrag(event) {
  startY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY;
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('touchmove', onDrag);
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);
}

function onDrag(event) {
  currentY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;
  let drawerPosition = startY - currentY;

  // Update the drawer position dynamically as it is being dragged
  let newBottomPosition = Math.max(-drawerHeight + 30, Math.min(0, -drawerHeight + drawerPosition + 30));
  drawer.style.bottom = `${newBottomPosition}px`;
}

function endDrag() {
  let drawerBottom = parseInt(drawer.style.bottom);

  // Snap the drawer to open or closed based on its current position
  if (drawerBottom > -(drawerHeight / 2)) {
    openDrawer();
  } else {
    closeDrawer();
  }

  // Remove event listeners after dragging
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('touchmove', onDrag);
  document.removeEventListener('mouseup', endDrag);
  document.removeEventListener('touchend', endDrag);
}

// Add event listeners for click and dragging
handle.addEventListener('mousedown', startDrag);
handle.addEventListener('touchstart', startDrag);
handle.addEventListener('click', toggleDrawer);

// Initialize the drawer state on page load
initializeDrawer();