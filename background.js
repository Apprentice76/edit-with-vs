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

function doThis(info, _) {
    chrome.runtime.connectNative('com.skyly.vscode.native')
	console.log('selectedText:', info.selectionText)
}

chrome.contextMenus.onClicked.addListener(doThis)
