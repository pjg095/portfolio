// Theme toggle logic
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  if (!themeToggle || !themeIcon) {
    console.error('Theme toggle elements not found');
    return;
  }

  function setTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark');
      themeIcon.textContent = 'light_mode';
    } else {
      document.documentElement.classList.remove('dark');
      themeIcon.textContent = 'dark_mode';
    }
  }

  // Check for saved theme or system preference
  const userTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(userTheme === 'dark' || (!userTheme && systemDark));

  themeToggle.addEventListener('click', () => {
    console.log('Theme toggle clicked!');
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
    console.log('Theme toggled:', isDark ? 'dark' : 'light');
    console.log('Current classes on html:', document.documentElement.classList.toString());
  });

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}); 