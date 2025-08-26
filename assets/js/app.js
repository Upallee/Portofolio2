const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

// Welcome animation function
function initWelcomeAnimation() {
  const overlay = $('#welcome-overlay');
  if (!overlay) return;
  
  // Check if user has seen the welcome screen before
  const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
  
  if (hasSeenWelcome) {
    // Skip welcome animation if user has seen it before
    overlay.classList.add('hidden');
    return;
  }
  
  // Show welcome animation for 3 seconds
  setTimeout(() => {
    overlay.classList.add('hidden');
    localStorage.setItem('hasSeenWelcome', 'true');
  }, 5000);
}

// Profile photo management
function updateProfilePhotos() {
  const profilePhotoPath = 'Photo/Foto Profile.png';
  
  // Update welcome avatar
  const welcomeAvatar = $('#welcome-avatar-img');
  if (welcomeAvatar) {
    welcomeAvatar.src = profilePhotoPath;
  }
  
  // Update header avatar
  const headerAvatar = $('#header-avatar-img');
  if (headerAvatar) {
    headerAvatar.src = profilePhotoPath;
  }
  
  // Update CV about section photo
  if (cvData.about) {
    cvData.about.photo = profilePhotoPath;
  }
}

function setActiveSection(id) {
  $$('.section').forEach(s => s.classList.toggle('active', s.id === id));
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.section === id));
  $$('.tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.section === id)));
  const section = $('#' + id);
  section?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initTabs() {
  $$('.tab').forEach(tab => {
    tab.addEventListener('click', () => setActiveSection(tab.dataset.section));
  });
}

/* === EDIT DI SINI: Data sederhana untuk CV dan Kontak === */
const cvData = {
  about: {
    photo: 'Photo/Foto Profile.png', // Ganti dengan foto Anda
    text: 'I am a visual creator with a unique background in agricultural studies, bringing a fresh and diverse perspective into the creative world. My passion for videography, photography, and design has grown through event documentation, poster creation, and video editing. I combine technical precision with artistic storytelling to craft visuals that connect with audiences and leave a lasting impression.'
  },
  education: [
    {
      title: 'Bachelor of Agrotechnology',
      org: 'Faculty of Agriculture – Universitas Siliwangi',
      date: '2022 – 2026 (Expected Graduation)',
      desc: 'Studying modern agricultural technology, natural resource management, and innovation in sustainable agriculture. Focused on developing efficient cultivation methods, soil and crop management, and leveraging technology to enhance productivity and food security.'
    }
  ],
  experiences: [
    {
      title: 'Agrotechnology Student Association Siliwangi University',
      items: [
        {
          org: 'Head of Communication & Information Division',
          date: 'Now',
          bullets: [
            'Lead the communication and information team to create impactful digital content.',
            'Develop and execute content strategies to increase audience engagement.',
            'Coordinate with members and other organizations for collaborative projects.',
                      ]
        },
        {
          org: 'Staff of Communication & Information Division',
          date: '2024',
          bullets: [
            'Assisted in producing visual content and managing the associations media platforms.',
            'Supported information dissemination and communication strategies within the organization.',
                      ]
        }
      ]
    },
    {
      title: 'Graduation Ceremony of the Faculty of Agriculture, Siliwangi University',
      items: [
        {
          org: 'Coordinator of Publication & Documentation Division',
          date: '2023 - 2024',
          bullets: [
            'Supervised event documentation and managed visual content for the association\'s social media.',
            'Edited documentary videos for organizational activities.',
                      ]
        }
      ]
    },
    {
      title: 'National Childrens Day 2022 Celebration (Garut Regency)',
      items: [
        {
          org: 'Event Director – Escape Room Event',
          date: '2022',
          bullets: [
            'Responsible for the overall planning, concept development, and execution of the Escape Room event.',
            'Designed game flow, created challenge concepts, and coordinated with the creative team.',
            'Ensured a smooth participant experience and achieved the targeted number of attendees.'
                      ]
        }
      ]
    },
    {
      title: 'Islamic Youth Organization (Remaja Islam Masjid) Baiturrahman Mosque',
      items: [
        {
          org: 'Head  of Islamic Youth Organization',
          date: '2021 - 2022',
          bullets: [
            'Lead and coordinated all organizational activities, including religious, social, and educational programs.',
            'Developed event strategies to increase member engagement and community participation.',
            'Managed the committee and ensured smooth execution of all programs.',
                      ]
        },
        {
          org: 'Staff of Communication & Information Division',
          date: '2020 - 2021',
          bullets: [
            'Assisted in managing communication channels and information dissemination within the organization.',
            'Helped organize and promote religious and community activities.',
            'Supported coordination between members to ensure smooth event execution.'
          ]
        }
      ]
    }
  ],
  softskills: [
    {
      title: 'Leadership & Management',
      skills: ['Team Leadership', 'Project Management', 'Strategic Planning', 'Decision Making']
    },
    {
      title: 'Communication',
      skills: ['Public Speaking', 'Written Communication', 'Presentation Skills']
    },
    {
      title: 'Creativity & Innovation',
      skills: ['Creative Problem Solving', 'Design Thinking', 'Innovation Management', 'Artistic Vision']
    },
    {
      title: 'Organization & Planning',
      skills: ['Event Planning', 'Time Management', 'Resource Coordination', 'Attention to Detail']
    }
  ],
  achievements: [
    {
      title: 'Best Work 2 – Product Photography Submission',
      subtitle: 'ISYF Coaching Class V.2',
      year: '2021',
      description: 'Awarded as the 2nd Best Work in the Product Photography Class, recognizing creativity, technical skills, and visual composition in product photography submissions during the ISYF Coaching Class V.2 (September – November 2021).'
    }
  ]
};

const contactLinks = {
  email: 'https://mail.google.com/mail/?view=cm&fs=1&to=hafizhnaufal85@gmail.com',
  instagram: 'https://www.instagram.com/upallee/',
  linkedin: 'https://linkedin.com/in/naufalfh19',
  tiktok: 'https://tiktok.com/@upallee'
};
/* === SAMPAI SINI === */

// Portfolio galleries data
const galleries = {
  photo: {
    title: 'Photography',
    categories: [
      {
        name: 'Event Documentation',
        items: [
          {
            src: 'Photo/Photography/DSC_1190.png',
            alt: 'Mini Concert Photography',
            title: 'Cafe Music',
            location: 'Bento Dafe, Tasikmalaya',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/2, 1/120s, ISO 400',
            description: 'Capturing the emotional moments of graduation day. The ceremony was held in the main auditorium with beautiful natural lighting streaming through the windows. I focused on candid expressions and the interaction between graduates and their families.\n\nThe challenge was to maintain consistent exposure while moving between different lighting conditions throughout the venue. I used a combination of natural light and subtle fill flash to ensure all subjects were properly illuminated.'
          },
          {
            src: 'Photo/Photography/IMG_9000.png',
            alt: 'Campus Event',
            title: 'First Gathering of History Education 2023 ',
            location: 'Ruang Ide',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/3, 1/30s, ISO 800',
            description: 'Documenting the annual technology conference featuring keynote speakers and networking sessions. The event spanned three days with various workshops and panel discussions.\n\nI captured both the formal presentations and the informal networking moments, ensuring a comprehensive visual story of the entire conference experience.'
          }
        ]
      },
      {
        name: 'Portrait Photography',
        items: [
          {
            src: 'Photo/Photography/DSC_8541.png',
            alt: 'Vintage Elegance',
            title: 'Casual Portrait',
            location: 'Between Two Gates, Yogyakarta',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/1.2, 1/125s, ISO 100',
            description: 'This portrait captures a young man in a crisp white shirt and sunglasses, standing in front of a traditional wooden building. The natural light highlights his relaxed yet confident posture, creating a balance between elegance and casual charm. The wooden textures in the background add a timeless, vintage character that enhances the overall mood of the shot.\n\nThe image gives off a street-style impression while still maintaining a polished look. It reflects confidence and simplicity, showing how fashion and environment can blend together to create a strong visual story.'
          },
          {
            src: 'Photo/Photography/DSC_8601.png',
            alt: 'Urban Casual',
            title: 'Casual Portrait',
            location: 'Between Two Gates, Yogyakarta',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/1.2, 1/125s, ISO 100',
            description: 'A man in a green army vest and striped t-shirt sitting casually in front of a building. His natural expression creates a stylish candid moment, highlighting a modern casual vibe.'
          },
          {
            src: 'Photo/Photography/DSC_8690.png',
            alt: 'Joy by the Sea',
            title: 'Casual Portrait',
            location: 'Ngrawe Beach, Yogyakarta',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/1.2, 1/125s, ISO 100',
            description: 'A cheerful woman posing by the beach in a white dress. Her free-spirited gesture and bright smile capture the warmth and joy of a holiday atmosphere.'
          },
          {
            src: 'Photo/Photography/mul.jpg',
            alt: 'City Lights Smile',
            title: 'Casual Portrait',
            location: 'Aksen Coffee, Garut',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/1.2, 1/125s, ISO 100',
            description: 'A portrait of a woman in a black hijab, smiling brightly against a colorful night backdrop. The neon lights add a lively and cheerful touch to the scene.'
          },
          {
            src: 'Photo/Photography/Rere.jpg',
            alt: 'Natural Warmth',
            title: 'Casual Portrait',
            location: 'Aksen Coffee, Garut',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/1.2, 1/125s, ISO 100',
            description: 'A woman in a hijab smiling warmly indoors, surrounded by green plants. The natural expression gives off a friendly and comfortable impression, simple yet full of warmth.'
          },
          {
            src: 'Photo/Photography/Wawe.jpg',
            alt: 'Artistic Greeting',
            title: 'Casual Portrait',
            location: 'Aksen Coffee, Garut',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/1.2, 1/125s, ISO 100',
            description: 'A woman in a white hijab posing close to the camera with her hand slightly raised, as if waving. The dark background and bokeh lights bring an artistic and intimate feel.'
          },
          {
            src: 'Photo/Photography/Sewe.jpg',
            alt: 'Bold in Black',
            title: 'Casual Portrait',
            location: 'Aksen Coffee, Garut',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/1.2, 1/125s, ISO 100',
            description: 'A close-up portrait of a woman in a black hijab and leather jacket, striking an elegant pose with a bold gaze. The mood reflects a modern, editorial-style fashion photoshoot.'
          },
          {
            src: 'Photo/Photography/Azfa.jpg',
            alt: 'Candid Urban Life',
            title: 'Casual Portrait',
            location: 'Aksen Coffee, Garut',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/1.2, 1/125s, ISO 100',
            description: 'A young man in a gray hoodie sitting on spiral stairs, focused on his phone. The candid moment creates a casual everyday vibe with a touch of urban aesthetics.'
          }
        ]
      },
      {
        name: 'Product Photography',
        items: [
          {
            src: 'Photo/Photography/DSC_7882.png',
            alt: 'Crispy Snack Delight',
            title: 'Product Shot',
            location: 'Cipacing, Tasikmalaya',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/8, 1/60s, ISO 200',
            description: 'A close-up shot of round puffed snacks captured in a black bowl. The soft lighting enhances their texture, making them look crunchy and tempting—perfectly styled to highlight the product appetizing appeal.'
          },
          {
            src: 'Photo/Photography/DSC_7899.png',
            alt: 'Golden Crunch Sticks',
            title: 'Product Shot',
            location: 'Cipacing, Tasikmalaya',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/8, 1/60s, ISO 200',
            description: 'This photo features crispy snack sticks in a wooden bowl. The warm tones and clean background emphasize the golden color of the snack, giving it a homemade yet premium vibe.'
          },
          {
            src: 'Photo/Photography/DSC_7910.png',
            alt: 'Savory Crisps',
            title: 'Product Shot',
            location: 'Cipacing, Tasikmalaya',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/8, 1/60s, ISO 200',
            description: 'Crispy crackers served in a black bowl, styled with a minimalistic approach. The shot captures the texture and golden-brown tone, presenting the snack in an appealing and fresh way.'
          },
          {
            src: 'Photo/Photography/DSC_6796.png',
            alt: 'Product Shot',
            title: 'Natural Fresh Drink',
            location: 'Home Studio, Garut',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/8, 1/60s, ISO 200',
            description: 'A minimalist product shot of a bottled green beverage. The clean white background emphasizes the modern packaging design, creating a refreshing and natural impression.'
          },
          {
            src: 'Photo/Photography/DSC_6822.png',
            alt: 'Coffee Blend Energy',
            title: 'Product Shot',
            location: 'Home Studio, Garut',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/8, 1/60s, ISO 200',
            description: 'A close-up of the same bottled drink, styled with scattered coffee beans around the base. The composition highlights both the packaging and its flavor essence, giving a professional commercial feel.'
          },
          {
            src: 'Photo/Photography/khaf1.jpg',
            alt: 'Kahf in Hand',
            title: 'Product Shot',
            location: 'SMAN 6 Garut, Garut',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/8, 1/60s, ISO 200',
            description: 'A lifestyle product photo featuring Kahf Eau de Toilette held in hand with natural greenery as background. The shot emphasizes authenticity and nature, highlighting the brand’s masculine yet refreshing concept.'
          },
          {
            src: 'Photo/Photography/khaf2.jpg',
            alt: 'Nature Essence',
            title: 'Product Shot',
            location: 'SMAN 6 Garut, Garut',
            camera: 'Nikon D3200',
            lens: 'Yongnuo 50mm F1.8',
            settings: 'f/8, 1/60s, ISO 200',
            description: 'Kahf Eau de Toilette positioned outdoors with greenery in the background. The natural setting enhances the earthy tone of the packaging, reinforcing the product’s fresh and natural branding.'
          }
        ]
      },
      {
        name: 'Landscape & Street',
        items: [
          {
            src: 'Photo/Photography/street1.jpg',
            alt: 'Mountain Landscape',
            title: 'Sunrise at Bromo',
            location: 'Mount Bromo, East Java',
            camera: 'Nikon Z6',
            lens: 'Z 14-30mm f/4 S',
            settings: 'f/8, 1/15s, ISO 100',
            description: 'Capturing the magical sunrise over Mount Bromo crater. The scene was photographed during the golden hour when the light was soft and warm.\n\nI used a tripod for the long exposure to capture the movement of the clouds and ensure sharp focus throughout the frame. The composition follows the rule of thirds with the crater positioned at the intersection points.'
          },
          {
            src: 'Photo/Photography/street2.jpg',
            alt: 'Mountain Landscape',
            title: 'Sunrise at Bromo',
            location: 'Mount Bromo, East Java',
            camera: 'Nikon Z6',
            lens: 'Z 14-30mm f/4 S',
            settings: 'f/8, 1/15s, ISO 100',
            description: 'Capturing the magical sunrise over Mount Bromo crater. The scene was photographed during the golden hour when the light was soft and warm.\n\nI used a tripod for the long exposure to capture the movement of the clouds and ensure sharp focus throughout the frame. The composition follows the rule of thirds with the crater positioned at the intersection points.'
          }
        ]
      }
    ]
  },
  design: {
    title: 'Design',
    items: [
      {
        src: 'Photo/Design/POSTERKJO.png',
        alt: 'Poster Design',
        title: 'Kunjungan ORMAWA HIMAGROxHIMASELA',
        category: 'Activity Poster',
        year: '2025',
        tools: 'Canva',
        description: 'Complete brand identity design for a local coffee shop chain. The project included logo design, color palette, typography, and brand guidelines.\n\nThe design concept revolves around the warmth and comfort of coffee culture, using earthy tones and organic shapes. The logo incorporates coffee bean elements with modern typography for a contemporary feel.',
        objective: 'Create a memorable brand identity that differentiates the coffee shop from competitors while appealing to both young professionals and coffee enthusiasts. The design needed to work across various applications including signage, packaging, and digital platforms.'
      },
      {
        src: 'Photo/Design/DUA.png',
        alt: 'Product Label',
        title: 'Ketapang Product Label',
        category: 'Product Label',
        year: '2025',
        tools: 'Canva',
        description: 'Mobile app design for an e-commerce platform specializing in handmade crafts. The design focuses on user experience and easy navigation.\n\nThe interface uses a clean, minimalist approach with intuitive icons and clear call-to-action buttons. User research informed the design decisions, ensuring the app meets the needs of both buyers and sellers.',
        objective: 'Design an intuitive and engaging mobile shopping experience that increases user engagement and conversion rates. The app should be accessible to users of all ages and technical abilities.'
      },
      {
        src: 'Photo/Design/Basket.png',
        alt: 'Poster Design',
        title: 'Basketball Open Recruitment',
        category: 'Social Media Design',
        year: '2024',
        tools: 'Adobe Photoshop, Canva, Figma',
        description: 'Social media campaign design for a sustainable fashion brand. The campaign included Instagram posts, stories, and carousel designs.\n\nEach design maintains brand consistency while adapting to different social media formats. The visual style emphasizes sustainability and eco-friendly fashion choices.',
        objective: 'Increase brand awareness and engagement on Instagram through visually appealing content that aligns with the brand\'s sustainable values. The campaign should encourage user interaction and sharing.'
      }
    ]
  },
  video: {
    title: 'Video',
    items: [
      {
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        alt: 'YouTube Video',
        title: 'Travel Vlog - Bali Adventure',
        type: 'youtube'
      },
      {
        src: 'https://www.tiktok.com/@user/video/1234567890',
        alt: 'TikTok Video',
        title: 'Quick Photography Tips',
        type: 'tiktok'
      },
      {
        src: 'https://www.instagram.com/p/ABC123/',
        alt: 'Instagram Video',
        title: 'Behind the Scenes',
        type: 'instagram'
      }
    ]
  }
};

function bindImagePreview() {
  const images = document.querySelectorAll('.gallery-item');
  images.forEach(img => {
    // Remove existing listeners to prevent duplicates
    img.removeEventListener('click', handleImageClick);
    img.addEventListener('click', handleImageClick);
  });
}

// Handle image click
function handleImageClick(event) {
  const img = event.target;
  const item = findPortfolioItem(img.src);
  if (item) {
    openImageModal(img.src, img.alt || '', item.title || '', item);
  }
}

function bindVideoPreview(container) {
  $$('.gallery-grid iframe', container).forEach(iframe => {
    // Create a wrapper div for the iframe to make it clickable
    const wrapper = iframe.parentElement;
    if (!wrapper.classList.contains('video-wrapper')) {
      const newWrapper = document.createElement('div');
      newWrapper.className = 'video-wrapper';
      newWrapper.style.cursor = 'pointer';
      newWrapper.style.position = 'relative';
      
      // Add overlay with play button
      const overlay = document.createElement('div');
      overlay.className = 'video-overlay';
      overlay.innerHTML = '<div class="play-button">▶</div>';
      
      iframe.parentNode.insertBefore(newWrapper, iframe);
      newWrapper.appendChild(iframe);
      newWrapper.appendChild(overlay);
      
      // Find the portfolio item
      const item = findPortfolioItem(iframe.src);
      if (item) {
        newWrapper.addEventListener('click', () => {
          // Check if it's TikTok or Instagram video
          if (item.src.includes('tiktok.com')) {
            // Open TikTok video in app
            window.open(item.src, '_blank');
          } else if (item.src.includes('instagram.com')) {
            // Open Instagram video in app
            window.open(item.src, '_blank');
          } else {
            // For YouTube videos, open in modal
            openVideoModal(iframe.src, item.title || '', item.description || '');
          }
        });
      }
    }
  });
}

// Find portfolio item by source
function findPortfolioItem(src) {
  for (const [type, gallery] of Object.entries(galleries)) {
    if (gallery.categories) {
      // For photography with categories
      for (const category of gallery.categories) {
        const item = category.items.find(item => item.src === src);
        if (item) return item;
      }
    } else if (gallery.items) {
      // For other galleries (design, video)
      const item = gallery.items.find(item => item.src === src);
      if (item) return item;
    }
  }
  return null;
}

function openVideoModal(src, title, description) {
  const m = $('#video-modal');
  const iframe = $('#video-modal-iframe');
  const titleEl = $('#video-modal-title');
  const descEl = $('#video-modal-desc');
  
  if (!m || !iframe) return;
  
  // Handle different video types
  let videoSrc = src;
  if (src.includes('tiktok.com')) {
    // Convert TikTok URL to embed format
    const videoId = src.split('/video/')[1]?.split('?')[0];
    if (videoId) {
      videoSrc = `https://www.tiktok.com/embed/${videoId}`;
    }
  } else if (src.includes('instagram.com')) {
    // Instagram embed URL should already be in correct format
    videoSrc = src;
  }
  
  iframe.src = videoSrc;
  titleEl.textContent = title || '';
  descEl.textContent = description || '';
  
  // Hide description if empty
  const descContainer = $('.video-description');
  if (descContainer) {
    descContainer.style.display = (title || description) ? 'block' : 'none';
  }
  
  m.classList.add('open');
  m.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const m = $('#video-modal');
  const iframe = $('#video-modal-iframe');
  if (!m) return;
  
  // Stop video by clearing src
  if (iframe) {
    iframe.src = '';
  }
  
  m.classList.remove('open');
  m.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initVideoModal() {
  const m = $('#video-modal');
  m?.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) closeVideoModal();
  });
}

