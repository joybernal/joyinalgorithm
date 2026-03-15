export const PATHS = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:id',
  RESUME: '/resume',
  TECH_STACK: '/tech-stack',
  CERTIFICATIONS: '/certifications',
  CONTACT: '/contact',
} as const

export const getProjectDetailPath = (id: string) => `/projects/${id}`

// HR Module paths (organized structure example)
export const HR_PATHS = {
  LEAVE_MANAGEMENT: '/hr/leave-management',
  EMPLOYEE_BALANCES: '/hr/employee-balances',
  LEAVE_TYPES: '/hr/leave-types',
  ATTENDANCE: '/hr/attendance',
  ATTENDANCE_REPORTS: '/hr/attendance/reports',
  ATTENDANCE_LINK: '/hr/attendance-link',
  HIRING_POSITIONS: '/hr/hiring-positions',
  SUPERVISOR: {
    DASHBOARD: '/hr/supervisor/dashboard',
    LEAVE_MANAGEMENT: '/hr/supervisor/leave-management',
    EMPLOYEE_BALANCES: '/hr/supervisor/employee-balances',
    LEAVE_TYPES: '/hr/supervisor/leave-types',
    ATTENDANCE: '/hr/supervisor/attendance',
    ATTENDANCE_REPORTS: '/hr/supervisor/attendance/reports',
    ATTENDANCE_LINK: '/hr/supervisor/attendance-link',
  },
} as const
