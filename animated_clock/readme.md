# Animated clock using Canvas.

- # Canvas 2D Rendering Context

## Overview

The Canvas 2D rendering context, accessed through the `getContext("2d")` method on a `<canvas>` element, provides a powerful API for drawing and manipulating graphics in 2D space within a web page.

## Purpose

The primary purpose of the Canvas 2D rendering context is to enable developers to dynamically generate and manipulate graphics, such as shapes, paths, text, and images, directly within the browser. It is commonly used for creating dynamic visualizations, games, charts, and other interactive content on web pages.

## Key Features

- **Drawing Primitives:** Allows drawing basic shapes like rectangles, circles, and lines, as well as complex paths and curves.[.arc()]
- **Styling and Color:** Provides options for styling and filling shapes with colors, gradients, patterns, and transparency.[.fillstyle()/.strokeStyle]
- **Text Rendering:** Supports rendering text with various fonts, sizes, styles, and alignments.[.linewidth()]
- **Image Manipulation:** Enables loading, displaying, and manipulating images directly on the canvas.
- **Transformation:** Allows translating, rotating, scaling, and transforming the coordinate system to create complex compositions.
- **Animation:** Used in conjunction with requestAnimationFrame to create smooth and efficient animations.

## Conclusion

The Canvas 2D rendering context is a versatile tool for creating dynamic and interactive visual content on the web. With its extensive set of features, developers can create engaging user experiences ranging from simple graphics to complex animations and games.

# RequestAnimationFrame

## Overview

`requestAnimationFrame` is a method used in web development to schedule the execution of a function to be called before the next repaint of the browser. It's commonly utilized for creating smooth and efficient animations on web pages.

## Purpose

The primary purpose of `requestAnimationFrame` is to synchronize animations with the browser's refresh rate, typically around 60 times per second. This synchronization ensures that animations are smooth, fluid, and efficient, avoiding unnecessary rendering when the animation is not visible or the browser tab is inactive.

## Key Features

- **Optimized Performance:** Runs animations at the browser's optimal frame rate, typically around 60 frames per second, resulting in smoother animations and reduced CPU usage.
- **Synchronized with Browser Repaints:** Ensures that animations are updated only when the browser is ready to paint, reducing unnecessary rendering and improving performance.
- **Battery Efficiency:** Helps conserve battery power on mobile devices and laptops by avoiding unnecessary rendering when animations are not visible or the browser tab is inactive.
- **Automatic Frame Skipping:** Automatically skips frames to maintain the smoothness of the animation if the browser is busy and cannot maintain the desired frame rate.
- **Automatic Pausing:** Animations automatically pause when the browser tab is in the background or minimized, conserving CPU resources and improving browser responsiveness.

# How to download image in png format from canvas

- const dataURL = canvas.toDataURL("image/png") we are fetch url link of image that drawing within canvas.
- document.createElement("a") create an link tag.
- link.download = "clock.png"; Attached download file name.
- .href where we provide image reference.