// Render portfolio results inline
function renderResultsInline(type) {
  const resultsContainer = document.getElementById('portfolio-results');
  if (!resultsContainer) return;
  
  resultsContainer.innerHTML = '';
  
  const data = galleries[type];
  if (!data) return;
  
  if (type === 'photo' && data.categories) {
    // Handle photography categories
    data.categories.forEach((category, categoryIndex) => {
      const categorySection = document.createElement('div');
      categorySection.className = 'category-section reveal';
      categorySection.style.animationDelay = `${categoryIndex * 0.1}s`;
      
      const categoryTitle = document.createElement('h4');
      categoryTitle.className = 'category-title';
      categoryTitle.textContent = category.name;
      
      const grid = document.createElement('div');
      grid.className = 'gallery-grid';
      
      category.items.forEach((item, idx) => {
        // Create image element
        const node = document.createElement('img');
        node.src = item.src;
        node.alt = item.alt || '';
        node.className = 'gallery-item';
        node.style.cursor = 'zoom-in';
        node.style.animationDelay = `${(categoryIndex * 0.1) + (idx * 0.05)}s`;
        
        console.log(`Creating image for item ${idx}:`, { src: item.src, title: item.title });
        
        // Add click event directly when creating the image
        node.addEventListener('click', (event) => {
          console.log('=== IMAGE CLICKED ===');
          console.log('Event:', event);
          console.log('Target:', event.target);
          console.log('Item data:', item);
          console.log('Calling openImageModal with:', { src: item.src, alt: item.alt, title: item.title, item });
          openImageModal(item.src, item.alt || '', item.title || '', item);
        });
        
        grid.appendChild(node);
      });
      
      categorySection.appendChild(categoryTitle);
      categorySection.appendChild(grid);
      resultsContainer.appendChild(categorySection);
    });
  } else {
    // Handle other gallery types (design, video)
    const grid = document.createElement('div');
    grid.className = 'gallery-grid';
    
    data.items.forEach((item, idx) => {
      let node;
      
      if (item.type === 'youtube') {
        // YouTube video
        node = document.createElement('div');
        node.className = 'video-cover youtube-cover';
        node.style.cursor = 'pointer';
        node.innerHTML = `
          <iframe src="${item.src}" frameborder="0" allowfullscreen></iframe>
          <div class="cover-overlay">
            <div class="play-icon">▶</div>
            <div class="platform-badge">📺 YouTube</div>
          </div>
        `;
        node.addEventListener('click', () => {
          openVideoModal(item.src, item.title || '');
        });
      } else if (item.type === 'tiktok') {
        // TikTok video
        node = document.createElement('div');
        node.className = 'video-cover tiktok-cover';
        node.style.cursor = 'pointer';
        const videoId = item.src.split('/video/')[1]?.split('?')[0];
        const thumbnailUrl = videoId ? `https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/${videoId}?x-expires=1234567890&x-signature=abc123` : '';
        node.innerHTML = `
          <img src="${thumbnailUrl}" alt="TikTok Video Cover" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;">
          <div class="cover-overlay">
            <div class="play-icon">▶</div>
            <div class="platform-badge">🎵 TikTok</div>
          </div>
        `;
        node.addEventListener('click', () => {
          window.open(item.src, '_blank');
        });
      } else if (item.type === 'instagram') {
        // Instagram video
        node = document.createElement('div');
        node.className = 'video-cover instagram-cover';
        node.style.cursor = 'pointer';
        const postId = item.src.split('/p/')[1]?.split('/')[0];
        const thumbnailUrl = postId ? `https://www.instagram.com/p/${postId}/media/?size=t` : '';
        node.innerHTML = `
          <img src="${thumbnailUrl}" alt="Instagram Video Cover" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;">
          <div class="cover-overlay">
            <div class="play-icon">▶</div>
            <div class="platform-badge">📸 Instagram</div>
          </div>
        `;
        node.addEventListener('click', () => {
          window.open(item.src, '_blank');
        });
      } else {
        // Image item (for design)
        node = document.createElement('img');
        node.src = item.src;
        node.alt = item.alt || '';
        node.className = 'gallery-item';
        node.style.cursor = 'zoom-in';
        node.style.animationDelay = `${idx * 0.1}s`;
        
        // Add click event directly when creating the image
        node.addEventListener('click', () => {
          console.log('Design image clicked:', item.src, item.title);
          openImageModal(item.src, item.alt || '', item.title || '', item);
        });
      }
      
      grid.appendChild(node);
    });
    
    resultsContainer.appendChild(grid);
  }
  
  // Only bind video preview events, images already have click handlers
  bindVideoPreview();
  
  console.log('Portfolio results rendered for type:', type);
}

