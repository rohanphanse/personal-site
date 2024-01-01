<div class = "close-lines">

Source Code: <a href = "https://github.com/rohanphanse/shape-wars" target = "_blank" rel="noreferrer">https://github.com/rohanphanse/shape-wars</a>

Live Demo: <a href = "https://shape-wars.roar123.repl.co" target = "_blank" rel="noreferrer">https://shape-wars.roar123.repl.co
</a>
</div>

# Shape Wars

I was tasked with creating a project for my AP Create Task and I wanted to challenge myself by coding an original game from scratch.

The result was Shape Wars, an original game I built with HTML, CSS, and JS! Command the arrow to defend the circle and defeat the enemy waves of triangles. I implemented healthbars, projectile motion, movement with WASD keys, pause / restart functionality, and score tracking with the highest score locally saved.

## Demo

The home screen:

<div class = "g-center-row">
    <img src = "/images/projects/shape-home.png" style = "width: 75%;" alt = "Functions Demo" />
</div>

The rules page consists of three flipcards where I've detailed the keyboard controls and game objectives.

<div class = "g-center-row">
    <img src = "/images/projects/shape-rules.png" style = "width: 75%;" alt = "Functions Demo" />
</div>

Gameplay:

<div class = "g-center-row">
    <img src = "/images/projects/shape-game.png" style = "width: 75%;" alt = "Functions Demo" />
</div>

## Featured Code

The code below calculates the RGB color of a sprite's healthbar from its percentage. For example, 70% maps to a color between green and yellow and 40% maps to a collor between yellow and red.

```js
// sprites.js; lines 345-372
update(percent) {
    // Use percent to determine the color of health bar
    // Which is either green, yellow, red, or any intermediate colors
    // Calculated with vector math as RGB colors are 3D vectors
    if (percent > 50 && percent <= 100) {
        const scale = 1 - (percent - 50) / 50
        const difference = vector_subtract(this.colors.yellow, this.colors.green)
        this.color = vector_add(this.colors.green, vector_scalar_product(difference, scale))
    } else if (percent > 10 && percent <= 50) {
        const scale = 1 - (percent - 10) / 40
        const difference = vector_subtract(this.colors.red, this.colors.yellow)
        this.color = vector_add(this.colors.yellow, vector_scalar_product(difference, scale))
    } else if (percent >= 0 && percent <= 10) {
        this.color = this.colors.red
    }
    this.bar.style.backgroundColor = `rgb(${this.color.join(",")})`
    this.bar.style.width = `${percent}%`
}
```