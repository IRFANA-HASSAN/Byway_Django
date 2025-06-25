class CourseManager {
  constructor() {
    this.showAll = false;
    this.courses = [];
    this.initialize();
  }

  async initialize() {
    await this.fetchCourses();
    document.getElementById('toggle-courses').addEventListener('click', () => this.toggleCourses());
  }

  async fetchCourses() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.courses = await response.json();
      this.renderCourses();
    } catch (error) {
      console.error('Failed to fetch courses:', error);
      this.handleError();
    }
  }

  createCourseCard(course) {
    const stars = '★'.repeat(Math.round(course.rating.rate)) + '☆'.repeat(5 - Math.round(course.rating.rate));
    const title = course.title.length > 40 ? course.title.slice(0, 40) + '...' : course.title;

    return `
      <a href="/product/?id=${course.id}" class="block h-full">
    <div class="bg-white border border-gray-300 product-card rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col h-full">
      <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-contain p-4" />
      <div class="px-4 pb-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 class="font-semibold text-lg text-gray-900 leading-tight mt-2">${title}</h3>
          <p class="text-sm font-normal text-gray-600">By Ronald Richards</p>
          <div class="flex items-center text-yellow-500 mt-1">
            ${stars}
            <span class="text-gray-600 text-xs font-semibold ml-1">
              (${course.rating.count} Ratings)
            </span>
          </div>
          <p class="text-sm font-normal text-gray-600 mt-1">22 Total Hours. 155 Lectures. Beginner</p>
        </div>
        <p class="text-xl font-bold text-gray-900 mt-2">$${course.price}</p>
      </div>
    </div>
  </a>
    `;
  }

  renderCourses() {
    const container = document.getElementById('courses-container');
    const toggleBtn = document.getElementById('toggle-courses');
    const visible = this.showAll ? this.courses : this.courses.slice(0, 4);

    container.innerHTML = visible.map(course => this.createCourseCard(course)).join('');
    toggleBtn.textContent = this.showAll ? 'See Less' : 'See All';
  }

  toggleCourses() {
    this.showAll = !this.showAll;
    this.renderCourses();
  }

  handleError() {
    const container = document.getElementById('courses-container');
    container.innerHTML = `
      <div class="col-span-full text-center py-8">
        <p class="text-red-500">Failed to load courses. Please try again later.</p>
        <button onclick="courseManager.fetchCourses()" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Retry
        </button>
      </div>
    `;
  }
}

// Initialize the course manager
const courseManager = new CourseManager(); 