function initPortfolioCards() {
  $$('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      renderResultsInline(card.dataset.type);
    });
  });
}

function openContactModal() { const m = $('#contact-modal'); if (!m) return; m.classList.add('open'); m.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
function closeContactModal() { const m = $('#contact-modal'); if (!m) return; m.classList.remove('open'); m.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }

function initContactModal() {
  $('#contactOpen')?.addEventListener('click', openContactModal);
  $('#contact-modal')?.addEventListener('click', (e)=>{ if (e.target.hasAttribute('data-close')) closeContactModal(); });
  document.addEventListener('keydown', (ev)=>{ if (ev.key==='Escape') { closeContactModal(); closeImageModal(); closeVideoModal(); } });
  // Update contact links dengan data yang benar
  $$('a.link').forEach(a => {
    if (a.textContent?.includes('Email')) a.href = contactLinks.email;
    if (a.textContent?.includes('Instagram')) a.href = contactLinks.instagram;
    if (a.textContent?.includes('LinkedIn')) a.href = contactLinks.linkedin;
    if (a.textContent?.includes('TikTok')) a.href = contactLinks.tiktok;
  });
}

// Open image modal with detailed description
function openImageModal(src, title, description, itemData = null) {
  console.log('=== OPENING IMAGE MODAL ===');
  console.log('Parameters:', { src, title, description, itemData });
  
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('image-modal-img');
  const titleEl = document.getElementById('image-modal-title');
  const descEl = document.getElementById('image-modal-desc');
  
  console.log('DOM Elements found:', { 
    modal: !!modal, 
    img: !!img, 
    titleEl: !!titleEl, 
    descEl: !!descEl 
  });
  
  if (!modal || !img || !titleEl || !descEl) {
    console.error('Modal elements not found:', { modal, img, titleEl, descEl });
    return;
  }
  
  // Set modal content
  img.src = src;
  img.alt = title;
  titleEl.textContent = title;
  
  // Build detailed description based on item type
  let fullDescription = '';
  
  if (itemData) {
    console.log('Building description for item:', itemData);
    if (itemData.location || itemData.camera || itemData.lens || itemData.settings) {
      // Photography item
      fullDescription = `
        <div class="photo-details">
          ${itemData.location ? `<p><strong>Location:</strong> ${itemData.location}</p>` : ''}
          ${itemData.camera ? `<p><strong>Camera:</strong> ${itemData.camera}</p>` : ''}
          ${itemData.lens ? `<p><strong>Lens:</strong> ${itemData.lens}</p>` : ''}
          ${itemData.settings ? `<p><strong>Settings:</strong> ${itemData.settings}</p>` : ''}
        </div>
        <div class="photo-description">
          <p><strong>Description:</strong></p>
          ${itemData.description ? itemData.description.split('\n').map(line => `<p>${line}</p>`).join('') : ''}
        </div>
      `;
    } else if (itemData.category || itemData.year || itemData.tools || itemData.objective) {
      // Design item
      fullDescription = `
        <div class="design-details">
          ${itemData.category ? `<p><strong>Category:</strong> ${itemData.category}</p>` : ''}
          ${itemData.year ? `<p><strong>Year:</strong> ${itemData.year}</p>` : ''}
          ${itemData.tools ? `<p><strong>Tools:</strong> ${itemData.tools}</p>` : ''}
        </div>
        <div class="design-description">
          <p><strong>Description:</strong></p>
          ${itemData.description ? itemData.description.split('\n').map(line => `<p>${line}</p>`).join('') : ''}
        </div>
        ${itemData.objective ? `
        <div class="design-objective">
          <p><strong>Objective:</strong></p>
          <p>${itemData.objective}</p>
        </div>
        ` : ''}
      `;
    } else {
      // Regular item with simple description
      fullDescription = description || '';
    }
  } else {
    fullDescription = description || '';
  }
  
  console.log('Final description HTML:', fullDescription);
  descEl.innerHTML = fullDescription;
  
  // Show modal
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  console.log('Modal classes after opening:', modal.className);
  console.log('Modal aria-hidden:', modal.getAttribute('aria-hidden'));
  
  // Focus management
  const closeBtn = modal.querySelector('.close');
  if (closeBtn) {
    closeBtn.focus();
    console.log('Close button focused');
  }
  
  console.log('=== MODAL OPENED SUCCESSFULLY ===');
}
function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (!modal) {
    console.error('Image modal not found');
    return;
  }
  
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  console.log('Image modal closed');
}
function initImageModal() {
  const modal = document.getElementById('image-modal');
  if (!modal) {
    console.error('Image modal not found during initialization');
    return;
  }
  
  modal.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close') || e.target.classList.contains('backdrop')) {
      closeImageModal();
    }
  });
  
  console.log('Image modal initialized successfully');
}

