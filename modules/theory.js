/**
 * ==========================================================
 *  JAVASCRIPT MODULES — FRONTEND THEORY (Code Version)
 * ==========================================================
 * 
 * WHAT ARE MODULES?
 * --------------------
 * - Modules are separate JavaScript files that export and import code.
 * - They allow us to split a large program into smaller, manageable pieces.
 * - Each file becomes an independent, reusable unit of functionality.
 * 
 * Example:
 *  productData.js   → holds data
 *  domUtils.js      → handles DOM operations
 *  renderProduct.js → displays products on UI
 *  main.js          → connects everything together
 * 
 * ----------------------------------------------------------
 *  WHY MODULES ARE IMPORTANT (IN FRONTEND)
 * ----------------------------------------------------------
 * 1️⃣ Better Code Organization
 *     - Each feature or UI section has its own file.
 * 
 * 2️⃣ Reusability
 *     - A single function (like createElement) can be reused in multiple pages.
 * 
 * 3️⃣ Maintainability
 *     - Easier to debug and modify without touching other files.
 * 
 * 4️⃣ Readability
 *     - Smaller focused files → clearer separation of concerns.
 * 
 * 5️⃣ Avoid Global Conflicts
 *     - Variables inside modules are private by default.
 * 
 * ----------------------------------------------------------
 * 🧩 TYPES OF EXPORTS
 * ----------------------------------------------------------
 * 1️⃣ Named Export
 *    - Allows exporting multiple values from a module.
 * 
 *    Example:
 *    export const user = "Vamsi";
 *    export function greet() { console.log("Hello!"); }
 * 
 *    Import:
 *    import { user, greet } from "./user.js";
 * 
 * ----------------------------------------------------------
 * 2️⃣ Default Export
 *    - Used when a module exports only one main thing.
 * 
 *    Example:
 *    export default function loginUser() { ... }
 * 
 *    Import:
 *    import loginUser from "./auth.js";
 * 
 * ----------------------------------------------------------
 * 📦 IMPORT SYNTAX SUMMARY
 * ----------------------------------------------------------
 *  import { functionName } from "./module.js";    // Named import
 *  import something from "./module.js";          // Default import
 *  import * as Utils from "./utils.js";          // Import everything
 * 
 * ----------------------------------------------------------
 * 🔄 REAL-WORLD FRONTEND USE CASES
 * ----------------------------------------------------------
 * 1️⃣ E-Commerce Website
 *     - productData.js → product info
 *     - renderProduct.js → UI display logic
 *     - cartHandler.js → cart actions
 *     - main.js → connects and executes
 * 
 * 2️⃣ Portfolio Website
 *     - projectData.js → project list
 *     - renderCards.js → generates project cards
 *     - modalHandler.js → handles popup display
 * 
 * 3️⃣ Online Course Platform
 *     - courseList.js → contains all courses
 *     - renderCourse.js → renders cards and filters
 *     - enrollHandler.js → manages enroll actions
 * 
 * ----------------------------------------------------------
 * 🧱 BEST PRACTICES
 * ----------------------------------------------------------
 * ✅ Keep each module focused on ONE purpose.
 * ✅ Use clear, meaningful filenames (ex: domUtils.js, cartHandler.js).
 * ✅ Prefer named exports when you have multiple functions per file.
 * ✅ Use default export when a file focuses on a single main component.
 * ✅ Always use type="module" in HTML <script> tag.
 * 
 * Example:
 *    <script type="module" src="./main.js"></script>
 * 
 * ----------------------------------------------------------
 * 💡 COMMON MISTAKES
 * ----------------------------------------------------------
 * ❌ Using relative paths incorrectly (missing './' or '../').
 * ❌ Forgetting type="module" in HTML — imports won't work.
 * ❌ Mixing CommonJS (require/module.exports) in browser JS.
 * ❌ Using same function names in multiple modules (conflicts avoided by scoping).
 * 
 * ----------------------------------------------------------
 * 🧠 HOW MODULES EXECUTE
 * ----------------------------------------------------------
 * - Each imported module is executed once and cached by the browser.
 * - The same module is not re-run when imported multiple times.
 * - Import statements are always hoisted (run before other code).
 * 
 * ----------------------------------------------------------
 * 🔍 KEYWORDS SUMMARY
 * ----------------------------------------------------------
 * | Keyword | Purpose                                  | Example                    |
 * |----------|------------------------------------------|-----------------------------|
 * | export   | Share code from a module                 | export function greet() {} |
 * | import   | Bring code from another module           | import { greet } from './' |
 * | default  | Define the main export of a module       | export default Component   |
 * 
 * ----------------------------------------------------------
 * 🧩 CONCLUSION
 * ----------------------------------------------------------
 * JavaScript modules are the foundation of modern frontend development.
 * Frameworks like React, Angular, and Vue all rely heavily on modular structure.
 * 
 * When building your own project:
 * - Think in modules.
 * - Separate logic into files.
 * - Import only what you need.
 * 
 * Result: Clean, maintainable, scalable frontend codebase. 🚀
 * 
 * ==========================================================
 */
