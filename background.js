let color = '#3aaa77'

chrome.runtime.onInstalled.addListener(() => {
	// chrome.storage.sync.set({ color })
	// console.log('Default bg color set to %cgreen', `color: ${color}`)

	let contextProperties = {
		contexts: ['selection'],
		title: 'Open in VS Code',
		visible: true,
		id: 'main',
	}

	chrome.contextMenus.create(contextProperties)
})

function copyText(str) {
	const document = chrome.extensions.getBackgroundPage().document
	const text = document.createElement('textarea')
	text.value = str
	document.body.appendChild(text)
	text.select()
	document.execCommand('copy')
	document.body.removeChild(text)
}

function doThis(info, tab) {
	console.log('tab:', tab, '\ninfo:', info)
	// console.log('selectedText:', info.selectionText)
	// const port = chrome.runtime.connectNative('com.skyly.vscode.native')
	const text = document.createElement('textarea')
	text.value = info.selectionText
	document.body.appendChild(text)
	text.select()
	document.execCommand('copy')
	document.body.removeChild(text)
}

chrome.contextMenus.onClicked.addListener(doThis)
