*Credit to <a href = "https://www.pngitem.com/middle/iRwoRob_haskell-programming-language-logo-hd-png-download/" target = "_blank">pngitem.com</a> for Haskell Logo.*

**I'm well-versed with Object-Oriented Programming (OOP) and I love writing beautiful classes, using loops, and mutating data**. While I had learned multi-paradigm languages like Python and JavaScript which support first-class functions and give you the `map` and `filter` functions, I had not yet forayed into the territory of purely functional languages. If I was to embark on the quest to learn one of these "dreaded" languages, I would have to forgo my beloved objects, for loops, and even the simple act of reassigning a variable. Well, thanks to the ingenuity of Haskell, turns out those things weren't actually that hard to leave behind 🙂.

**The beauty of Haskell is that the building block of the language is the lambda function.** Basically, a lambda function is one which maps every input to an output without incurring any side-effects (aka doing any funny business) in the process. When you were writing functions like `f(x) = 2x + 1` in math class, you were writing a λ function. In fact, the way you would write this function in Haskell - `f x = 2*x + 1` - does closely resemble mathematical notation.

You may be thinking, if the the building block of Haskell is a function, **how do you make plain variables** which don't act like functions, but simply hold data. I had the same question, and then I realized that a variable is really a function which takes no parameters 🤯. The consequence is that all "variables" and functions are immutable and do not modify their inputs, which takes some time to get used to, but becomes worth it when you're able to solve problems with concise, safe, and elegant code.

**To practice with my newfound skills, I implemented Newton's method** (approximates x-intercept of function) in Haskell and I was amazed that I could write it in 3 lines, substantially shorter than the imperative approach. A difference of functional programming compared to imperative programming is that you are defining what something is (e.g. with recursion) vs. how to calculate it (e.g. loops), and I used this principle to recursively implement Newton's method.

```
newtonsMethod :: (RealFloat a, Integral b) => (a -> a) -> (a -> a) -> a -> b -> a
newtonsMethod _ _ x 0 = x
newtonsMethod f f' x iterations = newtonsMethod f f' (x - (f x) / (f' x)) (iterations - 1) 
```

**Link to Full Code: <a href = "https://github.com/rohanphanse/haskell-adventures/" target = "_blank">https://github.com/rohanphanse/haskell-adventures/</a>**

I'm also very impressed with Haskell's type system and its generic types feel very intuitive and easy to use.

I've been following this tutorial (<a href = "http://learnyouahaskell.com/chapters">http://learnyouahaskell.com/chapters</a>) and **I'm excited to continue learning and explore how modules, IO, and functors work**. And thank you Atticus for being so effusive about your love for Haskell, you have brought a new recruit into the Haskell legion. I currently understand 5/10 ways to map a list from your blog post and I'd love to ask you how the monad, functor, and applicative examples work (we can skip imperative, I don't think anyone needs to know how to do that in Haskell 🙂).

P.S. I've scoured online and I couldn't find a single straight-forward explanation of what a **monad** is, leading me to believe this is some sort of covered-up Internet conspiracy. Don't worry, I'll get to the bottom of this soon enough 🧐.