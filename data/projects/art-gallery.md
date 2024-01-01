Source Code: <a href = "https://github.com/rohanphanse/art-gallery" target = "_blank" rel="noreferrer">https://github.com/rohanphanse/art-gallery</a>

# Art Gallery

Decentralized art gallery built on NEAR blockchain with AssemblyScript and React.

**Demo: <a href = "https://rohanphanse.github.io/art-gallery/" target = "_blank">https://rohanphanse.github.io/art-gallery/</a>**

Learned how to deploy and interact with smart contracts on NEAR thanks to this amazing tutorial: <a href = "https://dacade.org/communities/near/courses/near-101" target = "_blank" rel="noreferrer">https://dacade.org/communities/near/courses/near-101</a>.

## Features
* Allow users to upload artworks to NEAR blockchain
* Ensure that users can delete their own artworks, but not those from others
* Heart ❤️ (or unheart) artworks, duplicate "hearting" is prevented
* No ugly Bootstrap framework, beautiful default CSS styles :)

## Development Process
I tackled the development process in 2 steps: writing the smart contract and creating the front-end.
1. I used AssemblyScript (similar to Typescript, compiles to WebAssembly) to write the smart contract and I used the near-cli tools to deploy and test out the smart contract.
2. I coded the front-end in React and used NEAR’s sdk to allow users to connect to their wallets and use smart contract methods.

## Demo Walkthrough

First, login into Decentralized Art Gallery with your NEAR testnet wallet. 

<img src = "https://raw.githubusercontent.com/rohanphanse/art-gallery/417e440d69aa3d395495d278c6f3bdb2b6f65c90/public/images/connect-wallet.png" alt = "Login Page" class = "image-border"  />

You will be redirected to NEAR's website to connect to your wallet.

<img src = "https://raw.githubusercontent.com/rohanphanse/art-gallery/417e440d69aa3d395495d278c6f3bdb2b6f65c90/public/images/near-login.png" alt = "Connect NEAR Wallet" class = "image-border"  />

Once you're logged in, you will see your account ID and balance in the top-left corner. And of course, the beautiful artworks in the gallery! Click the heart button to add or remove your heart from the corresponding artwork. Click the X button to delete your artwork (you will only see it for artworks you uploaded).

<img src = "/images/projects/art-gallery-demo.png" alt = "Art Gallery Demo" class = "image-border" />

At the bottom of the page, you will see a bunch of inputs, which you can use to upload your own artworks to the gallery. 

The artworks and records of all transactions are stored on the blockchain. I'm using NEAR's transaction viewer to display one such transaction: calling the <code class = "language-txt">setArtwork</code> smart contract method to upload a new artwork to the blockchain.

<div class = "g-center-row">
    <img src = "/images/projects/art-gallery-transaction.png" alt = "Art Gallery Transaction" class = "image-border" style = "width: 75%" />
</div>

## Featured Code

The smart contract method below handles a request to add a heart to an artwork. If the user has already hearted the artwork, their heart is removed, their ID is removed from an internal list, and the count is decremented. 

```js
// /smart-contract/assembly/index.ts; lines 45-66
export function heartOrUnheartArtwork(id: string): void {
    const artwork = artworks.get(id);
    if (artwork === null) {
        throw new Error(`Cannot find artwork with id ${id}`);
    }
    let heartsList = hearts.get(id, null);
    if (heartsList === null) {
        heartsList = new PersistentVector<string>(`h${id}`);
        hearts.set(id, heartsList); 
    }
    for (let i = 0; i < heartsList.length; i++) {
        if (heartsList[i].toString() == context.sender.toString()) {
            heartsList.swap_remove(i);
            artwork.hearts--;
            artworks.set(artwork.id, artwork);
            return;
        }
    }
    heartsList.push(context.sender);
    artwork.hearts++;
    artworks.set(artwork.id, artwork);
}
```