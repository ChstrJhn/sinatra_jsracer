get '/' do
  erb :home
end

get '/new_game/:id' do
  session[:time] = Time.now
  @game = Game.find(params[:id])
  @user_game = PlayerGame.find_by_game_id(@game.id)
  @player_one = Player.find(@user_game.player1_id)
  @player_two = Player.find(@user_game.player2_id)
  @page_name = "game_page"
  erb :game
end

post '/signup' do
	@player_details = params[:signup]
	@player_one = Player.create(name: @player_details[:playerone_name])
	@player_two = Player.create(name: @player_details[:playertwo_name])
	if @player_one.save && @player_two.save
	  @game = Game.create
	  @new_race = PlayerGame.create(player1_id: @player_one.id, player2_id: @player_two.id, game_id: @game.id)
	  redirect "/new_game/#{@game.id}"
	else
	  @player_one = Player.find_by(name: @player_details[:playerone_name])
	  @player_two = Player.find_by(name: @player_details[:playertwo_name])
	  @game = Game.create
	  @new_race = PlayerGame.create(player1_id: @player_one.id, player2_id: @player_two.id, game_id: @game.id)
	  redirect "/new_game/#{@game.id}"
	end
end

get '/game/stats/:id' do
  @game = Game.find(params[:id])
  @winner = Player.find_by(name: @game.winner_name)
  erb :game_stats
end

post '/game/result/:id' do
	@game = Game.find(params[:id])
	@time_taken = Time.now - session[:time]
    @game.update(winner_name: params[:winner], loser_name: params[:loser], winning_time: @time_taken)
    @winner = Player.find_by(name: params[:winner])
    @winner.games_won += 1
    @winner.save
	redirect "/game/stats/#{@game.id}"
end

