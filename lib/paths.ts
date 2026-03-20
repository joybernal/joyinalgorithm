export const PATHS = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:id',
  UI_PROJECT: '/ui/:project',
  RESUME: '/resume',
  TECH_STACK: '/tech-stack',
  CERTIFICATIONS: '/certifications',
  CONTACT: '/contact',
} as const;

// HR Module Paths (for organized routes like the example)
export const HR_PATHS = {
  HR_LEAVE_MANAGEMENT: '/hr/leave-management',
  HR_EMPLOYEE_BALANCES: '/hr/employee-balances',
  HR_LEAVE_TYPES: '/hr/leave-types',
  HR_ATTENDANCE: '/hr/attendance',
  HR_ATTENDANCE_REPORTS: '/hr/attendance/reports',
  HR_ATTENDANCE_LINK: '/hr/attendance-link',
  HR_SUPERVISOR_DASHBOARD: '/hr/supervisor/dashboard',
  HR_SUPERVISOR_LEAVE_MANAGEMENT: '/hr/supervisor/leave-management',
  HR_SUPERVISOR_EMPLOYEE_BALANCES: '/hr/supervisor/employee-balances',
  HR_SUPERVISOR_LEAVE_TYPES: '/hr/supervisor/leave-types',
  HR_SUPERVISOR_ATTENDANCE: '/hr/supervisor/attendance',
  HR_SUPERVISOR_ATTENDANCE_REPORTS: '/hr/supervisor/attendance/reports',
  HR_SUPERVISOR_ATTENDANCE_LINK: '/hr/supervisor/attendance-link',
  HR_HIRING_POSITIONS: '/hr/hiring-positions',
} as const;

export type PathKey = keyof typeof PATHS;
export type HRPathKey = keyof typeof HR_PATHS;

// Helper function to generate project detail paths
export const getProjectDetailPath = (id: string) => `/projects/${id}`;

export const getUiProjectPath = (project: string) => `/ui/${project}`;
