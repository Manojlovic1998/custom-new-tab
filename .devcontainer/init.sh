# Install All Dependencies
npm i

echo "Cloning img-optimize project repo"
git clone https://github.com/VirtuBox/img-optimize.git $HOME/.img-optimize

echo "Creating img-optimize alias in $($HOME)/.bashrc ..."

echo "alias img-optimize=$HOME/.img-optimize/optimize.sh" >> $HOME/.bashrc

echo "Sourcing .bashrc file into current active bash env"
. ~/.bashrc

echo "----------------------------"
echo "Installation Completed"
echo "----------------------------"