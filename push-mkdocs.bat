@REM @echo off
cd /d "D:\VSCODE\rangoljx.github.io"
set commitDate=%date:~0,4%-%date:~5,2%-%date:~8,2%
@REM set /p commitMessage="请输入提交信息: "
git add .
@REM git commit -m "%commitMessage% - %commitDate%"
git commit -m "auto-commit - %commitDate%"
git push -u origin master