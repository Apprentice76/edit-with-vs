@echo off
set key=com.skyly.vscode.native

reg add "HKCU\SOFTWARE\Google\Chrome\NativeMessagingHosts\%key%" /t REG_SZ /d "%~dp0vscode.json"

pause