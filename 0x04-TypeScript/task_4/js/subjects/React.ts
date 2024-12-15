// task_4/js/subjects/React.ts

namespace Subjects {
  // Declaration merging to add the experienceTeachingReact property to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingReact === undefined ||
        this.teacher.experienceTeachingReact === 0
      ) {
        return "No available teacher";
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
