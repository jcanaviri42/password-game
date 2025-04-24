export const CONDITIONS = [
  {
    text: 'Your password must be at least 5 characters.',
    valid: false,
    check: (pw: string) => pw.length >= 5,
  },
  {
    text: 'Your password must include a number.',
    valid: false,
    check: (pw: string) => /\d/.test(pw),
  },
  {
    text: 'Your password must include an uppercase letter.',
    valid: false,
    check: (pw: string) => /[A-Z]/.test(pw),
  },
  {
    text: 'Your password must include an lowercase letter',
    valid: false,
    check: (pw: string) => /[a-z]/.test(pw),
  },
  {
    text: 'Your password must include a special character.',
    valid: false,
    check: (pw: string) => /[!@#$%^&*]/.test(pw),
  },
  {
    text: 'Your Password must include at least one vowel',
    valid: false,
    check: (pw: string) => /[aeiouAEIOU]/.test(pw),
  },
  {
    text: 'The digits in your password must add up to 25.',
    valid: false,
    check: (pw: string) => {
      // Extract digits from password
      const digits = pw.match(/\d/g);
      if (!digits) return false;
      // Sum digits as numbers
      const sum = digits.reduce((acc, d) => acc + Number(d), 0);
      return sum === 25;
    },
  },
  {
    text: 'Your password must include a month of the year.',
    valid: false,
    check: (pw: string) => {
      const months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
      ];
      const pwLower = pw.toLowerCase();
      return months.some((month) => pwLower.includes(month));
    },
  },
  {
    text: 'Your password must include a roman numeral.',
    valid: false,
    check: (pw: string) => /[IVXLCDM]/i.test(pw),
  },
];
