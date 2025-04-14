// utils/validateEmail.ts

/**
 * Returns the Shannon entropy for a given string.
 * This measures the randomness of the text.
 */
const calculateShannonEntropy = (s: string): number => {
    const freq: Record<string, number> = {};
    for (const char of s) {
      freq[char] = (freq[char] || 0) + 1;
    }
    let entropy = 0;
    for (const char in freq) {
      const p = freq[char] / s.length;
      entropy -= p * Math.log2(p);
    }
    return entropy;
  };
  
  /**
   * A supercharged email validation function that applies:
   * 1. RFC 5322‑inspired regex check.
   * 2. Checks for consecutive dots and invalid characters.
   * 3. Domain structure verification.
   * 4. Disposable domain blocking.
   * 5. Heuristic rejection for obvious fake or low‑effort emails.
   * 6. Entropy analysis of the local part.
   *
   * @param email - The email string to validate.
   * @returns Whether the email is considered valid (and not fake).
   */
  export const validateEmail = (email: string): boolean => {
    // Step 1: RFC‑like regex
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
    // Remove extra spaces
    const trimmedEmail = email.trim();
  
    // Ensure minimal length and proper structure (exactly one "@")
    if (trimmedEmail.length < 6 || trimmedEmail.split('@').length !== 2) {
      return false;
    }
    const [localPart, domainPart] = trimmedEmail.split('@');
  
    // Step 2: Basic syntactical checks
    const hasConsecutiveDots = /\.\./.test(trimmedEmail);
    const hasInvalidLocalChars = /[^a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/.test(localPart);
    const hasValidDomain =
      typeof domainPart === 'string' &&
      domainPart.includes('.') &&
      domainPart.split('.').every(part => part.length > 0);
  
    // Check overall length per spec (254 max)
    if (
      !regex.test(trimmedEmail) ||
      hasConsecutiveDots ||
      hasInvalidLocalChars ||
      !hasValidDomain ||
      trimmedEmail.length > 254
    ) {
      return false;
    }
  
    // Step 3: Block disposable domains.
    const disposableDomains = new Set([
      "mailinator.com",
      "10minutemail.com",
      "yopmail.com",
      "tempmail.com",
      "guerrillamail.com",
      "trashmail.com",
      // Add more known disposable domains as needed.
    ]);
    if (disposableDomains.has(domainPart.toLowerCase())) {
      return false;
    }
  
    // Step 4: Heuristic patterns for obvious fakes (for the local part only)
    // These patterns catch emails like "test123", "asdf456", "abc789", "qwerty", "dummy", etc.
    const fakePatterns = [
      /^test[\d]*$/i,
      /^asdf[\d]*$/i,
      /^abc[\d]*$/i,
      /^qwerty[\d]*$/i,
      /^foo[\d]*$/i,
      /^bar[\d]*$/i,
      /^dummy[\d]*$/i,
      /^noreply[\d]*$/i,
      /^fake[\d]*$/i,
      /^demo[\d]*$/i,
      /^email[\d]*$/i
    ];
    if (fakePatterns.some(pattern => pattern.test(localPart))) {
      return false;
    }
  
    // Step 5: Check for overly numeric local parts.
    // If more than 50% of the characters in the local part are digits, reject it.
    const digitRatio = localPart.replace(/[^0-9]/g, "").length / localPart.length;
    if (digitRatio > 0.5) {
      return false;
    }
  
    // Step 6: Entropy analysis of the local part.
    // This catches low-effort strings like "abc123" or "111111".
    // Compute the Shannon entropy; if the local part is longer than 5 chars but its entropy is low,
    // then it's likely a low-quality/fake email.
    if (localPart.length >= 6) {
      const entropy = calculateShannonEntropy(localPart);
      // The threshold here is arbitrary—you might need to fine-tune based on your user base.
      // For example, "abc123" has an entropy of ~2.58 bits which is low relative to diverse strings.
      if (entropy < 2.5) {
        return false;
      }
    }
  
    // Passed all checks!
    return true;
  };
  