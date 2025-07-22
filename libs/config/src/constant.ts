export const constant = {
  USER: {
    TYPE: {
      ADMINISTRATOR: 'A',
      APP_USER: 'U',
    },
    STATUS: {
      ACTIVE: 'A', // ACTIVE USER
      INACTIVE: 'I', // DOES NOT LOGIN FOR CERTAIN AMOUNT OF DAYS
      SUSPENDED: 'S', // NOT ALLOWED TO ACCESS THE SYSTEM
      DEACTIVATE: 'D', // NO LONGER USED THE SYSTEM
    },
  },
} as const;
