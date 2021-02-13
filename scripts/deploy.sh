npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/shmao-0428/shmao-0428.github.io.git master

cd ../
rm -rf public