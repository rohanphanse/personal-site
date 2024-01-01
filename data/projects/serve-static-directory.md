<div class = "close-lines">

Source Code: <a href = "https://github.com/rohanphanse/serve-static-directory" target = "_blank" rel="noreferrer">https://github.com/rohanphanse/serve-static-directory</a>

Live Demo: <a href = "https://serve-static-directory.roar123.repl.co" target = "_blank" rel="noreferrer">https://serve-static-directory.roar123.repl.co
</a>
</div>

## Serve Static Directory
After happily yet blindly using the powerful feature in Express.js to host all content within a directory, I wanted to pay my respects and understand how it worked by implementing it myself.

In this project, I created a Node.js http server from scratch which recursively traverses through the given directories, stores the JSON formatted tree data in a cache, uses HTML and JavaScript code to render the folder UI, and hosts all files by assigning them a URL path where their contents are accessible.

## Development Process

As I developed the backend, I learned a lot about HTTP servers and the HTTP standard, including Content-Types, Headers, and Status Codes. I learned about the tree data structure and how to build and traverse one.

Midway, I realized that I was recomputing the file tree each program cycle, which was taking too much time. To solve this, I created a cache and used existing data unless recomputation was specifically requested.

## Demo
The folder UI that I designed is shown on the left, and the file tree data stored in JSON format is shown on the right. I host three directories: the source code for Serve Static Directory at <code class = "language-txt">/root</code>, the public directory at <code class = "language-txt">/</code>, and the Express.js source code at <code class = "language-txt">/express</code>.

<div class = "two-image-row">
    <img src = "/images/projects/serve-demo.png"  />
    <img src = "/images/projects/serve-tree.png" />
</div>

## Featured Code

The code below recursively traverses a directory and constructs a file tree with metadata (name, path, type, children) for each file/subdirectory. I used the <code class = "language-txt">fs.promises</code> Node.js library and wrote asynchronous code with the <code class = "language-txt">async</code> and <code class = "language-txt">await</code> keywords.

```js
// /util/directory.js; lines 24-43
async function readDirectoryRecursively(directory_node) {
    const children_names = await fsPromises.readdir(path.join(root_directory_path, directory_node.path))
    const check_ignore = Array.isArray(options.ignore)
    for (const name of children_names) {
        const node_path = path.join(directory_node.path, name)
        if (!(check_ignore && options.ignore.includes(node_path))) {
            const stats = await fsPromises.stat(path.join(root_directory_path, node_path))
            const type = stats.isDirectory() ? "directory" : "file"
            const node = new Node({ 
                name,
                path: node_path,
                type
            })
            directory_node.children.push(node)
            if (type === "directory") {
                await readDirectoryRecursively(node)
            }
        }
    }
}
```