@echo off
cd /d "C:\Users\victo\OneDrive\Área de Trabalho\ColorBox"
del /f .git\index.lock 2>nul
git add public\criativos\feed_01.png public\criativos\feed_02.png public\criativos\feed_03.png public\criativos\feed_04.png public\criativos\feed_07.png public\criativos\feed_08.png
git commit -m "feat: adiciona 6 novos criativos de feed para anuncios"
git push origin main
echo.
echo Pronto! Aguarde ~1 minuto para o Vercel fazer o deploy.
pause
