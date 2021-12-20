#!/bin/bash
clear
git add .
read -p "🐱 Commit message: " message
git commit -m "$message"
git status
echo "✅ Your commit message was: " $message
