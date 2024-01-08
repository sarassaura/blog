---
title: How to Make an Accessible Website
author: Sarah Yukino Nakada
description: 'How to make an accessible website'
image:
  url: 'https://yoast.com/cdn-cgi/image/width=1012%2Cheight=531%2Cdpr=2%2Cfit=cover%2Cf=auto%2Cquality=75%2Conerror=redirect/app/uploads/2015/11/accessibility_matters_fi_2400x1350.png'
  alt: 'Accessibility'
pubDate: 2024-01-08
tags: ['accessibility']
---

1. **Color**

   1. Contrast Ratio: It's the contrast between the text and background color values.

      1. Ensures readability, especially for people with color deficiency.
      1. It's calculated by dividing the lighter value by the darker value.
      1. The values range from 0 to 1, where 0 is black and 1 is white.
      1. The exact formula is (V1 + 0.05) / (V2 + 0.05). Lighter / Darker.
      1. Contrast ranges from 0 to 21, the 0.05 is to prevent dividing by 0.

   2. Contrast Levels: Defined by the WCAG standards.

      1. Failing: Less than the minimum AA.
      1. AA: Should be 4.5 for normal text or 3 for large text.
      1. AAA: Should be 7 for normal text or 4.5 for large text.
      1. Large text: 18pt+ for regular and 14pt+ for bold.

   3. Dark Mode: To avoid light sensitivity, eye strain and migraines.

   4. High-Contrast Theme: Themes with a black background and neon colors.

   5. Technique: Turn your colors into grayscale and see if it's still readable.

2. **Semantic HTML**
