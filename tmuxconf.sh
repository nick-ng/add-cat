MY_SESSION=$(tmux list-sessions | grep "addcat")
if [[ ! $MY_SESSION ]]; then
		# create a new session and `-d`etach
		tmux new-session -d -s addcat
		tmux new-window
		tmux send "npm start"
		tmux attach-session -d -t addcat
fi
