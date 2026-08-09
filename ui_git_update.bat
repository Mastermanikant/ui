@echo off
title FrankBase UI - Auto Local Git Version Control Tracker
color 0A
cls
echo ================================================================
echo    FRANKBASE UI - AUTO LOCAL GIT VERSION CONTROL TRACKER
echo ================================================================
echo Working Directory: d:\Best_ui
echo Target Project: d:\Best_ui\New Website\FrankBase_UI
echo Remote GitHub: https://github.com/Mastermanikant/ui.git
echo Checking for local file changes every 30 seconds...
echo Press Ctrl+C anytime to stop.
echo ================================================================
echo.

cd /d d:\Best_ui

:LOOP
git status --porcelain > %temp%\git_status.txt
set GIT_CHANGES=
set /p GIT_CHANGES=<%temp%\git_status.txt

if defined GIT_CHANGES (
    echo [%time%] [UPDATED] Local file changes detected! Committing to local Git...
    git add .
    git commit -m "Auto local update - %date% %time%"
    echo [%time%] [SUCCESS] Local Git version updated successfully!
    echo ----------------------------------------------------------------
) else (
    echo [%time%] [NO CHANGE] No local changes detected. Watching...
)

del %temp%\git_status.txt >nul 2>&1
timeout /t 30 >nul
goto LOOP
