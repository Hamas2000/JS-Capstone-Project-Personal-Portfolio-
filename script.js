// Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  
    navLink.forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }));
  });
  
  // Certificates
  const certificatesData = [
    {
      title: 'Responsive Web Design',
      image: 'freecodcamp-certificate.png'
    },
    {
      title: 'JavaScript',
      image: 'freecodcamp-certificate.png'
    }
  ];
  
  const certificateContent = document.getElementById('certificate-content');
  
  function loadCertificates() {
    certificateContent.innerHTML = '';
  
    // Title
    const certificationTitle = document.createElement('h2');
    certificationTitle.innerText = 'Certification of Completion';
    certificateContent.insertAdjacentElement('beforebegin', certificationTitle);
  
    certificatesData.forEach(cert => {
      const certificateDiv = document.createElement('div');
      certificateDiv.classList.add('certificate');
  
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('title');
      titleDiv.innerText = cert.title;
  
      const img = document.createElement('img');
      img.src = cert.image;
      img.alt = cert.title;
      img.classList.add('certificate-image');
  
      certificateDiv.appendChild(titleDiv);
      certificateDiv.appendChild(img);
      certificateContent.appendChild(certificateDiv);
    });
  }
  
  loadCertificates();
  
  document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel-container');
    const skillHead = document.createElement('h1');
    skillHead.id = 'skill-head';
    skillHead.innerHTML = 'Our <span id="color">Projects</span>';
    carouselContainer.insertAdjacentElement('beforebegin', skillHead);
  
    // Display the certificate section by default
    document.getElementById('certificate-content').style.display = 'block';
  
    // Carousel data
    const carouselData = [
      {
        title: 'Survey Form',
        description: '',
        image: 'new.jpeg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://example.com/project4'
      },
      {
        title: 'Roman Numeral',
        description: '',
        image: 'profile.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://example.com/project4'
      },
      {
        title: 'Personal Portfolio',
        description: '',
        image: 'new.jpeg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://example.com/project4'
      },
      {
        title: 'Palindrome Checker',
        description: '',
        image: 'profile.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://example.com/project4'
      },
      {
        title: 'PPP Project',
        description: '',
        image: 'new.jpeg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://example.com/project4'
      },
      {
        title: 'Product Landing Page',
        description: '',
        image: 'profile.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://example.com/project4'
      }
    ];
  
    const carouselImage = document.getElementById('carousel-image');
    const carouselTitle = document.getElementById('carousel-title');
    const carouselDescription = document.getElementById('carousel-description');
    const carouselTech = document.getElementById('carousel-tech');
  
    let currentIndex = 0;
  
    function showSlide(index) {
      const totalSlides = carouselData.length;
      if (index >= totalSlides) currentIndex = 0;
      if (index < 0) currentIndex = totalSlides - 1;
      const item = carouselData[currentIndex];
      carouselImage.src = item.image;
      carouselImage.alt = item.title;
      carouselTitle.innerText = item.title;
      carouselDescription.innerText = item.description;
  
      // Clear previous technologies
      carouselTech.innerHTML = '';
      item.technologies.forEach(tech => {
        const li = document.createElement('li');
        li.innerText = tech;
        carouselTech.appendChild(li);
      });
    }
  
    window.nextSlide = () => {
      currentIndex++;
      showSlide(currentIndex);
    }
  
    window.prevSlide = () => {
      currentIndex--;
      showSlide(currentIndex);
    }
  
    // Initial display
    showSlide(currentIndex);
  });
  
  // Three more images
  document.addEventListener("DOMContentLoaded", () => {
    const images = [
      'new.jpeg',
      'new.jpeg',
      'new.jpeg'
    ];
  
    const imageContainer = document.getElementById('image-container');
  
    images.forEach(imageSrc => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = 'Dynamic Image';
      img.style.width = '350px'; // Optional: Set image width
      img.style.height = 'auto'; // Optional: Maintain aspect ratio
  
      // Create hover content container
      const hoverContent = document.createElement('div');
      hoverContent.classList.add('hover-content');
  
      const hoverTitle = document.createElement('h1');
      hoverTitle.innerText = 'Hovered Title';
      hoverContent.appendChild(hoverTitle);
  
      const hoverList = document.createElement('ul');
      ['Item 1', 'Item 2', 'Item 3'].forEach(text => {
        const li = document.createElement('li');
        li.innerText = text;
        hoverList.appendChild(li);
      });
      hoverContent.appendChild(hoverList);
  
      const hoverButton = document.createElement('button');
      hoverButton.innerText = 'Click Me';
      hoverContent.appendChild(hoverButton);
  
      img.appendChild(hoverContent);
      imageContainer.appendChild(img);
    });
  });
  
  // Text changing (if used)
  function changeText() {
    const colorSpan = document.getElementById('color');
    let currentText = 'Web Developer';
  
    setInterval(() => {
      colorSpan.style.opacity = 0;
  
      setTimeout(() => {
        currentText = currentText === 'Web Developer' ? 'Freelancer' : 'Web Developer';
        colorSpan.innerText = currentText;
        colorSpan.style.opacity = 1;
      }, 1000); // Match this with the CSS transition duration for opacity
    }, 5000); // Interval for text change
  }
  
  // Circles
  document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
  
    circles.forEach(circle => {
      const percent = circle.getAttribute('data-percent');
      const rotateValue = (percent / 100) * 360;
  
      if (percent <= 50) {
        circle.querySelector('::before').style.transform = `rotate(${rotateValue}deg)`;
      } else {
        circle.querySelector('::before').style.transform = 'rotate(180deg)';
        circle.querySelector('::after').style.transform = `rotate(${rotateValue - 180}deg)`;
      }
    });
  });
  