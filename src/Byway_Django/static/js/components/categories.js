class CategoryManager {
  constructor() {
    this.showAll = false;
    this.initialize();
  }

  initialize() {
    this.renderCategories();
    document.getElementById('toggle-btn').addEventListener('click', () => this.toggleCategories());
  }

  renderCategories() {
    const container = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3.xl\\:grid-cols-4');
    const categories = Array.from(container.children);
    
    if (this.showAll) {
      // Show all categories
      categories.forEach(category => {
        category.style.display = 'block';
      });
    } else {
      // Show only first 4 categories
      categories.forEach((category, index) => {
        category.style.display = index < 4 ? 'block' : 'none';
      });
    }

    // Update button text
    document.getElementById('toggle-btn').innerText = this.showAll ? 'See Less' : 'See All';
  }

  toggleCategories() {
    this.showAll = !this.showAll;
    this.renderCategories();
  }
}
