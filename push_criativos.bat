@echo off
cd /d "C:\Users\victo\OneDrive\Área de Trabalho\ColorBox"
echo.
echo === ColorBox - Push Criativos para Vercel ===
echo.

rem Desfaz o commit automatico ruim (que deletou .claude/) e refaz limpo
echo Corrigindo commit anterior...
git reset --hard HEAD~1

echo Adicionando criativos...
git add public\criativos\feed_instagram.png
git add public\criativos\story_chega_briga.png
git add public\criativos\video_01.mp4
git add public\criativos\video_02.mp4

echo Criando commit...
git commit -m "feat: add ad creatives for Meta Ads campaign"

echo Fazendo push...
git push origin main

echo.
echo === Pronto! Vercel vai deployar em ~1 minuto ===
pause
