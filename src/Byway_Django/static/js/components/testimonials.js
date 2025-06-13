class TestimonialCarousel {
  constructor() {
    this.testimonials = [
      {
        id: '1',
        name: 'Jane Doe',
        role: 'Designer',
        message: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
        image: '/static/images/testimonials/jane.svg'
      },
      {
        id: '2',
        name: 'John Smith',
        role: 'Developer',
        message: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
        image: '/static/images/testimonials/jane.svg'
      },
      {
        id: '3',
        name: 'Alice Johnson',
        role: 'Engineer',
        message: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
        image: '/static/images/testimonials/jane.svg'
      },
      {
        id: '4',
        name: 'Mike Lee',
        role: 'Tech Lead',
        message: 'Top-quality content for skill development.',
        image: '/static/images/testimonials/jane.svg'
      },
      {
        id: '5',
        name: 'Sara Park',
        role: 'UX Designer',
        message: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
        image: '/static/images/testimonials/jane.svg'
      },
      {
        id: '6',
        name: 'John Smith',
        role: 'Developer',
        message: 'Great for staying competitive in tech.',
        image: '/static/images/testimonials/jane.svg'
      }
    ];

    this.currentIndex = 0;
    this.visibleCards = this.getVisibleCards();
    this.track = document.getElementById('testimonial-track');
    
    // Initialize the carousel
    this.init();
  }

  init() {
    // Update visible cards on window resize
    window.addEventListener('resize', () => {
      this.visibleCards = this.getVisibleCards();
      this.renderTestimonials();
    });

    // Initial render
    this.renderTestimonials();
  }

  getVisibleCards() {
    const width = window.innerWidth;
    return width < 768 ? 1 : width < 980 ? 2 : 3;
  }

  renderTestimonials() {
    if (!this.track) return;

    const trackWidth = (this.testimonials.length * 100) / this.visibleCards;
    const itemWidth = 100 / this.testimonials.length;
    const translateX = `-${itemWidth * this.currentIndex}%`;

    this.track.style.width = `${trackWidth}%`;
    this.track.style.transform = `translateX(${translateX})`;

    this.track.innerHTML = this.testimonials.map(t => `
      <div class="px-2 my-4 shrink-0" style="width: ${itemWidth}%">
        <div class="bg-white shadow-[0_0_3px_0.5px_#3B82F61F] rounded-xl p-4 h-full flex flex-col justify-between">
          <div class="text-blue-500 text-2xl mb-2 py-4">
            <img src="/static/images/assets/icons/quotes.svg" alt="Quote" class="w-10 h-10" />
          </div>
          <p class="text-base font-normal text-black mb-4 max-w-screen-xl w-full sm:w-11/12 md:w-4/5 lg:w-5/6 xl:w-4/5">
            ${t.message}
          </p>
          <div class="flex items-center gap-3 mt-auto">
            <img src="${t.image}" alt="${t.name}" class="w-16 h-16 rounded-full object-cover" />
            <div>
              <p class="text-lg font-semibold text-black">${t.name}</p>
              <p class="text-sm font-normal text-[#334155]">${t.role}</p>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  nextSlide() {
    const maxIndex = this.testimonials.length - this.visibleCards;
    this.currentIndex = this.currentIndex + 1 > maxIndex ? 0 : this.currentIndex + 1;
    this.renderTestimonials();
  }

  prevSlide() {
    const maxIndex = this.testimonials.length - this.visibleCards;
    this.currentIndex = this.currentIndex - 1 < 0 ? maxIndex : this.currentIndex - 1;
    this.renderTestimonials();
  }
} 