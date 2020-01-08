---
title: My First Code Interview
date: "2020-01-03"
description: I went in for my first code challenge a for a jr developer roll. While I didn't get the job, I learned a lot in the process.
---

<!-- prettier-ignore-start -->

some thoughts here

```javascript
const palindrome = str => {
  if (str === str.split("").reverse().join("")) return"is a palindrome"
  return "not a palindrome"
}

const mysrt = "qwerttrewq"
console.log(palindrome(mysrt))
```

Some more thoughts

```javascript
const palindrome = str => {
  let newString = ""
  for (i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  if (str === newString) return "is a palindrome"
  return "not a palindrome"
}

const mysrt = "qwerttrewq"
console.log(palindrome(mysrt))
```

Lorum ipsum I guess

```javascript
const palindrome = str => {
  if (!str || str.length === 0 || /^\s*$/.test(str)) return "not a palindrome"
  let f = str.length - 1
  for (i = 0; i <= str.length / 2; i++) {
    if (str[f] !== str[i]) return "not a palindrome"
    f = f - 1
  }
  return "is a palindrome"
}

const mysrt = "qwerttrewq"
console.log(palindrome(mysrt))
```

and that is why lorum ipsum

<!-- prettier-ignore-end -->