function renderCV() {
  const root = $('#cv-root');
  if (!root) return;
  root.innerHTML = '';

  // About Me
  const aboutSection = document.createElement('div');
  aboutSection.className = 'cv-section';
  aboutSection.innerHTML = '<h3>👋 About Me</h3>';
  const aboutGrid = document.createElement('div');
  aboutGrid.className = 'about-grid';
  aboutGrid.innerHTML = `
    <div class="about-photo">
      <img src="${cvData.about.photo}" alt="Foto profil" loading="lazy">
    </div>
    <div class="about-text">
      <p>${cvData.about.text}</p>
    </div>
  `;
  aboutSection.appendChild(aboutGrid);
  root.appendChild(aboutSection);

  // Pendidikan
  const eduSection = document.createElement('div');
  eduSection.className = 'cv-section';
  eduSection.innerHTML = '<h3>🎓 Education</h3>';
  cvData.education.forEach(edu => {
    const item = document.createElement('div');
    item.className = 'education-item';
    item.innerHTML = `
      <div class="item-title">${edu.title}</div>
      <div class="item-org">${edu.org}</div>
      <div class="item-date">${edu.date}</div>
      <p>${edu.desc || ''}</p>
    `;
    eduSection.appendChild(item);
  });
  root.appendChild(eduSection);

  // Pengalaman (grouped)
  const expSection = document.createElement('div');
  expSection.className = 'cv-section';
  expSection.innerHTML = '<h3>💼 Organization Experience</h3>';
  cvData.experiences.forEach(exp => {
    const group = document.createElement('div');
    group.className = 'experience-group';
    group.innerHTML = `<div class="group-title">${exp.title}</div>`;
    
    exp.items.forEach(item => {
      const expItem = document.createElement('div');
      expItem.className = 'experience-item';
      const list = (item.bullets || []).map(b => `<li>${b}</li>`).join('');
      expItem.innerHTML = `
        <div class="item-org">${item.org}</div>
        <div class="item-date">${item.date}</div>
        <ul>${list}</ul>
      `;
      group.appendChild(expItem);
    });
    expSection.appendChild(group);
  });
  root.appendChild(expSection);

  // Pencapaian
  const achSection = document.createElement('div');
  achSection.className = 'cv-section';
  achSection.innerHTML = '<h3>🏆 Achievements</h3>';
  cvData.achievements.forEach(ach => {
    const item = document.createElement('div');
    item.className = 'experience-item';
    item.innerHTML = `
      <div class="item-title">${ach.title}</div>
      <div class="item-subtitle">${ach.subtitle}</div>
      <div class="item-date">${ach.year}</div>
      <p>${ach.description}</p>
    `;
    achSection.appendChild(item);
  });
  root.appendChild(achSection);

  // Soft Skills (moved after achievements)
  const softSkillsSection = document.createElement('div');
  softSkillsSection.className = 'cv-section';
  softSkillsSection.innerHTML = '<h3>🧠 Soft Skills</h3>';
  cvData.softskills.forEach(skill => {
    const skillGroup = document.createElement('div');
    skillGroup.className = 'skill-group';
    skillGroup.innerHTML = `<div class="group-title">${skill.title}</div>`;
    const skillList = document.createElement('ul');
    skillList.className = 'skill-list';
    skill.skills.forEach(s => {
      const skillItem = document.createElement('li');
      skillItem.textContent = s;
      skillList.appendChild(skillItem);
    });
    skillGroup.appendChild(skillList);
    softSkillsSection.appendChild(skillGroup);
  });
  root.appendChild(softSkillsSection);
}

