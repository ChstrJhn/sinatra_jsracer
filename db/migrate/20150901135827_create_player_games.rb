class CreatePlayerGames < ActiveRecord::Migration
  def change
  	create_table :player_games do |t|
  		t.integer :player1_id
  		t.integer :player2_id
  		t.integer :game_id
  		t.timestamps null:false
  	end
  end
end
