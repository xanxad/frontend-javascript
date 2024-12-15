// task_4/js/subjects/Subject.ts

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    constructor() {
      this.teacher = { firstName: "", lastName: "" }; // Initializing with empty strings
    }

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
