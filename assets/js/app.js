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
      skills: ['Public Speaking', 'Written Communication', 'Interpersonal Skills', 'Presentation Skills']
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

const galleries = {
  photo: {
    title: 'Photography Collection',
    categories: {
      event: {
        title: 'Event Documentation',
        items: [
          { 
            type: 'img', 
            src: 'Photo/Photography/DSC_1190.png', 
            alt: 'Event Photo 1',
            title: 'Event Documentation 1',
            description: 'Dokumentasi acara yang menangkap momen-momen penting dan suasana yang dinamis.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/IMG_9000.png', 
            alt: 'Event Photo 2',
            title: 'Event Documentation 2',
            description: 'Momentum spesial dari berbagai acara yang telah didokumentasikan.'
          }
        ]
      },
      portrait: {
        title: 'Portrait Photography',
        items: [
          { 
            type: 'img', 
            src: 'Photo/Photography/DSC_8541.png', 
            alt: 'Portrait 1',
            title: 'Portrait Photography 1',
            description: 'Fotografi portrait yang menangkap ekspresi dan karakter subjek.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/DSC_8601.png', 
            alt: 'Portrait 2',
            title: 'Portrait Photography 2',
            description: 'Potret yang menampilkan keindahan dan kepribadian seseorang.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/DSC_8690.png', 
            alt: 'Portrait 3',
            title: 'Portrait Photography 3',
            description: 'Fotografi portrait dengan komposisi dan pencahayaan yang menarik.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/Azfa.jpg', 
            alt: 'Portrait 2',
            title: 'Portrait Photography 2',
            description: 'Potret yang menampilkan keindahan dan kepribadian seseorang.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/Wawe.jpg', 
            alt: 'Portrait 2',
            title: 'Portrait Photography 2',
            description: 'Potret yang menampilkan keindahan dan kepribadian seseorang.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/Sewe.jpg', 
            alt: 'Portrait 2',
            title: 'Portrait Photography 2',
            description: 'Potret yang menampilkan keindahan dan kepribadian seseorang.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/mul.jpg', 
            alt: 'Portrait 2',
            title: 'Portrait Photography 2',
            description: 'Potret yang menampilkan keindahan dan kepribadian seseorang.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/Rere.jpg', 
            alt: 'Portrait 2',
            title: 'Portrait Photography 2',
            description: 'Potret yang menampilkan keindahan dan kepribadian seseorang.'
          },
        ]
      },
      product: {
        title: 'Product Photography',
        items: [
          { 
            type: 'img', 
            src: 'Photo/Photography/DSC_7882.png', 
            alt: 'Product Photo 1',
            title: 'Product Photography 1',
            description: 'Fotografi produk yang menampilkan detail dan kualitas dengan baik.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/DSC_7899.png', 
            alt: 'Product Photo 2',
            title: 'Product Photography 2',
            description: 'Komposisi produk yang menarik dengan pencahayaan yang tepat.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/DSC_7910.png', 
            alt: 'Product Photo 2',
            title: 'Product Photography 2',
            description: 'Komposisi produk yang menarik dengan pencahayaan yang tepat.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/DSC_6796.png', 
            alt: 'Product Photo 2',
            title: 'Product Photography 2',
            description: 'Komposisi produk yang menarik dengan pencahayaan yang tepat.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/DSC_6822.png', 
            alt: 'Product Photo 2',
            title: 'Product Photography 2',
            description: 'Komposisi produk yang menarik dengan pencahayaan yang tepat.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/khaf1.jpg', 
            alt: 'Product Photo 2',
            title: 'Product Photography 2',
            description: 'Komposisi produk yang menarik dengan pencahayaan yang tepat.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/khaf2.jpg', 
            alt: 'Product Photo 2',
            title: 'Product Photography 2',
            description: 'Komposisi produk yang menarik dengan pencahayaan yang tepat.'
          }
        ]
      },
      landscape: {
        title: 'Landscape & Street Photography',
        items: [
          { 
            type: 'img', 
            src: 'Photo/Photography/street1.jpg', 
            alt: 'Landscape 1',
            title: 'Landscape Photography 1',
            description: 'Fotografi landscape yang menangkap keindahan alam dan pemandangan.'
          },
          { 
            type: 'img', 
            src: 'Photo/Photography/street2.jpg', 
            alt: 'Street 1',
            title: 'Street Photography 1',
            description: 'Fotografi jalanan yang menangkap kehidupan urban dan momen sehari-hari.'
          }
        ]
      }
    }
  },
  video: {
    title: 'Videography Projects',
    items: [
      { 
        type: 'youtube', 
        src: 'https://www.youtube.com/embed/sZmgDNARSPo?si=zPB3JwjoZ_C0osx0', 
        title: 'Project 1',
        description: 'Deskripsi video YouTube project pertama.'
      },
      { 
        type: 'youtube', 
        src: 'https://www.youtube.com/embed/4GbYnItH36c?si=BuI3GbyK9fQ0v0Po', 
        title: 'Project 1',
        description: 'Deskripsi video YouTube project pertama.'
      },
      { 
        type: 'tiktok', 
        src: 'https://www.tiktok.com/@upallee/video/6988842951258541338', 
        title: 'Project 2',
        description: 'Deskripsi video TikTok project kedua.'
      },
      { 
        type: 'instagram', 
        src: 'https://www.instagram.com/p/CRadkRspzoA/embed/', 
        title: 'Project 3',
        description: 'Deskripsi video Instagram Reels project ketiga.'
      }
    ]
  },
  design: {
    title: 'Poster & Graphic Design',
    items: [
      { 
        type: 'img', 
        src: 'Photo/Design/DUA.png', 
        alt: 'Poster 1',
        title: 'Judul Poster 1',
        description: 'Deskripsi poster event pertama.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/POSTERKJO.png', 
        alt: 'Poster 2',
        title: 'Judul Poster 2',
        description: 'Deskripsi poster event kedua.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/Basket.png', 
        alt: 'Poster 3',
        title: 'Judul Poster 3',
        description: 'Deskripsi poster event ketiga.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/typo1.jpg', 
        alt: 'Poster 3',
        title: 'Judul Poster 3',
        description: 'Deskripsi poster event ketiga.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/typo2.jpg', 
        alt: 'Poster 3',
        title: 'Judul Poster 3',
        description: 'Deskripsi poster event ketiga.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/typo3.jpg', 
        alt: 'Poster 3',
        title: 'Judul Poster 3',
        description: 'Deskripsi poster event ketiga.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/typo4.jpg', 
        alt: 'Poster 3',
        title: 'Judul Poster 3',
        description: 'Deskripsi poster event ketiga.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/typo5.jpg', 
        alt: 'Poster 3',
        title: 'Judul Poster 3',
        description: 'Deskripsi poster event ketiga.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/typo6.jpg', 
        alt: 'Poster 3',
        title: 'Judul Poster 3',
        description: 'Deskripsi poster event ketiga.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/typo7.jpg', 
        alt: 'Poster 3',
        title: 'Judul Poster 3',
        description: 'Deskripsi poster event ketiga.'
      },
      { 
        type: 'img', 
        src: 'Photo/Design/typo8.jpg', 
        alt: 'Poster 3',
        title: 'Judul Poster 3',
        description: 'Deskripsi poster event ketiga.'
      }
    ]
  }
};

