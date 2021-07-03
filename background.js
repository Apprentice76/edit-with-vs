chrome.runtime.onInstalled.addListener(() => {
	let contextProperties = {
		contexts: ['selection'],
		title: 'Open in VS Code',
		visible: true,
		id: 'main',
	}

	chrome.contextMenus.create(contextProperties)
})

function doThis(info, tab) {
	// console.log('tab:', tab, '\ninfo:', info)
	// console.log('selectedText:', info.selectionText)

	// const port = chrome.runtime.connectNative('com.skyly.vscode.native')

	// chrome.tabs.sendMessage(
	// 	tab.id,
	// 	{ selection: info.selectionText },
	// 	(resp) => {
	// 		if (resp.q === 'success') {
	// 			console.log(resp.q)
	// 			let port = chrome.runtime.connectNative(
	// 				'com.skyly.vscode.native'
	// 			)

	// 			port.onMessage.addListener((msg) => {
	// 				console.log('Received' + msg)
	// 			})
	// 			port.onDisconnect.addListener(() => {
	// 				console.log('Disconnected')
	//             })
	//             port.postMessage('Hi')
	// 		}
	// 	}
	// )
	chrome.tabs.sendMessage(tab.id, { q: 'getSelection' }, (resp) => {
		// console.log(resp.q)
		if (resp?.q === 'success') {
			chrome.runtime.connectNative('com.skyly.vscode.native')
            console.log(resp.q)
		}
	})
}

chrome.contextMenus.onClicked.addListener(doThis)
