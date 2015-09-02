class CreatePlayers < ActiveRecord::Migration
  def change
  	create_table :players do |t|
  		t.string :name
  		t.time :game_time
  		t.boolean :won, default:false
  		t.integer :games_won, default:0
        t.timestamps null:false
    end
    add_index(:players, :name, :unique => true)
  end
end
