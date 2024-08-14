document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLink = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLink.forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

  // Certificates
  const certificatesData = [
    {
      title: 'Responsive Web Design',
      image: 'assets/freecodcamp-certificate.png',
    },
    {
      title: 'JavaScript',
      image: 'assets/freecodcamp-certificate.png',
    },
    {
      title: 'JavaScript',
      image: 'assets/freecodcamp-certificate.png',
    },
  ];

  const certificateContent = document.getElementById('certificate-content');

  function loadCertificates() {
    certificateContent.innerHTML = '';

    // Title
    const certificationTitle = document.createElement('h2');
    certificationTitle.innerText = 'Certification of Completion';
    certificateContent.insertAdjacentElement('beforebegin', certificationTitle);

    certificatesData.forEach((cert) => {
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

  // Carousel and Popup Menu
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const popupMenu = document.querySelector('#popup-menu');
  const closeBtn = document.querySelector('#close-btn');

  const projects = [
    {
      src: 'imgs/palindrome.png',
      title: 'Project 1',
      description: 'Description for Project 1',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Hamas2000/Palindrome-checker/actions/runs/9678823197',
      liveLink: 'https://hamas2000.github.io/Palindrome-checker/',
    },
    {
      src: 'imgs/numeral.png',
      title: 'Project 2',
      description: 'Description for Project 2',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Hamas2000/Roman-Numeral-Convertor',
      liveLink: '//hamas2000.github.io/Roman-Numeral-Convertor/',
    },
    {
      src: 'imgs/validator.png',
      title: 'Project 3',
      description: 'Description for Project 3',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Hamas2000/Telephone-Number-Validator',
      liveLink: 'https://hamas2000.github.io/Telephone-Number-Validator/',
    },
    {
      src: 'imgs/cash.png',
      title: 'Project 4',
      description: 'Description for Project 4',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Hamas2000/Build-a-Cash-Register',
      liveLink: 'https://hamas2000.github.io/Build-a-Cash-Register/',
    },
    {
      src: 'imgs/pokimon.png',
      title: 'Project 5',
      description: 'Description for Project 5',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Hamas2000/Build-a-Pok-mon-Search-App',
      liveLink: 'https://hamas2000.github.io/Build-a-Pok-mon-Search-App/',
    },
    {
      src: 'imgs/portfolio.png',
      title: 'Project 6',
      description: 'Description for Project 6',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Hamas2000/Build-a-Pok-mon-Search-App',
      liveLink: 'https://hamas2000.github.io/JS-Capstone-Project-Personal-Portfolio-/',
    },
  ];

  let currentIndex = 0;

  const showPopupMenu = (index) => {
    const project = projects[index];
    document.querySelector('#popup-title').textContent = project.title;
    document.querySelector('#popup-img').src = project.src;
    document.querySelector('#popup-description').textContent = project.description;
    document.querySelector('#source-link').href = project.sourceLink;
    document.querySelector('#live-link').href = project.liveLink;

    const techList = document.querySelector('#popup-tech-list');
    techList.innerHTML = '';
    project.technologies.forEach((tech) => {
      const listItem = document.createElement('li');
      listItem.textContent = tech;
      techList.appendChild(listItem);
    });

    popupMenu.style.display = 'block';
  };

  const updateCarousel = () => {
    carousel.innerHTML = '';
    const project = projects[currentIndex];
    const item = document.createElement('div');
    item.classList.add('carousel-item');

    const imgElement = document.createElement('img');
    imgElement.src = project.src;
    imgElement.alt = project.title;
    item.appendChild(imgElement);

    const hoverContent = document.createElement('div');
    hoverContent.classList.add('carousel-hover');

    const title = document.createElement('h1');
    title.textContent = project.title;
    hoverContent.appendChild(title);

    const learnMoreButton = document.createElement('button');
    learnMoreButton.classList.add('learn-more');
    learnMoreButton.textContent = 'Learn More';
    learnMoreButton.dataset.index = currentIndex;
    hoverContent.appendChild(learnMoreButton);

    item.appendChild(hoverContent);
    carousel.appendChild(item);

    learnMoreButton.addEventListener('click', () => {
      showPopupMenu(currentIndex);
    });
  };

  closeBtn.addEventListener('click', () => {
    popupMenu.style.display = 'none';
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
  });

  updateCarousel();

  // Adding three images below the carousel
  const additionalImagesContainer = document.querySelector('#additional-images');
  const additionalImages = [
    'assets/pro-2.png',
    'assets/pro-2.png',
    'assets/pro-2.png',
  ];

  additionalImages.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Additional Image';
    img.classList.add('additional-image');
    additionalImagesContainer.appendChild(img);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.circle');
  circles.forEach((circle) => {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage);
  });
});
