const checkbox = document.querySelectorAll('.checkbox');
const iconBtn = document.querySelectorAll('.th-btn');
const blockBtn = document.querySelectorAll('.tab-th-btn');

document.querySelectorAll('.checkbox').forEach((checkbox, i) => {
    checkbox.addEventListener('change', function() {
      const icon = document.querySelectorAll('.th-btn')[i];
      const buttonsBlock = document.querySelectorAll('.tab-th-btn')[i];
      if (this.checked){
        icon.style.display = 'inline-block';
        buttonsBlock.style.display = 'none';
      } else {
        icon.style.display = 'none';
        buttonsBlock.style.display = 'none';
      }
    });
  });

  document.querySelectorAll('.th-btn').forEach((icon, i) => {
    icon.addEventListener('click', function(e) {
      e.stopPropagation(); 
      const buttonsBlock = document.querySelectorAll('.tab-th-btn')[i];
      buttonsBlock.style.display = 'flex';
    });
  });
  
  document.addEventListener('click', function() {
    document.querySelectorAll('.tab-th-btn').forEach((buttonsBlock) => {
      buttonsBlock.style.display = 'none';
    });
  });