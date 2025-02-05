# Next.js router.push() Asynchronous Navigation Issue

This repository demonstrates a common issue with Next.js's `router.push()` method:  the asynchronous nature of navigation.  Code following a `router.push()` call might execute before the actual route change completes, leading to unexpected behavior. 

The `bug.js` file shows a scenario where this problem arises. The solution is provided in `bugSolution.js`