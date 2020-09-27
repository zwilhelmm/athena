### Brew packages:
coreutils
moreutils
findutils
git
jq
p7zip
postgresql
prettyping
pyenv
the_silver_searcher
tree
typescript
youtube-dl

### ZSH:

# Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install PowerLevel10k
# Set ZSH_THEME="powerlevel10k/powerlevel10k" in ~/.zshrc.
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Install font, then run p10k configure
https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k

# Clone into ~/.oh-my-zsh/custom/plugins, then restart.
zsh-autosuggestions
zsh-completions
zsh-syntax-highlighting

# Restart the terminal.