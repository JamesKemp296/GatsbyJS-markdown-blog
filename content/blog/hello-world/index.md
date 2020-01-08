---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](http://en.wikipedia.org/wiki/Salted_duck_egg)

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg)

```javascript
const pall = str => {
  if (!str || str.length === 0 || /^\s*$/.test(str)) return "not a pally"
  let f = str.length - 1
  for (i = 0; i <= str.length / 2; i++) {
    if (str[f] !== str[i]) return "not a pally"
    f = f - 1
  }
  return "is a pally"
}

const mysrt = "qwerttrewq"
console.log(pall(mysrt))
```
