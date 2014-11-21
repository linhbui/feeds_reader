class UpdateUrlUniqueness < ActiveRecord::Migration
  def change
    remove_index :feeds, column: :url
    add_index :feeds, :url
    add_index :feeds, [:url, :user_id], unique: true
  end
end
