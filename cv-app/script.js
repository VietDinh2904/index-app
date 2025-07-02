document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      btn.textContent = 'Switch to Dark Mode';
    } else {
      btn.textContent = 'Switch to Light Mode';
    }
  });

  // Show/Hide rows
  document.querySelectorAll('.toggle-btn').forEach(b => {
    b.addEventListener('click', () => {
      const id = b.getAttribute('data-target');
      const row = document.getElementById(id);
      const isVisible = row.style.display === 'table-row';
      row.style.display = isVisible ? 'none' : 'table-row';
      b.textContent = isVisible ? 'Show' : 'Hide';
    });
  });
});
