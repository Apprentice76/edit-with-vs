@echo off
set key=com.hksm.vscode.native

cd /d "%~dp0"
cd ..

reg add "HKCU\SOFTWARE\Google\Chrome\NativeMessagingHosts\%key%" /f /t REG_SZ /d "%cd%\clients\vscode.json"

@REM pause