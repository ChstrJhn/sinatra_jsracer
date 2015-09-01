class CreateGames < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.float :winning_time
  		t.string :winner_name
  		t.string :loser_name
  		t.timestamps null:false
  	end
  end
end
