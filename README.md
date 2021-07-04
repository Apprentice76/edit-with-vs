# Edit in VS Code
> _Opens the selected text in a VS Code text file_

## Installation
- Run install.bat from preConfig prior to adding the extension
- Open extensions tab in Chrome, turn developer mode on
- Select `LOAD UNPACKED`, then select the extension folder in dialog box
- It should be installed, refresh any page, then right-click & select 'Edit with VS Code' from the context menu

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