@echo off
setlocal
cd /d "%~dp0"

echo.
echo Vignesh Infinity Academy - Clean npm installation
echo -------------------------------------------------
echo Close any running Next.js terminal before continuing.
echo.

if exist node_modules (
  echo Removing old node_modules...
  rmdir /s /q node_modules
)

if exist package-lock.json (
  echo Removing old package-lock.json...
  del /f /q package-lock.json
)

if exist .next (
  echo Removing old .next build cache...
  rmdir /s /q .next
)

echo Setting the official public npm registry...
call npm config set registry https://registry.npmjs.org/
echo Checking npm registry access...
call npm ping
if errorlevel 1 (
  echo.
  echo npm could not reach registry.npmjs.org.
  echo Check your internet, VPN, proxy, firewall, or antivirus settings and try again.
  pause
  exit /b 1
)

echo.
echo Installing project packages...
call npm install --registry=https://registry.npmjs.org/
if errorlevel 1 (
  echo.
  echo Installation failed. Review the npm error above.
  pause
  exit /b 1
)

echo.
echo Installation completed successfully.
echo Run: npm run dev
pause
