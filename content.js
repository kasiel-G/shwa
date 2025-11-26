class lesson {
    constructor(level,title,description,category,Structure,Examples,notes) {
        this.level = level;
        this.title = title;
        this.category=category;
        this.description=description;
        this.Structure=Structure;
        this.Examples=Examples;
        this.notes=notes;
}
    cree() {
        const section = document.createElement("section");
        const divHeader = document.createElement("div");
        const badge = document.createElement("div");
        const title = document.createElement("h2");
        const description = document.createElement("p");
        section.id = "lesson";
        section.className = "lesson-container";
        divHeader.className = "lesson-header";
        badge.className = "lesson-badge";
        title.className = "lesson-title";
        description.className = "lesson-description";
        badge.textContent = this.level + this.category;
        title.textContent = this.title;

    }
}