function initThemeToggle() {
  const root = document.documentElement;
  const btn = $('#themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);
  btn?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
    btn.setAttribute('aria-pressed', String(current === 'dark'));
  });
}

function init() {
  // Initialize welcome animation first
  initWelcomeAnimation();
  
  // Update profile photos
  updateProfilePhotos();
  
  // Initialize other components
  initTabs();
  initPortfolioCards();
  initContactModal();
  initImageModal();
  initVideoModal(); // Initialize video modal
  renderCV();
  initThemeToggle();
  
  // Add test button functionality
  initTestButton();
}

// Test function for debugging modal
function initTestButton() {
  const testBtn = document.getElementById('test-modal');
  if (testBtn) {
    testBtn.addEventListener('click', () => {
      console.log('=== TEST BUTTON CLICKED ===');
      const testItem = {
        src: 'Photo/Photography/DSC_1190.png',
        alt: 'Test Image',
        title: 'Test Photography',
        location: 'Test Location',
        camera: 'Test Camera',
        lens: 'Test Lens',
        settings: 'f/2.8, 1/200s, ISO 400',
        description: 'This is a test description for debugging purposes.\n\nIt has multiple lines to test the modal functionality.'
      };
      
      console.log('Testing with item:', testItem);
      openImageModal(testItem.src, testItem.alt, testItem.title, testItem);
    });
    console.log('Test button initialized');
  } else {
    console.log('Test button not found');
  }
}

document.addEventListener('DOMContentLoaded', init); 