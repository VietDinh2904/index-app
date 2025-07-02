document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-target');
      const row = document.getElementById(id);
      const isVisible = row.style.display === 'table-row';
      row.style.display = isVisible ? 'none' : 'table-row';
      btn.textContent = isVisible ? 'Show' : 'Hide';
    });
  });
});
