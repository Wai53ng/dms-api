export const constant = {
  USER: {
    GENDER: {
      MALE: 'M',
      FEMALE: 'F',
    },
    TYPE: {
      SYSTEM_ADMINISTRATOR: 'S',
      APPLICATION_USER: 'A',
    },
    STATUS: {
      ACTIVE: 'A',
      INACTIVE: 'I',
    },
  },
  DEPARTMENT: {
    STATUS: {
      ACTIVE: 'A',
      CLOSED: 'C',
    },
  },
  BRANCH: {
    STATUS: {
      ACTIVE: 'A',
      CLOSED: 'C',
    },
  },
} as const;
