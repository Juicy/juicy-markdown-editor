# &lt;juicy-markdown-editor&gt;

> Polymer Element with GitHub Flavored Markdown (GFM) editor with file drop and paste functionality

## Demo
![Preview](preview.png?raw=true "Preview")

[Check it live!](http://Juicy.github.io/juicy-markdown-editor)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install juicy-markdown-editor --save
```

Or [download as ZIP](https://github.com/Juicy/juicy-markdown-editor/archive/gh-pages.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/juicy-markdown-editor/juicy-markdown-editor.html">
    ```

3. Start using it!

    ```html
    <my-element uploadurl="/storage/server/path"></my-element>
    ```

## Options

Attribute      | Options  | Default  | Description
---            | ---      | ---      | ---
`uploadurl`    | *string* | ``       | URL to files storage server, see [`<juicy-filedrop url>`](https://github.com/Juicy/juicy-filedrop#options).
`customheader` | *string* | `x-file` | Name for custom header that contains JSON with file meta data, see [`<juicy-filedrop customheader>`](https://github.com/Juicy/juicy-filedrop#options).
`ghcss`   | *boolean* | `false` | Should ghithub-markdown.css be imported? see [`<juicy-markdown ghcss>`](https://github.com/Juicy/juicy-markdown#options).
`value`        | *string* | ``       | Markdown to render.
`placeholder`  | *string* | ``       | Input placeholder.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Juicy/juicy-markdown-editor/releases).