function bindImagePreview(container) {
  $$('.gallery-grid img', container).forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const item = findPortfolioItem(img.src);
      if (item) {
        openImageModal(img.src, img.alt || '', item.title || '', item.description || '');
      }
    }); 
  });
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

function findPortfolioItem(src) {
  // Search through all gallery categories and items
  for (const [galleryKey, gallery] of Object.entries(galleries)) {
    if (gallery.categories) {
      // For photography with categories
      for (const [categoryKey, category] of Object.entries(gallery.categories)) {
        const item = category.items.find(item => item.src === src);
        if (item) return item;
      }
    } else if (gallery.items) {
      // For video and design galleries
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

function renderResultsInline(type) {
  const container = $('#portfolio-results');
  const data = galleries[type];
  if (!container || !data) return;

  container.innerHTML = '';

  const title = document.createElement('h3');
  title.className = 'section-title reveal';
  title.textContent = data.title;

  container.appendChild(title);

  // Handle photography categories
  if (type === 'photo' && data.categories) {
    Object.entries(data.categories).forEach(([categoryKey, categoryData], categoryIndex) => {
      const categorySection = document.createElement('div');
      categorySection.className = 'category-section reveal';
      categorySection.style.animationDelay = `${categoryIndex * 100}ms`;

      const categoryTitle = document.createElement('h4');
      categoryTitle.className = 'category-title';
      categoryTitle.textContent = categoryData.title;

      const grid = document.createElement('div');
      grid.className = 'gallery-grid';

      categoryData.items.forEach((item, idx) => {
        let node;
        if (item.type === 'img') {
          node = document.createElement('img');
          node.src = item.src;
          node.alt = item.alt || '';
          node.style.cursor = 'zoom-in';
          
          // Add click event directly when creating the image
          node.addEventListener('click', () => {
            openImageModal(item.src, item.alt || '', item.title || '', item.description || '');
          });
          
        } else if (item.type === 'youtube') {
          node = document.createElement('iframe');
          node.src = item.src;
          node.title = item.title || '';
          node.frameBorder = '0';
          node.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
          node.allowFullscreen = true;
        } else if (item.type === 'tiktok') {
          // Create video cover for TikTok with actual thumbnail
          node = document.createElement('div');
          node.className = 'video-cover tiktok-cover';
          node.style.cursor = 'pointer';
          
          // Get TikTok video ID and create thumbnail URL
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
          // Create video cover for Instagram with actual thumbnail
          node = document.createElement('div');
          node.className = 'video-cover instagram-cover';
          node.style.cursor = 'pointer';
          
          // Get Instagram post ID and create thumbnail URL
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
        }
        if (!node) return;
        node.style.animationDelay = `${Math.min(idx * 80, 400)}ms`;
        node.classList.add('reveal');
        grid.appendChild(node);
      });

      categorySection.appendChild(categoryTitle);
      categorySection.appendChild(grid);
      container.appendChild(categorySection);
    });
  } else {
    // Handle other gallery types (video, design)
    const grid = document.createElement('div');
    grid.className = 'gallery-grid reveal';

    data.items.forEach((item, idx) => {
      let node;
      if (item.type === 'img') {
        node = document.createElement('img');
        node.src = item.src;
        node.alt = item.alt || '';
        node.style.cursor = 'zoom-in';
        
        // Add click event directly when creating the image
        node.addEventListener('click', () => {
          openImageModal(item.src, item.alt || '', item.title || '', item.description || '');
        });
        
      } else if (item.type === 'youtube') {
        node = document.createElement('iframe');
        node.src = item.src;
        node.title = item.title || '';
        node.frameBorder = '0';
        node.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        node.allowFullscreen = true;
      } else if (item.type === 'tiktok') {
        // Create video cover for TikTok with actual thumbnail
        node = document.createElement('div');
        node.className = 'video-cover tiktok-cover';
        node.style.cursor = 'pointer';
        
        // Get TikTok video ID and create thumbnail URL
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
        // Create video cover for Instagram with actual thumbnail
        node = document.createElement('div');
        node.className = 'video-cover instagram-cover';
        node.style.cursor = 'pointer';
        
        // Get Instagram post ID and create thumbnail URL
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
      }
      if (!node) return;
      node.style.animationDelay = `${Math.min(idx * 80, 400)}ms`;
      node.classList.add('reveal');
      grid.appendChild(node);
    });

    container.appendChild(grid);
  }

  // Bind video previews after content is rendered
  setTimeout(() => {
    bindVideoPreview(container);
  }, 100);
  
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

function openImageModal(src, alt, title, description) { 
  console.log('Opening image modal:', { src, alt, title, description }); // Debug log
  const m = $('#image-modal'); 
  const img = $('#image-modal-img');
  const titleEl = $('#image-modal-title');
  const descEl = $('#image-modal-desc');
  if (!m || !img) {
    console.error('Image modal elements not found'); // Debug log
    return; 
  } 
  
  img.src = src; 
  img.alt = alt || '';
  titleEl.textContent = title || '';
  descEl.textContent = description || '';
  
  // Hide description if empty
  const descContainer = $('.image-description');
  if (descContainer) {
    descContainer.style.display = (title || description) ? 'block' : 'none';
  }
  
  m.classList.add('open'); 
  m.setAttribute('aria-hidden','false'); 
  document.body.style.overflow='hidden'; 
}
function closeImageModal() { 
  const m = $('#image-modal'); 
  if (!m) return; 
  m.classList.remove('open'); 
  m.setAttribute('aria-hidden','true'); 
  document.body.style.overflow=''; 
}
function initImageModal() { 
  const m = $('#image-modal'); 
  m?.addEventListener('click',(e)=>{ 
    if(e.target.hasAttribute('data-close')) closeImageModal(); 
  }); 
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
}

document.addEventListener('DOMContentLoaded', init); 