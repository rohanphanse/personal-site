<div class = "close-lines">

Source Code: <a href = "https://github.com/rohanphanse/grapher" target = "_blank" rel="noreferrer">https://github.com/rohanphanse/grapher</a>

Live Demo: <a href = "https://rohanphanse.github.io/grapher" target = "_blank" rel="noreferrer">https://rohanphanse.github.io/grapher
</a>
</div>

# Grapher

I love [Desmos](https://www.desmos.com/calculator) and use it all the time, but I was disappointed when I found out they didn't support slope and vector fields. So I decided to take on the challenge and code my own graphing calc with the desired functionality. After a lot of hard work and some intense mathematics 🙂, I'm proud to present the result, Grapher!

## Features
* Graph functions, slope fields, vector fields, polar, and parametric
* Zoom in and out (with animations 🥳)
* Beautiful rendering on Javascript canvas
* Powerful and intuitive syntax
* Set custom domain for polar and parametric graphs

## Guide + Demos
**Functions:** Enter a function f(x) by writing any expression with the <code class="language-txt">x</code> variable. Separate multiple graphs with semicolons. 

For this demo, I've graphed the parabola <code class="language-txt">x^2</code>, the sine curve <code class="language-txt">sin(x) - 2</code>, the line <code class="language-txt">-3(x + 4)</code>, and the function <code class="language-txt">1/x</code>.

<div class = "g-center-row">
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/functions.png" style = "width: 75%;" alt = "Functions Demo" style = "margin: 0 auto" />
</div>

I'm using the wonderful [math.js](https://mathjs.org/docs/reference/functions.html) library for evaluating math expressions. Here are a few useful functions and constants you can use in Grapher.

* Trig functions: <code class="language-txt">sin(x)</code>, <code class="language-txt">cos(x)</code>, <code class="language-txt">tan(x)</code>, <code class="language-txt">sec(x)</code>, <code class="language-txt">asin(x)</code> (inverse sine), ...
* Square root: <code class="language-txt">sqrt(x)</code>
* Natural logarithm (base e): <code class="language-txt">log(x)</code>
* Constants: <code class="language-txt">pi</code>, <code class="language-txt">e</code>


**Slope Fields:** Start off with the prefix <code class="language-txt">s:</code> and enter an expression in terms of <code class="language-txt">x</code> and <code class="language-txt">y</code>.

For this demo, I'm graphing the family of sine curves <code class="language-txt">sin(x) + C</code> and the slope field of <code class="language-txt">cos(x)</code>. I've also included a hyperbola <code class="language-txt">x^2 - y^2 = 1</code> and the slope field <code class="language-txt">x/y</code>.

<div class = "two-image-row">
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/sines.png" alt = "Sines Slope Field Demo" />
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/hyperbola.png" alt = "Hyperbola Slope Field Demo" />
</div>

**Vector Fields:** Use the prefix <code class="language-txt">v:</code> and enter an expression in the form of <code class="language-txt">v: (f(x, y), g(x, y))</code>. The 2 functions of <code class="language-txt">x</code> and <code class="language-txt">y</code> inside the paranetheses are the x- and y-components of the vector.

For this demo, I've graphed a dipole vector field, which represents the electric field lines between a positive and negative charge in physics.

<div class = "g-center-row">
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/dipole.png" style = "width: 75%;" alt = "Vector Field Demo" style = "margin: 0 auto" />
</div>

**Polar:** Use the prefix <code class="language-txt">r =</code>&nbsp;and enter an expression in the form of <code class="language-txt">r = f(t)</code>.

For this demo, I've graphed 4 polar curves:
1. Rose curve: <code class="language-txt">r = sin(4t)</code> (8 petals)
2. Archimedes spiral: <code class="language-txt">r = t [0, 16pi]</code> (setting custom t-domain, default is <code class="language-txt">[0, 2pi]</code>)
3. Limaçons: <code class="language-txt">r = 1 + sin(t)</code> (cardioid), <code class="language-txt">r = 1 + 2sin(t)</code> (inner loop), and <code class="language-txt">r = 3 + 2sin(t)</code> (dimpled)
<code class="language-txt">r = 0; r = -5sin(t); r = 4cos(t); r = -3cos(t)</code>

<div class = "spacer"></div>

<div class = "two-image-row">
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/rose.png"  />
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/spiral.png" />
</div>
<div class = "two-image-row">
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/limacons.png"  />
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/circles.png" />
</div>


**Parametric:** Use prefix <code class="language-txt">p:</code> and enter in form of <code class="language-txt">p: x = f(t), y = g(t)</code>. 

For this demo, I've graphed the beautiful [butterfly curve](https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)). Because this curve is so intricate, I upped the numbers of intervals from 1,000 (default) to 10,000.

<div class = "g-center-row">
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/butterfly.png" style = "width: 75%" alt = "Function Demo" />
</div>

Bonus: [Gamma](https://en.wikipedia.org/wiki/Gamma_function) function, the continuation of the factorial function to decimal and complex numbers (graphed with 10,000 intervals). 

<div class = "g-center-row">
    <img src = "https://raw.githubusercontent.com/rohanphanse/grapher/main/images/gamma.png" style = "width: 75%" alt = "Vector Field Demo" style = "margin: 0 auto" />
</div>

## Featured Code

The code below constructs a rotated equilateral triangle at the endpoint of a vector. I use this function to help construct vector fields.

```js
// /js/grapher.js; lines 394-405
drawVectorTriangle(point, vector) {
    const angle = Math.atan(vector.y / vector.x)
    const side = 5
    // Draw rotated vector triangle on canvas
    this.ctx.beginPath()
    this.ctx.moveTo(point.x, point.y)
    this.ctx.lineTo(point.x - side/2 * Math.sin(angle), point.y - (side/2 * Math.cos(angle)))
    this.ctx.lineTo(point.x + side*Math.sqrt(3)/2 * Math.cos(angle) * Math.sign(vector.x), point.y - (side*Math.sqrt(3)/2 * Math.sin(angle)) * Math.sign(vector.x))
    this.ctx.lineTo(point.x + side/2 * Math.sin(angle), point.y + (side/2 * Math.cos(angle)))
    this.ctx.fill()
}
```

To construct the rotated equilibrium triangle, the code determines the three vertices of the triangle using a given point (x, y) and an angle θ​, and draws it on the HTML canvas. Here is a diagram of the math I did to write this code:

<div class = "g-center-row">
    <img src = "/images/projects/grapher-diagram.png" style = "width: 75%" alt = "Grapher Diagram" />
</div>

And that's it! Thanks for checking out my project and use Grapher to visualize whatever your heart desires!