if [ -d "_site" ]; then
  git checkout master &&
  mkdir dontdelete  &&
  cp -r _site dontdelete/_site &&
  cp CNAME dontdelete/CNAME &&

  find . -maxdepth 1 ! -name 'dontdelete' ! -name '.*' | xargs rm -rf &&
  cp -r dontdelete/_site/* . &&
  cp -r dontdelete/CNAME .

  rm -rf dontdelete


  touch .nojekyll
else
  echo "Make sure to generate _site first"
fi
