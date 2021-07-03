let color = '#3aaa77'

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color })
    console.log('Default bg color set to %cgreen', `color: ${color}`)
})