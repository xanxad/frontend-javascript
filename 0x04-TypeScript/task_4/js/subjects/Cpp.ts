// task_4/js/subjects/Cpp.ts

namespace Subjects {
  // Declaration merging to add the experienceTeachingC property to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingC === undefined ||
        this.teacher.experienceTeachingC === 0
      ) {
        return "No available teacher";
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
