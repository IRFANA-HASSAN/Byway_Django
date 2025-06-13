class InstructorManager {
  constructor() {
    this.showAll = false;
    this.instructors = [
      {
        id: '1',
        name: 'Ronald Richards',
        title: 'UI/UX Designer',
        image: '/static/images/instructors/ronald.png',
        rating: 4.9,
        students: 2400,
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        title: 'Web Developer',
        image: '/static/images/instructors/ronald.png',
        rating: 4.8,
        students: 2100,
      },
      {
        id: '3',
        name: 'Michael Chen',
        title: 'Data Scientist',
        image: '/static/images/instructors/ronald.png',
        rating: 4.9,
        students: 1800,
      },
      {
        id: '4',
        name: 'Emily Brown',
        title: 'Digital Marketer',
        image: '/static/images/instructors/ronald.png',
        rating: 4.7,
        students: 1500,
      },
      {
        id: '5',
        name: 'David Wilson',
        title: 'Mobile Developer',
        image: '/static/images/instructors/ronald.png',
        rating: 4.8,
        students: 2200,
      },
      
    ];
    this.initialize();
  }

  initialize() {
    this.renderInstructors();
    const toggleButton = document.getElementById('toggle-instructors');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => this.toggleInstructors());
    }
  }

  createInstructorCard(instructor) {
    return `
      <div onclick="instructorManager.handleInstructorClick('${instructor.id}')" 
           class="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden py-8 px-4 text-center cursor-pointer hover:shadow-lg transition">
        <div class="w-4/5 h-3/5 mx-auto mb-4">
          <img src="${instructor.image}" 
               alt="${instructor.name}" 
               class="w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-blue-500 transition" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900">${instructor.name}</h3>
        <p class="text-sm font-normal text-gray-600">${instructor.title}</p>
        <hr class="my-4" />
        <div class="flex justify-center items-center gap-2 mt-2 text-sm">
          <span class="text-gray-900 font-semibold text-xs">⭐ ${instructor.rating}</span>
          <span class="text-xs text-gray-600 font-semibold">${instructor.students} Students</span>
        </div>
      </div>
    `;
  }

  renderInstructors() {
    const container = document.getElementById('instructors-container');
    let visibleInstructors = [...this.instructors];

    if (this.showAll) {
      // When showing all, duplicate the instructors to fill the grid
      const duplicates = this.instructors.map((ins, idx) => ({
        ...ins,
        id: ins.id + "-copy-" + idx,
      }));
      visibleInstructors = visibleInstructors.concat(duplicates);
    } else {
      // When not showing all, only show first 5 instructors
      visibleInstructors = visibleInstructors.slice(0, 5);
    }

    container.innerHTML = visibleInstructors.map(instructor => this.createInstructorCard(instructor)).join('');
    document.getElementById('toggle-instructors').innerText = this.showAll ? 'See Less' : 'See All';
  }

  toggleInstructors() {
    this.showAll = !this.showAll;
    this.renderInstructors();
  }

  handleInstructorClick(instructorId) {
    // TODO: Implement instructor click handling
    console.log(`Instructor clicked: ${instructorId}`);
  }
} 