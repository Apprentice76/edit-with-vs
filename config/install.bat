@REM WARNING: Don't modify this!

@echo off
set key=com.hksm.vscode.native

cd /d "%~dp0"
cd ..

@REM generates JSON file

set /p id="Enter ID: "
echo { > clients/vscode.json
echo     "name": "com.hksm.vscode.native", >> clients/vscode.json
echo     "description": "Starts VS Code", >> clients/vscode.json
echo     "path": "start.bat", >> clients/vscode.json
echo     "type": "stdio", >> clients/vscode.json
echo     "allowed_origins": [ >> clients/vscode.json
echo         "chrome-extension://%id%/" >> clients/vscode.json
echo      ] >> clients/vscode.json
echo } >> clients/vscode.json

@REM pause

xcopy ".\clients" "%localappdata%\clients" /i /y /q

@REM pause

reg add "HKCU\SOFTWARE\Google\Chrome\NativeMessagingHosts\%key%" /f /t REG_SZ /d "%localappdata%\clients\vscode.json"

@REM pause