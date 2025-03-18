// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't already open
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});