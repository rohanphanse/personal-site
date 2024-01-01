<div class = "close-lines">

Source Code: <a href = "https://github.com/rohanphanse/steganography" target = "_blank" rel="noreferrer">https://github.com/rohanphanse/steganography</a>

Live Demo: <a href = "https://replit.com/@Roar123/steganography?embed=true" target = "_blank" rel="noreferrer">https://replit.com/@Roar123/steganography?embed=true
</a>
</div>

# Steganography

Steganography is a form of cryptography where a hidden message is concealed inside another message. For images, this process works by encrypting the most significant bits of a hidden image into the least significant bits of a main image, and then displaying the hidden image bits to reveal the image. The beauty of the steganography is that the hidden bits fly under the human vision radar, yet the information is readily available for the computer to decrypt it.

## Features
* Encrypt a hidden image into another image
* Decrypt and reveal hidden image
* Beautiful terminal interface with colors!
* Automatically scale images to fit correctly
* Bit manipulations on image buffer 😋

## Development Process

I wrote this program in Rust and gained experience with using the <code class = "language-txt">image</code> crate from this amazing tutorial by freeCodeCamp (<a href = "https://www.freecodecamp.org/news/rust-in-replit/" target = "_blank" rel="noreferrer">link</a>).

## Featured Code

I want to feature 2 pieces of code, because they were the most rewarding and challenging things to get right.

### 1. Bit Manipulation

This was super fun for me to figure out and I learned how to use the bitwise operators <code class = "language-txt">AND &</code>, <code class = "language-txt">OR |</code>, and <code class = "language-txt"><< BITSHIFT >></code>.

```rust
// src/main.rs, line 129
encrypted.push(
    (main_pixel[i] & 0b_1111_1000) +        // Replace last 3 bits of main pixel
    ((hidden_pixel[i] & 0b_1110_0000) >> 5) // with first 3 bits of hidden pixel
);
```

The code above creates an encrypted pixel where the three least significant bits of the main image are replaced with the three most significant bits of the hidden pixel. The result is that the encrypted image resembles the main image to ~97% accuracy, but contains enough information to reassemble the hidden image to ~88% accuracy. This is how steganography slips hidden images under the human radar while allowing computers to recover them. 

### 2. Traversing Through Image Buffer

Images are stored in buffers (1d arrays), so I had to figure out how to traverse the buffer while keeping track of the 2d location of the pixels. After a lot of mindless debugging, I realized that <code class = "language-txt">image_height * image_width * 4 == buffer_length</code> and having reached enlightenment, I blissfully wrote the code below in a state of nirvana.

```rust
// src/main.rs, lines 97-107
for h in 0..main_height {
    for w in 0..main_width {
        // Convert 2d pixel location (w, h) to 1d index in image buffer
        i = (h * main_width + w) * 4;
        if h < hidden_height && w < hidden_width  {
            encrypted.splice(i..=i + 3, encrypt_bits(&main_vec, i, &hidden_vec, (h * hidden_width + w) * 4));
        } else {
            encrypted.splice(i..=i + 3, encode_transparent_pixel(&main_vec, i));
        }
    }
}
```

## Testing

My steganographer passes my tests with flying colors on <code class = "language-txt">.png</code> files and fails on <code class = "language-txt">.jpg</code> (I suspect that jpeg does some compression which conflicts with my bit manipulations).


## Examples

*Credit to pngimg.com for [Mario](https://pngimg.com/image/30596) and Stack Overflow post for [Tux](https://stackoverflow.com/questions/24450999/add-border-around-png-image-using-imagick-php).*

<div class = "two-table">
    <div class = "two-table-header">Main - Mario</div>
    <div class = "two-table-header">Hidden - Tux</div>
    <div class = "two-table-item">
        <img src = "https://raw.githubusercontent.com/rohanphanse/steganography/main/images/mario.png" alt = "mario - main image" />
    </div>
    <div class = "two-table-item">
        <img src = "https://raw.githubusercontent.com/rohanphanse/steganography/main/images/penguin.png" alt = "penguin - hidden image" />
    </div>
</div>

<div class = "two-table">
    <div class = "two-table-header">Encrypted (Tux Hidden in Mario)</div>
    <div class = "two-table-header">Decrypted (Tux Revealed 🥳)</div>
    <div class = "two-table-item">
        <img src = "https://raw.githubusercontent.com/rohanphanse/steganography/main/images/mar-peng-enc.png" alt = "mario penguin - encrypted image" />
    </div>
    <div class = "two-table-item">
        <img src = "https://raw.githubusercontent.com/rohanphanse/steganography/main/images/mar-peng-dec.png" alt = "mario penguin - decrypted image" />
    </div>
</div>


*Credit to Wikipedia for [Paysage by Camille Pissarro](https://commons.wikimedia.org/wiki/File:Camille_Pissarro_-_Paisaje_tropical.jpg) and [Mona Lisa](https://en.wikipedia.org/wiki/File:Mona_Lisa.jpg)*

<div class = "two-table">
    <div class = "two-table-header">Main - Paysage</div>
    <div class = "two-table-header">Hidden - Mona Lisa</div>
    <div class = "two-table-item">
        <img src = "https://raw.githubusercontent.com/rohanphanse/steganography/main/images/paysage.png" alt = "paysage - main image" />
    </div>
    <div class = "two-table-item">
        <img src = "https://raw.githubusercontent.com/rohanphanse/steganography/main/images/mona-lisa.png" alt = "mona lisa - hidden image" />
    </div>
</div>

<div class = "two-table">
    <div class = "two-table-header">Encrypted (Mona Lisa Hidden in Paysage)</div>
    <div class = "two-table-header">Decrypted (Mona Lisa Revealed 🥳)</div>
    <div class = "two-table-item">
        <img src = "https://raw.githubusercontent.com/rohanphanse/steganography/main/images/pay-mona-enc.png" alt = "paysage mona lisa - encrypted image" />
    </div>
    <div class = "two-table-item">
        <img src = "https://raw.githubusercontent.com/rohanphanse/steganography/main/images/pay-mona-dec.png" alt = "paysage mona lisa - decrypted image" />
    </div>
</div>
