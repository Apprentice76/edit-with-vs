chrome.runtime.onMessage.addListener((req, _, sendResp) => {
	if (req.q === 'getSelection') {
		const element = document.createElement('textarea')
		element.innerHTML = window.getSelection().toString()
		element.setAttribute('readonly', '')
        element.style.position = 'absolute'
        element.style.left = '-9999px'
		document.body.appendChild(element)
		element.select()
		document.execCommand('copy')
        document.body.removeChild(element)
		sendResp({ q: 'success' })
        return true
	} else {
		sendResp({ q: 'failure' })
	}
})