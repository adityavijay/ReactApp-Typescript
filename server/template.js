export default ({body, title})=>{
	
	return `<!Doctype html>
	<html>
	<head>
	<title>${title}</title>
	</head>
	<body>
	  <div id="root">${body}</div>
	</body>
	<script src="/dist/bundle.js"></script>`;
}	