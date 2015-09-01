class Player < ActiveRecord::Base
validates :name, presence: true, uniqueness: true

has_many :player_games
has_many :games, :through => :player_games
end
