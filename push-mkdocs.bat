@REM @echo off
cd /d "D:\VSCODE\rangoljx.github.io"
set commitDate=%date:~0,4%-%date:~5,2%-%date:~8,2%
set /p commitMessage="请输入提交信息: "
git add .
git commit -m "autocommit: %commitMessage% - %commitDate%"
@REM git commit -m "auto-commit - %commitDate%"
git push -u origin master