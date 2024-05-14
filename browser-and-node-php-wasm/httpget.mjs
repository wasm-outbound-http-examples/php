import { PhpNode } from 'php-wasm/PhpNode.mjs';
const php = new PhpNode();

php.addEventListener('output', (event) => {
    console.log(event.detail[0]);
});

php.addEventListener('ready', () => {
    php.run(`
<?php
$url = 'https://httpbin.org/anything';

$window = new Vrzno();
$window->fetch($url)
->then(function($res) { return $res->text(); })
->then(function($txt) { echo($txt); });
`);
});
