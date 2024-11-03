document.addEventListener('DOMContentLoaded', () => {
    // Hide all answers initially
    document.querySelectorAll('.answer').forEach((answer) => {
      answer.style.display = 'none';
    });
  
    // Select all elements with the class 'question'
    document.querySelectorAll('.question').forEach((item) => {
      item.addEventListener('click', () => {
        // Close all other open FAQs by removing 'active' class and hiding answers
        document.querySelectorAll('.question').forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.answer').style.display = 'none';
            otherItem.querySelector('.faq-toggle-icon').textContent = '▼'; // Set icon to down arrow
          }
        });
    
        // Toggle the active state of the clicked FAQ
        item.classList.toggle('active');
        const answer = item.querySelector('.answer');
        const icon = item.querySelector('.faq-toggle-icon');
    
        // Show or hide the answer based on active state
        if (item.classList.contains('active')) {
          answer.style.display = 'block';
          icon.textContent = '▲'; // Set icon to up arrow
        } else {
          answer.style.display = 'none';
          icon.textContent = '▼'; // Set icon to down arrow
        }
      });
    });
  });
  let currentStepIndex = 0;
  let autoSwitchInterval;

  function selectStep(index) {
      const steps = document.querySelectorAll('.step');
      const images = document.querySelectorAll('.image-container img');

      steps.forEach((step, i) => {
          if (i === index) {
              step.classList.add('active');
              step.querySelector('.vertical-line').style.height = '100%'; // Extend line to full height
          } else {
              step.classList.remove('active');
              step.querySelector('.vertical-line').style.height = '0'; // Hide the line
          }
      });

      images.forEach((img, i) => {
          img.style.display = i === index ? 'block' : 'none';
      });

      currentStepIndex = index;

      clearInterval(autoSwitchInterval);
      autoSwitchInterval = setInterval(nextStep, 5000);
  }

  function nextStep() {
      currentStepIndex = (currentStepIndex + 1) % 5;
      selectStep(currentStepIndex);
  }

  document.addEventListener("DOMContentLoaded", () => {
      selectStep(0);
      autoSwitchInterval = setInterval(nextStep, 5000);
  });       