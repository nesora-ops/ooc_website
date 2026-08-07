git author and gh cli must be nesora-ops (ops@nesora.co.in) , it is one of the authenticated user in the machine's terminal.
once ready, to be pushed here. add a gitignore and .env (C:\Users\hrida\Documents\AA A\hkforprojects\CVP\ooc_website\.env) must be gitignored.


echo "# ooc_website" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nesora-ops/ooc_website.git
git push -u origin main
