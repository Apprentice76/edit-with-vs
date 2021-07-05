# Edit in VS Code
> _Opens the selected text in a VS Code text file_

![project demo](https://media.giphy.com/media/5dRd9AhjMxnXOityB5/giphy.gif)

Demo video link (https://vimeo.com/570875673)

## Installation
- Open extensions tab in Chrome, turn developer mode on
- Select `LOAD UNPACKED`, then select the extension folder in dialog box

![copying](https://i.imgur.com/ZehlbXg.gif)
- Copy `ID` of the extension (make sure there isn't any whitespace, you can double-click the `ID` and copy the selection to avoid this )

![pasting](https://i.imgur.com/uBrOY8h.gif)
- Go back to extension folder and run install.bat from `config` folder
- Paste the id (Ctrl + V) or (Win + V) to open clipboard and then select the id
- Press enter
- That's it, go to any page, then right-click & select 'Edit with VS Code' from the context menu (Refresh older tabs, i.e., those already open before extension was installed, to make this run on those tabs)

## Limitations
- Tested only on Chrome
- Runs in Windows only (batch files & registry editor)
- Opens text only in a text file in a temp directory, I'll see if file types can be set while opening with VS Code

## Troubleshooting
- Make sure to run install.bat, otherwise it won't run
- Make sure VS Code directory is in `PATH` of windows
- Refreshing the page is necessary, after installing the extension (otherwise content-script doesn't run)
- This is very unlikely but make sure you have powershell installed


## LICENCE
 GNU General Public License Version 3
 
## Contributing
PR's are welcome, but fork the project and do so only in `dev` branch

## Authors
 `Hritwik Som (Apprentice76)`
