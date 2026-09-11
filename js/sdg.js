
    // Solution data mapping
    const solutions = {
      'digital-divide': {
        title: 'Reducing Digital Divide',
        image: '../assets/pictures/code 1.jpg',
        text: 'IamtheCODE Club helps bridge the digital divide by lending free laptops and devices to students without home access. Through coding clubs and learning programs, learners can use these tools to practice programming, complete projects, and participate in digital activities. By providing hands-on access to technology, IamtheCODE ensures all students can develop essential coding and digital skills in an inclusive learning environment.'
      },
      'out-of-school': {
        title: 'Community Outreach Program',
        image: '../assets/pictures/code 2.jpg',
        text: 'Despite improved access to education, some children in nearby communities remain out of school. To address this, Dr. Ammar N. Torrevillas, together with the IamtheCODE Club adviser and the teaching and non-teaching staff of Culiat High School, conducts outreach in the Muslim compound to encourage families to enroll their children. This direct engagement helps bring out-of-school youth back into formal education and reinforces the school\'s commitment to inclusive, quality learning under SDG 4.'
      },
      'gender-inequality': {
        title: 'Empowering Women in Education and Technology',
        image: '../assets/pictures/code 3.jpg',
        text: 'IamtheCODE Club tackles gender inequality by empowering girls and women through inclusive technology education. By providing safe learning spaces, encouraging participation in coding activities, and offering mentorship, the program helps women build confidence and digital skills. It also challenges stereotypes and barriers that limit access to education, promoting equal opportunities for learning and leadership. Through skills development and peer support, women are empowered to fully engage in education and pursue opportunities in technology and beyond.'
      },
      'learning-crisis': {
        title: 'Learning Through Collaboration',
        image: '../assets/pictures/code 4.jpg',
        text: 'IamtheCODE Club addresses the learning crisis by fostering collaborative and interactive learning environments. Through group programming, peer-to-peer teaching, and teamwork-based projects, students share ideas, explain concepts, and solve problems together. This approach enhances understanding, reinforces knowledge retention, and builds confidence in applying skills. By emphasizing active participation over passive instruction, IamtheCODE ensures students genuinely learn and develop essential problem-solving and digital skills.'
      }
    };

    // Modal elements
    const modal = document.getElementById('solutionModal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalText = document.getElementById('modalText');

    // Open modal function
    function openSolutionModal(solutionKey) {
      const solution = solutions[solutionKey];
      if (solution) {
        modalTitle.textContent = solution.title;
        modalImage.src = solution.image;
        modalImage.alt = solution.title;
        modalText.textContent = solution.text;
        
        modal.classList.add('active');
        document.body.classList.add('modal-open');
      }
    }

    // Close modal function
    function closeSolutionModal() {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }

    // Event listeners for problem cards
    document.querySelectorAll('.w-card').forEach(card => {
      card.addEventListener('click', function() {
        const solutionKey = this.getAttribute('data-solution');
        openSolutionModal(solutionKey);
      });

      // Keyboard support
      card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const solutionKey = this.getAttribute('data-solution');
          openSolutionModal(solutionKey);
        }
      });
    });

    // Close modal on button click
    modalClose.addEventListener('click', closeSolutionModal);

    // Close modal on background click
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeSolutionModal();
      }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeSolutionModal();
      }
    });

    // FAQ toggle with character swap
    const thinkingImage = "../assets/pictures/thinking.jpg";
    const ideaImage = "../assets/pictures/idea.jpg";

    function toggleFAQ(selectedCard) {
      const all = document.querySelectorAll(".faq-card");
      const character = document.getElementById("faqCharacter");
      all.forEach(c => { if (c !== selectedCard) c.classList.remove("active"); });
      selectedCard.classList.toggle("active");
      if (character) {
        character.style.opacity = "0";
        setTimeout(() => {
          character.src = selectedCard.classList.contains("active") ? ideaImage : thinkingImage;
          character.style.opacity = "1";
        }, 150);
      }
    }

    // keyboard support for FAQ cards
    document.querySelectorAll('.faq-card').forEach(card => {
      card.setAttribute('tabindex', '0');
      card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFAQ(card);
        }
      });
      card.addEventListener('click', () => {
        toggleFAQ(card);
      });
    });

    // value-card toggle (if value cards exist)
    document.querySelectorAll('.value-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.value-card').forEach(c => { if (c !== card) c.classList.remove('active'); });
        card.classList.toggle('active');
      });
    });
  