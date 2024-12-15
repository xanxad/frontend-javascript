// task_4/js/subjects/Java.ts

namespace Subjects {
  // Declaration merging to add the experienceTeachingJava property to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingJava === undefined ||
        this.teacher.experienceTeachingJava === 0
      ) {
        return "No available teacher";
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
