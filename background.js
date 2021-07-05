chrome.runtime.onInstalled.addListener(() => {
	let contextProperties = {
		contexts: ['selection'],
		title: 'Edit with VS Code',
		visible: true,
		id: 'main',
	}

	chrome.contextMenus.create(contextProperties)
})

function doThis(_, tab) {
	chrome.tabs.sendMessage(tab.id, { q: 'getSelection' }, (resp) => {
		if (resp?.q === 'success') {
			chrome.runtime.sendNativeMessage('com.hksm.vscode.native', {})
			// console.log(resp.q)
		}
	})
}

chrome.contextMenus.onClicked.addListener(doThis)
