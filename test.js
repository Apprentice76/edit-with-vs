chrome.runtime.onMessage.addListener(
    (req, sender, resp) => {
        if (req.q === 'getSelection') {
            const text = document.createElement('textarea')
            text.innerHTML = window.getSelection().toString()
            console.log('received:', req.selection)
            document.body.appendChild(text)
            text.focus()
            text.select()
            document.execCommand('copy')
            document.body.removeChild(text)
            resp({ q: 'success' })
            // return true
        } else {
            resp({ q: 'failure'})
        }
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