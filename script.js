document.querySelectorAll('.skill-bar').forEach(bar => {
  const percentage = bar.getAttribute('data-percentage');

  bar.addEventListener('mouseenter', () => {
    bar.querySelector('.skill-fill').style.width = percentage; // Set width on hover
  });

  bar.addEventListener('mouseleave', () => {
    bar.querySelector('.skill-fill').style.width = '0'; // Reset width when not hovering
  });
});