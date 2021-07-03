chrome.runtime.onMessage.addListener((req, sender, resp) => {
	if (req.q === 'getSelection') {
		const element = document.createElement('textarea')
		element.innerHTML = window.getSelection().toString()
		element.setAttribute('readonly', '')
        element.style.position = 'absolute'
        element.style.left = '-9999px'
		document.body.appendChild(element)
		element.focus()
		element.select()
		document.execCommand('copy')
        document.body.removeChild(element)
		resp({ q: 'success' })
        return true
	} else {
		resp({ q: 'failure' })
	}
})