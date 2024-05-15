interface StudentInfo {
  name: string;
  id: number;
  dept?: string;
}

function updateStInfo(student: StudentInfo, updates: Partial<StudentInfo>): StudentInfo {
  // Create a new object with the properties of 'student'
  // and then overwrite with any properties in 'updates'
  return { ...student, ...updates };
}

// Assuming 'sadikInfo' is of type 'StudentInfo' and already defined
const sadikUpdated: StudentInfo = updateStInfo(sadikInfo, { dept: "CSE" });
