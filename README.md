# Iranian National Code Validator

A lightweight and reliable utility to validate Iranian national codes based on the official mathematical algorithm. This package ensures the provided code meets all the necessary criteria for validity.

---

## ✨ Features

- ✅ Validates **10-digit** Iranian national codes.
- ✅ Ensures the code is **not composed of identical digits** (e.g., `0123456789`).
- ✅ Implements the **official checksum algorithm** for validation.
- ✅ Supports both **string** and **number** inputs.

---

## 📋 How It Works

The validation is based on the following mathematical algorithm:

1. Multiply the first **9 digits** of the code by weights from **10 to 2**.
2. Calculate the **sum** of these weighted values.
3. Compute the **remainder** of the sum when divided by **11**.
4. Compare the remainder with the **10th digit** (control digit):
   - If the remainder is **less than 2**, it must match the control digit.
   - If the remainder is **2 or greater**, the control digit must equal `11 - remainder`.

---

## 🚨 Disclaimer

This function is implemented based on the **official mathematical algorithm** for validating Iranian national codes. However, it does **not guarantee the authenticity or legal validity** of the provided code. Use this function at your own risk. The package assumes **no responsibility** for any consequences arising from its use.

---

## 📦 Installation

Install the package using npm or yarn:

```bash
npm install iranian-national-code-validator
```

or

```bash
yarn add iranian-national-code-validator
```

---

## 🚀 Usage

Import the function and validate your national codes:

```typescript
import nationalCodeValidator from "iranian-national-code-validator"

const isValidNationalCode: boolean = nationalCodeValidator("0012345678")

if (isValidNationalCode) {
  console.log("✅ Valid national code")
} else {
  console.log("❌ Invalid national code")
}
```

---

## 🛠️ Example Scenarios

```typescript
import nationalCodeValidator from "iranian-national-code-validator"

const isValidNationalCode: boolean = nationalCodeValidator("1234567891")

if (isValidNationalCode) alert("Valid national code")
else alert("Invalid national code")
```

---

## 📖 License

This package is licensed under the **MIT License**. Feel free to use it in your projects.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this package.

---

## 🌟 Support

If you find this package helpful, please give it a ⭐ on GitHub!
