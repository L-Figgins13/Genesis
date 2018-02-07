export default function template(body, initialState) {

    return `<!DOCTYPE HTML>
<html>
<head>
    <meta charset = "UTF-8" />
    <title>Genesis</title>
    <meta name= "viewport" content= "width=device-width, initial-sacle=1.0">
</head>

<body>
    <div id ="contents">${body}</div>
    <!-- this is where our component will appear -->
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; </script>
    <script src="/vendor.bundle.js"></script>
    <script src="/app.bundle.js"></script>
</body>
</html>
`;
}
//# sourceMappingURL=template.js.map