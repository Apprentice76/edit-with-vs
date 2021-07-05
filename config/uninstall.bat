set key=com.hksm.vscode.native

rd "%localappdata%\clients" /s /q

reg delete "HKCU\SOFTWARE\Google\Chrome\NativeMessagingHosts\%key%" /f