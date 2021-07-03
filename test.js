chrome.runtime.onMessage.addListener(
    (req, sender, resp) => {
        const text = document.createElement('textarea')
        text.value = req.selection
        console.log('received:', req.selection)
		document.body.appendChild(text)
		text.select()
		document.execCommand('copy')
        document.body.removeChild(text)
        // chrome.runtime.connectNative('com.skyly.vscode.native')
        resp({ q: 'success' })
        // return true
    }
)

// const doThis = (info, _) => {
// 	const text = document.createElement('textarea')
// 	text.value = info.selectionText
// 	console.log('text:', info.selectionText)
// 	document.body.appendChild(text)
// 	text.select()
// 	document.execCommand('copy')
// 	document.body.removeChild(text)
// 	chrome.runtime.connectNative('com.skyly.vscode.native')
// }

// chrome.contextMenus.onClicked.addListener(doThis)