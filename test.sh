#!/bin/bash

for i in `seq 31`; 
do
  git commit --allow-empty -m 'test trigger'
  git push private head
  sleep 1
done



