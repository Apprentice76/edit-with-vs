chrome.runtime.onInstalled.addListener(() => {
	let contextProperties = {
		contexts: ['selection'],
		title: 'Open in VS Code',
		visible: true,
		id: 'main',
	}

	chrome.contextMenus.create(contextProperties)
})

function doThis(_, tab) {
	chrome.tabs.sendMessage(tab.id, { q: 'getSelection' }, (resp) => {
		if (resp?.q === 'success') {
			chrome.runtime.connectNative('com.skyly.vscode.native')
			console.log(resp.q)
		}
	})
}

chrome.contextMenus.onClicked.addListener(doThis)
