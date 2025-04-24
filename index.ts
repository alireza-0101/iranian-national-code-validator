/**
 * Iranian National Code Validator
 *
 * This function validates an Iranian national code.
 * It ensures the code meets the following criteria:
 * - Exactly 10 digits long.
 * - Not composed of all identical digits (e.g., "0123456789").
 * - Passes the checksum validation based on the official algorithm.
 *
 * The validation is based on the following mathematical algorithm:
 * 1. Multiply the first 9 digits of the code by weights from 10 to 2.
 * 2. Calculate the sum of these weighted values.
 * 3. Compute the remainder of the sum when divided by 11.
 * 4. Compare the remainder with the 10th digit (control digit):
 *    - If the remainder is less than 2, it must match the control digit.
 *    - If the remainder is 2 or greater, the control digit must equal `11 - remainder`.
 *
 * **Disclaimer:** This function is implemented based on the official mathematical algorithm
 * for validating Iranian national codes. However, it does not guarantee the authenticity
 * or legal validity of the provided code. Use this function at your own risk, and the
 * package assumes no responsibility for any consequences arising from its use.
 *
 * @param code - The national code to validate. It can be a string or a number.
 * @returns `true` if the code is valid, otherwise `false`.
 *
 * Example usage:
 * ```typescript
 * import nationalCodeValidator from 'iranian-national-code-validator';
 *
 * const isValidNationalCode: boolean = nationalCodeValidator("1234567891");
 *
 * if (isValidNationalCode) alert("Valid national code");
 * else alert("Invalid national code");
 * ```
 */

function nationalCodeValidator(code: string | number) {
  if (typeof code === "number") code = code.toString()

  if (!/^\d{10}$/.test(code)) return false

  const allDigitsSame = /^(\d)\1{9}$/
  if (allDigitsSame.test(code)) return false

  const digits = code.split("").map(Number)

  const weights = [10, 9, 8, 7, 6, 5, 4, 3, 2]
  let weightedSum = 0

  for (let i = 0; i < weights.length; i++) weightedSum += digits[i] * weights[i]

  const remainder = weightedSum % 11
  const controlDigit = digits[9]

  return (
    (remainder < 2 && controlDigit === remainder) ||
    (remainder >= 2 && controlDigit === 11 - remainder)
  )
}

export default nationalCodeValidator
